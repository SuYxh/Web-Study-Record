const http = require('http')
const data = {
    title: '铁蛋儿',
    name: '帅哥'
}
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(JSON.stringify(data))
    }
})
server.listen(4000, () => {
    console.log('服务器运行成功')
})