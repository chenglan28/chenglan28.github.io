var http = require('http');
var fs = require('fs');
http.createServer(function(req, res){
    var url = req.url.split("?")[0].substr(1);
    if(url == "")url = "index.html"
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(fs.existsSync(url))res.end(fs.readFileSync(url));
    else res.end("404");
}).listen(3000);