let express = require('express')
let app = express()
// 设置一个白名单 存我们想让谁跨域的域名
let arrList = ['http://localhost:3000']
// 设置header头
app.use(function (req, res, next) {
    let origin = req.headers.origin
    if (arrList.includes(origin)) {
        // 设置哪个域名可以访问
        res.setHeader('Access-Control-Allow-Origin', origin)
        // 允许携带哪个请求头来访问我
        res.setHeader('Access-Control-Allow-Headers', 'name')
        // 允许哪些方法访问
        res.setHeader('Access-Control-Allow-Methods', 'PUT')
        // 预检的存活的时间
        res.setHeader('Access-Control-Max-age', 6)
        // 是否允许cookie跨域
        res.setHeader('Access-Control-Allow-Credentials', true)
        // 允许返回头
        res.setHeader('Access-Control-Expose-Headers', 'name')
        if (req.method === 'OPTIONS') {
            res.end()
        }
    }
    next()
})
app.get('/getTieDan', function (req, res) {
    // console.log(req.headers)
    res.header('name', 'hehe')
    res.end('铁蛋儿很帅')
})
app.put('/getTieDan', function (req, res) {
    // console.log(req.headers)
    res.end('小白龙很帅')
})


app.use(express.static(__dirname))
app.listen(4000)