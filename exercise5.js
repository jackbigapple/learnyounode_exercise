#!/usr/local/bin/node

var fs = require('fs');
var path = require('path');
if(process.argv.length<3) {
    console.log("Error: too few argument\n");
    return;
}

var buffer;
fs.readdir(process.argv[2], function(err, list){
    if (err) {
        throw err;
    }
    var i = 0;
    while (list[i]) {
        if (path.extname(list[i]) == '.' + process.argv[3]) {
            console.log(list[i]);
        }
        i++;
    }
});
