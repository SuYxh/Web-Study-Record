# Websocket

## client 客户端

### 方法

- 创建socket对象

```js
const ws=new WebSocket('ws://localhost:8080');
```

- 发送消息

```js
ws.send('向服务端发送的数据');
```

### 事件

- onopen: 当客户端和服务端建立链接之后被触发

```js
ws.onopen=function(){
	console.log('链接建立成功');
}
```

- onmessage: 当服务端有消息发送过来时, 自动触发

```js
ws.onmessage=function(event){
    // event.data中存放的是消息内容
    console.log(event.data);
}

```

- onclose: 当socket服务关闭时, 自动触发

```js
wx.onclose=function(){
    console.log('socket通道已关闭');
}
```

- onerror:用于指定报错时的回调函数

```js
wx.onerror = function(event) {
  console.log('有错误:'+ event);
};
```

### 状态

- ws.readyState属性返回实例对象的当前状态,共有四种

  ```js
  CONNECTING：值为0，表示正在连接。
  OPEN：值为1，表示连接成功，可以通信了。
  CLOSING：值为2，表示连接正在关闭。
  CLOSED：值为3，表示连接已经关闭，或者打开连接失败。
  ```

参考地址:http://www.ruanyifeng.com/blog/2017/05/websocket.html

## Server 服务端

WebSocket 服务器 Node 实现有以下三种。

1. [WebSocket-Node](https://github.com/theturtle32/WebSocket-Node)

2. [WebSockets](https://github.com/uWebSockets/uWebSockets)

3. [Socket.IO](http://socket.io/)





























