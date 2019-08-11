var tools = require('./toos.js');
var http = require('http');
var app = http.createServer(function (req, res) {
    res.writeHeader(200, {"Content-Type": "text/html;charset:utf-8"});
    res.write('hello,ni');
    res.end();
    console.log(tools.add(1, 2));
});
app.listen(8002);