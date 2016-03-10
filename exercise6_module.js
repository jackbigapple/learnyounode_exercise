#!/usr/local/bin/node

module.exports = function (targetPath, ext, callback) {
    var fs = require('fs');
    var path = require('path');
    var buffer;
    fs.readdir(targetPath, function(err, list){
        if (err) {
            return callback(err);
        }
        var i = 0;
        var datai = 0;
        var data = [];
        while (list[i]) {
            if (path.extname(list[i]) == '.' + ext) {
                data[datai++] = list[i];
            }
            i++;
        }
        if(callback) {
            callback(null, data);
        }
    });
};
