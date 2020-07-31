const http = require('http')
const fs = require('fs')
const path = require('path')

let server = http.createServer()

server.on('request',(req,res) => {
    console.log('服务器被请求啦')
    // console.log(req)
    // console.log('请求地址：',req.url)
    // console.log('请求方式：',req.method)
    // res.setHeader('Content-Type','text/html;charset=utf-8')
    // write 写在相应的缓存中
    // res.write('<h2>web首页</h2>')
    // res.write('<h4>欢迎来到本网站！</h4>')
    // 发送
    // res.end()

     // 静态资源文件的处理
     if (req.url.includes('/images/') || req.url.includes('/gitbook/')) {        // 判断请求url是否是 /static/ 开头（确定是否是静态资源访问）
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
        }
        res.setHeader('Content-Type',contentType)
        // 响应内容
        fs.readFile('.'+req.url,(err,data) => {
            if (err) {
                throw err
            }
            res.end(data)
        })
        return
    }

    if (req.url === '/') {
        // res.write('<h2>web首页</h2>')
        // res.write('<h4>欢迎来到本网站！</h4>')
        // res.write('<a href="/login">登录</a>')
        // res.end()
        // 响应静态资源
        fs.readFile('./index.html',(err,data) => {
            if (err) {
                throw err
            }
            res.end(data)
        })
    } else if( req.url === '/1.html' ){
        // res.write('<h4>这是登录页面</h4>')
        // res.write('<a href="/">首页</a>')
        // res.end()
        fs.readFile('./1.html',(err,data) => {
            if (err) {
                throw err
            }
            res.end(data)
        })
    } else {
        res.write('<h4>404</h4>')
        res.write('<a href="/">首页</a>')
        res.end() 
    }
})

server.listen(3000,() => console.log('服务已启动！'))