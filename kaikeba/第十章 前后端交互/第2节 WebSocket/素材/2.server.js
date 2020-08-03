// 多个终端通信

// 引入websocket
const WebSocketServer = require('websocket').server

// 引入http模块
const http = require('http')

let server = http.createServer()
server.listen(3000, function () {
    console.log('服务器连接成功')
})
// 存储所有终端对象
let clients = []
// 创建websocket服务器
let weServer = new WebSocketServer({
    httpServer: server
});

// 建立连接 监听请求
weServer.on('request', function (webSocketRequest) {
    // 当前连接 回话
    let connection = webSocketRequest.accept(null, 'accepted-origin')
    // 把当前连接添加到终端
    clients.push(connection)
    // 监听客户端 发送信息
    connection.on('message', function (msg) {
        if (msg.type == 'utf8') {
            // 给每一个连接发送数据
            clients.forEach((item) => {
                item.sendUTF(msg.utf8Data)
            })
        }
    })
    // 当连接关闭的时候触发事件
    connection.on('close', function () {
        // 获取当前索引
        let index = clients.indexOf(connection)
        clients.splice(index, 1)
    })
})