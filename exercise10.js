#!/usr/local/bin/node

var net = require('net')
var server = net.createServer(function (socket) {
    var date = new Date();
    socket.end(date.getFullYear() + '-' + padding(date.getMonth()+1, 2) + '-' + padding(date.getDate(), 2) + ' ' + padding(date.getHours(), 2) + ':' + padding(date.getMinutes(), 2) + '\n');
})

function padding(number, digits) {
    return Array(Math.max(digits - String(number).length + 1, 0)).join('0')+number;
}

server.listen(process.argv[2]);
