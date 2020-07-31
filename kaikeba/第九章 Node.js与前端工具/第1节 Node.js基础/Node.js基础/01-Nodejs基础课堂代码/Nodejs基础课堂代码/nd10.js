//HTTP模块
//创建 Web 服务器的步骤
//1.导入 http 核心模块
const http = require("http");
const fs = require("fs");
const path = require("path");

//2.创建 server 对象(server 对象负责建立连接，接收数据)
const server = http.createServer();

//3.注册 request 事件，当浏览器发送请求到服务器执行，设置处理请求的函数
server.on('request',(request,response)=>{
    //console.log("服务器端被访问了！");
    console.log("请求地址：",request.url);
    console.log("请求方式：",request.method);
    let url = request.url;

    //静态资源文件的处理
    if(url.includes("/static/")){ //判断请求url是否是/static/开头（确定静态资源访问）
        //获取请求文件后缀名，确定响应ContentType类型值
        let contentTpye = '';
        let ext = path.extname(url);
        switch(ext){
            case '.png': contentTpye = 'image/png'; break;
            case '.gif': contentTpye = 'image/gif'; break;
            case '.jpg': contentTpye = 'image/jpg'; break;
            case '.jpeg': contentTpye = 'image/jpeg'; break;
            case '.css': contentTpye = 'text/css'; break;
            case '.js': contentTpye = 'application/javascript'; break;    
        }
        response.setHeader("Content-Type",contentTpye);
        //响应内容
        fs.readFile("."+url,(err,data)=>{
            if(err) throw err;
            response.end(data);
        });
        return;
    }

    //普通url请求的处理
    if(url === '/'){
        // response.setHeader("Content-Type","text/html;charset=utf-8"); //设置响应头编码
        // response.write("<h1>web首页</h1>");
        // response.write("<h3>欢迎访问本网站</h3>");
        // response.write("<a href='/login'>登录</a>");
        // response.write("<a href='/logout'>退出</a>");
        // response.end();
        //响应静态网页文件内容
        fs.readFile("./mytpl/index.html",(err,data)=>{
            if(err) throw err;
            response.end(data);
        });

    }else if(url === '/login'){
        response.setHeader("Content-Type","text/html;charset=utf-8"); //设置响应头编码
        response.write("<h1>登录页面</h1>");
        response.end();
    }else if(url === '/logout'){
        response.setHeader("Content-Type","text/html;charset=utf-8"); //设置响应头编码
        response.write("<h1>退出页面</h1>");
        response.end();
    }else{
        response.statusCode = 404;
        response.setHeader("Content-Type","text/html;charset=utf-8"); //设置响应头编码
        response.end("抱歉请求的页面不存在！");
    }
});

//4.监听端口
server.listen(8088,()=>{
    console.log("服务已启动，请使用浏览器访问：http://127.0.0.1:8088");
});