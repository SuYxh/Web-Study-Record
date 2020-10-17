const fs=require('fs');
const path = require('path');
const url = require('url');

exports.getMime = function (extname) {

    function getMime(extname) {
        switch (extname) {
            case '.html':
                return 'text/html'
            case '.css':
                return 'text/css'
            case '.js':
                return 'text/javascript'
            case '.png':
                return 'image/png'
            case '.gif':
                return 'image/gif'
            case '.jpg':
                return 'image/jpg'
            case '.jpeg':
                return 'image/jpeg'
            case '.json':
                return 'application/json'
            default:
                return 'text/html'
        }
    }

}


/**
 * 在这里也可以使用同步读取文件的方法
 */
let getFileMime = function (extname) {

   return new Promise((resolve,reject)=>{
        fs.readFile('./module/mime.json',(err,data)=>{
            if(err){
                console.log(err);
                reject(err);
            }
            let mimeObj=JSON.parse(data.toString());
            resolve(mimeObj[extname]);
        })
   })

}



exports.static = async function(request,response,staticPath){
    // 1.获取请求的路径
    let pathname = url.parse(request.url).pathname
    pathname = pathname === '/' ? '/index.html' : pathname

    let extname = path.extname(pathname)
    
    let mime =await getFileMime(extname)
    // 设置公共信息头
    response.writeHead(200, { 'Content-Type': `${mime};charset="utf-8` });
    console.log('扩展名：',extname,mime)
    // 2.根据请求路径响应文件
    // 注意过滤 /favicon.ico 
    if (pathname !== '/favicon.ico') {

        fs.readFile('./'+ staticPath + pathname, (err, data) => {
            // if (err) {
            //     console.log(err)
            //     response.end('./static/404.html')
            //     return
            // }
            // 如果没有错误，就相当于找到了 对应的文件，返回即可
            // 如果没有找到文件则不做操作，向下进行匹配 在app.js 还会有其他的路由存在
            if (!err) {
                response.end(data);
            }
        })
    }
}



