const http = require('http')

const server = http.createServer( (req,res) => {
    // 实现cors
    res.writeHead(200,{
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': 'Content-type',
    })

    // 2.请求转发
    const proxy = http.request({
        host: '127.0.0.1',
        port: '4000',
        url: '/',
        method: req.method,
        headers: req.headers
    }, serverRes => {
        // 3.接受服务器返回的内容
        let body = ''
        serverRes.on('data', chunk => {
            body += chunk
        })
        serverRes.on('end', () => {
            console.log('服务器返回的:' + body)
            // 4.返回给前端
            res.end(body)
        })
    }).end()
} )


server.listen(3000, () => {
    console.log('3000 成功')
})