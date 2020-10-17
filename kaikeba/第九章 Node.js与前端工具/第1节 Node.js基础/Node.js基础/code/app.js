/***
 *  静态服务器的封装
 */


var http = require('http');
const url = require('url');
const router = require('./module/router');

http.createServer( async(request, response) => {

    // console.log(request.url)
    // 创建 静态服务
    await router.static(request,response,'gitbook')

    // 路由
    // let pathname = url.parse(request.url).pathname
    // console.log(pathname)
    // if (pathname === '/admin') {
    //     response.writeHead(200, { 'Content-Type': `text/html;charset="utf-8` });
    //     response.end('你好 admin！')
    // }
    // if (pathname === '/root') {
    //     response.writeHead(200, { 'Content-Type': `text/html;charset="utf-8` });
    //     response.end('你好 root！')
    // }

}).listen(3001);

console.log('Server running at http://127.0.0.1:3001/');