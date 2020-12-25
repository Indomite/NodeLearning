const http = require('http');
const fs = require('fs');
const common = require('./module/common.js');
const path = require('path');
const url = require('url');
http.createServer(function (request, response) {

    //1.获取网站地址
    // console.log(request.url);

    let pathname = url.parse(req.url).pathname;
    pathname = pathname == '/' ? '/index.html' : pathname;
    let extname = path.extname(pathname);

    if (pathname != '/favicon.ico') {
        fs.readFile('./static' + pathname, (err, data) => {
            if (err) {
                response.writeHead(404, { 'Content-type': 'text/html;charset="utf-8' });
                response.end('页面不存在');
            }
            let mime = common.getMime(extname);
            response.writeHead(200, { 'Content-type': '' + mime + ';charset="utf-8' });
            response.end(data);
        });
    }

}).listen(8081);

console.log("Server running");