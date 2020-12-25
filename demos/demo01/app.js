var http = require('http');     //引入http模块
http.createServer(function (request, response) {        //创建web服务
    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });      //设置响应头
    console.log(request);
    response.end('你好123');        //在页面上相应一句话并且结束响应

}).listen(8081);        //监听的端口号

console.log('Server running at http://127.0.0.1:8081/');