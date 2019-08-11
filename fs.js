var fs = require('fs');
var rs = fs.createReadStream('tex.txt');
var ws = fs.createWriteStream('tex1.txt');
var str='';
rs.on('data', function (c) {
    str += c;
});
rs.on('end', function (c) {
    console.log(str);
});
rs.on('error', function (c) {
    console.log(c);
});