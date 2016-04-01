#!/usr/local/bin/node

var http = require('http')
var url = require('url')

var server = http.createServer(function(req, res) {
    if (req.method != 'GET')
        return res.end('I need GET')

    pathname = url.parse(req.url, true).pathname
    content = ''
    isoDate = new Date(url.parse(req.url, true).query.iso)
    if(pathname == '/api/parsetime') {
        content = '{ "hour": ' + isoDate.getHours() + ', "minute": ' + isoDate.getMinutes() + ', "second": ' + isoDate.getSeconds() + ' }'
    } else if (pathname == '/api/unixtime') {
        content = '{ "unixtime": ' + new Date(isoDate).getTime() + ' }'
    }
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(content)
    res.end()
}).listen(process.argv[2]);
