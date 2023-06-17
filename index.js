var http = require('http'),
fs = require('fs');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    var url = req.url.substring(1);
    if(fs.existsSync(url))res.end(fs.readFileSync(url));
    else res.end("404")
 
}).listen(3000);