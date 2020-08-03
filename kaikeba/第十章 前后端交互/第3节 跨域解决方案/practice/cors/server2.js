let express = require('express')
let app = express()

//   Access-Control-Allow-Origin   http://localhost:3000  
//  设置白名单存储跨域的域名
let arrList = ['http://localhost:3000']

//  设置 headers 头 ， 使用中间件
app.use((req,res,next) => {
    let origin = req.headers.origin
    console.log(req.method)
    if (arrList.includes(origin)) {
        // 设置哪个域名可以访问
        res.setHeader('Access-Control-Allow-Origin',origin)
        //  允许携带哪个请求头来访问
        res.setHeader('Access-Control-Allow-Headers','name')
        //  允许携带哪个方法来访问
        res.setHeader('Access-Control-Allow-Methods','PUT')
        // cookie
        res.setHeader('Access-Control-Allow-Credentials',true)
        // 允许返回的头被访问
        res.setHeader('Access-Control-Expose-Headers','name')
    }
    next()
})

app.use(express.static(__dirname))

app.get('/yxh',(req,res) => {
    console.log(req.headers)
    res.header('name','hahahh')

    res.end('你好，杨鑫昊！')
})

app.put('/yxh',(req,res) => {
    console.log(req.headers)
    res.end('你好，jarvis！这是PUT访问')
})

app.listen(4000)