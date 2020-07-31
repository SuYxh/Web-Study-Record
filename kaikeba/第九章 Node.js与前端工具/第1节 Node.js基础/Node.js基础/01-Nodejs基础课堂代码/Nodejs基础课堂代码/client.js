//net模块实例--客户端client
const net = require("net");

//从命名行参数中获取信息
const hostname = process.argv[2];
const port = process.argv[3];

const client = net.connect({host:hostname,port:port},()=>{
    console.log("成功连接服务器");

    process.stdin.setEncoding('utf8');
    process.stdin.on('readable', () => {
    let chunk;
    // 使用循环确保我们读取所有的可用数据。
    while ((chunk = process.stdin.read()) !== null) {
        if(chunk == "q\r\n"){
            process.exit();
        }
        client.write(chunk);
    }
    });
});

client.on("data",(data)=>{
    console.log(data.toString());
});