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
  console.log(req.url)
    const filePath = path.join(process.cwd(), req.url)
    // console.log(filePath)
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
     
    fs.stat(filePath, (err, stats) => {
        // 设置公共头部信息
        res.setHeader('Content-Type',`${contentType};charset=utf-8`)
        // res.setHeader('Content-Type',contentType)

        if (err) {
          // 状态码
          res.statusCode = 404    
          // 找不到提示文本
          res.end(`${filePath} is 404`)
          return
        }
        if (stats.isFile()) {
          // 如果是文件 返回文件内容
          res.statusCode = 200
          fs.createReadStream(filePath).pipe(res)
        } else if (stats.isDirectory()) {
          //  如果是文件夹，返回文件列表
          fs.readdir(filePath, (err, files) => {
            if (err) return
            console.log(files)
            console.log(filePath)
            console.log(files.includes('index.html'))
            if ( files.includes('index.html')) {
              console.log(123)
            console.log(filePath)
              const resData = fs.readFileSync(`${filePath}/index.html`,'utf8')
              res.end(resData)
            } else {
              res.statusCode = 200
            res.end(files.join(','))
            }
            
          })
        }
      })
})

server.listen(port,() => console.log(`服务已启动！请访问：http://localhost:${port}`))