#!/usr/local/bin/node

var http = require('http')

http.get(process.argv[2], function(response) {
    response.setEncoding('utf8');
    var buffer = '';
    response.on('data', function(data) {
        buffer += data;
    });
    response.on('end', function(data) {
        console.log(buffer.length);
        console.log(buffer);
    });
    response.on('error', console.error);
});
