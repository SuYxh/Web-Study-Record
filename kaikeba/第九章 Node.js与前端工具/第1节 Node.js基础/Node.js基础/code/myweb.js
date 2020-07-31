const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')

// 创建http服务器
let server = http.createServer()
// 获取命令行参数
let port = process.argv[2]


// 监听请求
server.on('request',(req,res) => {
    let pathname = url.parse(req.url).pathname 
     if (pathname.includes('/images/') || pathname.includes('/gitbook/') || pathname.includes('/static/')) {        // 判断请求url是否是 /static/ 开头（确定是否是静态资源访问）
        // 根据文件类型决定 解析方式 (响应头) 
        let contentType = ''
        let ext = path.extname(req.url)
        switch (ext) {
            case '.png':
                contentType = 'image/png'
                break;
            case '.gif':
                contentType = 'image/gif'
                break;
            case '.jpg':
                contentType = 'image/jpg'
                break;
            case '.jpeg':
                contentType = 'image/jpeg'
                break;
            case '.css':
                contentType = 'text/css'
                break;
            case '.js':
                contentType = 'application/javascript'
                break;
            case '.json':
                contentType = 'application/json'
                break;
        }
        res.setHeader('Content-Type',contentType)
        // 响应内容
        fs.readFile('.'+pathname,(err,data) => {
            if (err) {
                throw err
            }
            res.end(data)
        })
        return
    }

    // 静态资源响应函数
    function resData(file) {
        fs.readFile(file,(err,data) => {
            if (err) {
                throw err
            }
            res.end(data)
        })
    }  

    // 静态资源响应
    switch (req.url) {
        case '/': resData('./index.html');  break;
        case '/1.html': resData('./1.html');  break;
        case '/2.html': resData('./2.html');  break;
        case '/3.html': resData('./3.html');  break;
        case '/4.html': resData('./4.html');  break;
        case '/5.html': resData('./5.html');  break;
        case '/6.html': resData('./6.html');  break;
        case '/7.html': resData('./7.html');  break;
        case '/8.html': resData('./8.html');  break;
        case '/9.html': resData('./9.html');  break;
        case '/10.html': resData('./10.html');  break;
        case '/11.html': resData('./11.html');  break;
        case '/12.html': resData('./12.html');  break;
        default:  resData('./404.html');  break;
    }
})

server.listen(port,() => console.log(`服务已启动！请访问：http://localhost:${port}`))