var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});
    res.write("hello");
    var pathname = req.url;
    console.log(pathname);
    if(pathname!="/favicon.ico") {
        fs.readFile('html/' + pathname, function (err, data) {

        });
    }
    res.end();
}).listen(8002);
