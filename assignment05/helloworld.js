var http = require("http");

http.createServer(function(req, res){
    res.setHeader('Access-control-Allow-Origin', '*');
    res.write("Hello World");
    res.end();
}).listen(2000);