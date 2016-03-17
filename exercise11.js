#!/usr/local/bin/node

var http = require('http')
var fs = require('fs')
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    fs.createReadStream(process.argv[3]).pipe(res);
}).listen(process.argv[2]);
