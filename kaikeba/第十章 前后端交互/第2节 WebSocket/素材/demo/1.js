var WebSocketServer = require("websocket").server;
var http = require("http");
// 创建服务器
var server = http.createServer(function (request, response) {
  console.log(new Date() + " Received request for " + request.url);
  response.writeHead(404);
  response.end();
});
server.listen(3000, function () {
  console.log(new Date() + " Server is listening on port 3000");
});
// websocket 服务器
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
// websocket建立连接
wsServer.on("request", function (request) {
  if (!originIsAllowed(request.origin)) {
    // Make sure we only accept requests from an allowed origin
    request.reject();
    console.log(
      new Date() + " Connection from origin " + request.origin + " rejected."
    );
    return;
  }
  // 别忘啦 换协议 null
  var connection = request.accept(null, request.origin);

  setInterval(() => {
    connection.sendUTF("服务端发送的信息" + new Date());
  }, 1000);

  console.log(new Date() + " 已经建立连接");
  // 监听当前连接 发送message时候
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
    console.log(new Date() + " Peer " + connection.remoteAddress + " 断开连接");
  });
});
