#!/usr/local/bin/node

var fs = require('fs');
if(process.argv.length<3) {
    console.log("Error: too few argument\n");
    return;
}

var buffer = fs.readFileSync(process.argv[2]);
//console.log(buffer.toString().split('\n'));
console.log(buffer.toString().split('\n').length-1);
