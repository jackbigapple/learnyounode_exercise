#!/usr/local/bin/node

var http = require('http')
var progress = 0;
var bufArray = new Array();

function httpGet(index) {
    http.get(process.argv[2 + index], function(response) {
        response.setEncoding('utf8');
        var buffer = '';
        response.on('data', function(data) {
            buffer += data;
        });
        response.on('end', function(data) {
            bufArray[index] = buffer;
            progress++;
            if(progress == 3) dumpBufArray();
        });
        response.on('error', console.error);
    });
}

function dumpBufArray() {
    for ( var i = 0; i < 3; i++ )
        console.log(bufArray[i]);
}

for ( var i = 0; i < 3; i++ )
    httpGet(i);
