const WebSocketServer = require('websocket').server;
var http = require('http');

// 创建服务器
var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
server.listen(3000, function() {
    console.log((new Date()) + ' Server is listening on port 3000');
});


// 存储所有终端的连接
let clients = []

// WebSocket  服务器
wsServer = new WebSocketServer({
    httpServer: server,
    // You should not use autoAcceptConnections for production
    // applications, as it defeats all standard cross-origin protection
    // facilities built into the protocol and the browser.  You should
    // *always* verify the connection's origin and decide whether or not
    // to accept it.
    // autoAcceptConnections: false
});

// 监听请求 建立连接
// request 表示当前的请求
wsServer.on('request',function(request){

    // 当前的连接 第一个参数表示子协议，如果没有就写 null 
    var connection = request.accept(null, request.origin);
    console.log((new Date()) + '连接已经建立！');

    // 把连接添加至终端
    clients.push(connection)



    // 服务器向客户端发送请求
    // let timer=null
    // timer = setInterval(() => {
    //     connection.sendUTF('服务器发来的数据！')
    // },2000)
    

    // 监听客户端发送消息
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log('Received Message: ' + message.utf8Data);
            // 给给个连接都发送
            clients.forEach(function (item) {
                // 发送数据
                item.sendUTF(message.utf8Data);
            })
        }
        else if (message.type === 'binary') {
            console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
            connection.sendBytes(message.binaryData);

        }
    });


    // 监听当前连接，关闭的时候触发
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
          // 获取当前客户端的序号
          let index = clients.indexOf(connection)
          // 根据索引删除连接
          clients.splice(index,1)
    });
})