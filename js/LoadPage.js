function LoadPage(url){
  if (window.XMLHttpRequest){
    var xhr = new XMLHttpRequest();
  } else {
    var xhr = new ActiveXObject("Microsoft.XMLHTTP");
  };
  xhr.open("GET","/file/" + url,true);
  xhr.send();
  xhr.onload = function(){
    if (true || xhr.readystate == 4){
      if (xhr.status >= 200 && xhr.status < 400){
        document.body.innerHTML = xhr.response;
        var requirescript = document.querySelector("#requirescript");
        if (requirescript != null){
          requirescript = JSON.parse(requirescript.getAttribute("data-source"));
          var i = 0;
          while (i < requirescript.length){
            if (window.XMLHttpRequest){
              var req = new XMLHttpRequest();
            } else {
              var req = new ActiveXObject("Microsoft.XMLHTTP");
            };
            req.open("GET",requirescript[i],false);
            req.send();
            if (req.status >= 200 && req.status < 400)
              eval(req.responseText);
            else
              console.error("Cannot load javascript file:" + requirescript[i]);
            i++;
          };
        };
        var parseScript = document.querySelector("#parsescript");
        if (parseScript != null){
          parseScript = parseScript.innerHTML;
          eval(parseScript);
        };
      } else {
        document.body.innerHTML = "Failed to load the page.<hr>AirServer Error Report<br>·HTTP STATUS " + xhr.status + "<br><br>·Please refresh the page.<br>·Please contact the owner of this website.<a href=mailto:chenglan_mc@163.com>chenglan28</a> <a href=mailto:pcdn2021@outlook.com>cdn2021</a>";
      };
      if (!xhr.status){
        document.body.innerHTML = "Failed to send the request.<hr>AirServer Error Report<br>·Please contact the owner of this website.<a href=mailto:chenglan_mc@163.com>chenglan28</a> <a href=mailto:pcdn2021@outlook.com>cdn2021</a>";
      };
    };
  };
};
