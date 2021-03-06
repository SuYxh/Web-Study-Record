// 引包
var WebSocketServer = require("websocket").server;
var http = require("http");
// 创建服务器
var server = http.createServer(function (request, response) {
  console.log(new Date() + " Received request for " + request.url);
  response.writeHead(404);
  response.end();
});
// 监听端口
server.listen(3000, function () {
  console.log(new Date() + " Server is listening on port 3000");
});
// websocket服务器
wsServer = new WebSocketServer({
  httpServer: server,
  // You should not use autoAcceptConnections for production
  // applications, as it defeats all standard cross-origin protection
  // facilities built into the protocol and the browser.  You should
  // *always* verify the connection's origin and decide whether or not
  // to accept it.
  autoAcceptConnections: false,
});

function originIsAllowed(origin) {
  // put logic here to detect whether the specified origin is allowed.
  return true;
}
// 建立连接
wsServer.on("request", function (request) {
  if (!originIsAllowed(request.origin)) {
    // Make sure we only accept requests from an allowed origin
    request.reject();
    console.log(
      new Date() + " Connection from origin " + request.origin + " rejected."
    );
    return;
  }
  // 协议请求
  var connection = request.accept(null, request.origin);
  console.log(new Date() + " 建立连接.");
  setInterval(() => {
    connection.sendUTF("服务器发送的信息" + new Date());
  }, 1000);
  // 监听当前连接发送给前端数据
  connection.on("message", function (message) {
    if (message.type === "utf8") {
      console.log("Received Message: " + message.utf8Data);
      connection.sendUTF(message.utf8Data);
    } else if (message.type === "binary") {
      console.log(
        "Received Binary Message of " + message.binaryData.length + " bytes"
      );
      connection.sendBytes(message.binaryData);
    }
  });
  // 监听当前连接 当close关闭
  connection.on("close", function (reasonCode, description) {
    console.log(
      new Date() + " Peer " + connection.remoteAddress + " 断开连接."
    );
  });
});
