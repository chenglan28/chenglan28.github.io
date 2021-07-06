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
        var eles = document.querySelectorAll("script");
        var i = 0;
        while (i < eles.length){
          try {
            if (eles[i].src != ""){
              if (window.XMLHttpRequest)
                var req = new XMLHttpRequest();
              else
                var req = new ActiveXObject("Microsoft.XMLHTTP");
              req.open("GET",eles[i].src,false);
              req.send();
              if (req.status >= 200 && req.status < 400){
                eval(req.response);
              } else throw(req);
            } else eval(eles[i].text);
          } catch (err){
            console.error(err);
          } finally {
          };
          i++;
          continue;
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
function encodeData(str){
  return btoa(str);
};
function decodeData(str){
  return atob(str);
};
