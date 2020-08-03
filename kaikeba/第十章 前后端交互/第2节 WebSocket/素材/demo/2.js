// 多个终端 通过websocket进行通信

// 引入websocket server 模块
const WebSocketServer = require('websocket').server

// 引入http模块 搭建http服务器
const http = require('http')
let server = http.createServer()
server.listen(3000, function () {
    console.log('服务器搭建成功')
})
// 储存所有终端的对象
let clients = []
// 创建websocket服务对象
let weServer = new WebSocketServer({
    httpServer: server
})
// 监听连接请求 建立连接
// webSocketRequest 当前的请求
weServer.on('request', function (webSocketRequest) {
    // 当前连接 回话
    let connection = webSocketRequest.accept(null, 'accepted-origin')
    // 把连接添加到终端
    clients.push(connection)
    // 定时向客户端发送信息
    // setInterval(function () {
    //     connection.sendUTF('铁蛋儿很帅' + new Date())
    // }, 1000)
    // 监听客户端发信息
    connection.on('message', function (msg) {
        // 当前传输的是utf8数据类型
        if (msg.type == 'utf8') {
            // 发送数据
            // connection.sendUTF(msg.utf8Data)
            // 给每一个连接发送数据
            clients.forEach((item) => {
                item.sendUTF(msg.utf8Data)
            })
        }
    })


    // 当连接断开连接 触发事件
    connection.on('close', function (res, des) {
        // console.log('断开一个连接')
        // 获取当前索引
        let index = clients.indexOf(connection)
        // 删除
        clients.splice(index, 1)
    })
})