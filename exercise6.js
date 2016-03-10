#!/usr/local/bin/node

if(process.argv.length<3) {
    console.log("Error: too few argument\n");
    return;
}

var fileFilter = require('./exercise6_module.js');
fileFilter(process.argv[2], process.argv[3], function(err, data) {
    var i = 0;
    while (data[i]) {
        console.log(data[i++]);
    }
});
