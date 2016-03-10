#!/usr/local/bin/node

var fs = require('fs');
if(process.argv.length<3) {
    console.log("Error: too few argument\n");
    return;
}

var buffer;
fs.readFile(process.argv[2], function(err, data){
    if (err) {
        throw err;
    }
    buffer = data;
    console.log(buffer.toString().split('\n').length-1);
});
