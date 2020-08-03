const express = require('express')
const app = express()

const server = require('http').createServer(app);
const io = require('socket.io')(server);

// 登录的人数
let count = 0
// socket 服务器监听连接 表示已经建立连接
io.on('connection', socket => { 
    //  用户登录的时候监听登录消息
    socket.on('login',data => {
        console.log(data+'登陆啦！')
        // 把用户名存在 socket 对象上面
        socket.username = data
        count ++ 
        // 更新房间人数
        io.emit('count',count)
    })

    // 监听客户端发来的消息
    socket.on('send', (data) => { 
        // 客户端发来的消息
        console.log(data)
        // 当客户端发来消息的时候 我在发给其他的客户端
        io.emit('msg', {user: socket.username,msg:data}); 
     }); 

    //  当有人退出的时候
    socket.on('disconnect', function(){
        count--
        io.emit('count',count)
    });
 });



// 静态文件中间
app.use(express.static(__dirname+'/static'))
console.log(__dirname+'/css/')

app.get('/',(req,res) => {
    res.send('jarvis,你好！')
})

app.get('*',(req,res) => {
    // 发送文件，参数为文件路径  __dirname表示当前目录
    res.sendFile(__dirname+'/views/index.html')
})

server.listen(3000);

