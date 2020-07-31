//net模块实例--服务器端server
const net = require("net");

const clientSet = new Set();//声明一个存储客户端的容器集合

const server = net.createServer((client)=>{
    console.log(client.remoteAddress+"客户端成功连接");
    clientSet.add(client); //将当前连接的客户端添加到集合中

    client.on("end",()=>{
        clientSet.delete(client); //移出当前客户端
        console.log("客户端已经断开连接");
    });

    //对当前客户端添加消息事件处理，并遍历集合分发信息
    client.on("data",(data)=>{
        //遍历所有客户端集合并分发消息
        for(let cs of clientSet){
            cs.write(client.remoteAddress+":"+data.toString());
        }
    });
});

server.on("error",(err)=>{
    console.log(err);
});

server.listen(8124,()=>{
    console.log("服务器启动成功！");
});