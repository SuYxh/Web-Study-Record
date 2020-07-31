//搭建一个简单的HTTP web服务
//1. 导入http模块
const http = require('http');

//2. 创建一个web服务对象
const server = http.createServer();

//3. 注册一个请求事件处理程序
server.on("request",function(req,res){
    res.end("Hello World!");
});

//4. 绑定监听端口，并提供服务
server.listen(8080,function(){
    console.log("服务已经启动，请使用浏览器访问：http://127.0.0.1:8080");
});
