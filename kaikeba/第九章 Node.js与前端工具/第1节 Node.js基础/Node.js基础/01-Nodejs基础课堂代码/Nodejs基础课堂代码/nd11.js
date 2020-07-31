//Events事件触发器
const EventEmitter = require("events"); //导入
class MyEmitter extends EventEmitter{} //继承
const myemitter = new MyEmitter();   //实例化

//注册监听器（绑定事件处理程序）
myemitter.on("event",function(a,b){
    console.log("event事件被触发了！");
    console.log(a,b,a+b);
    //console.log(this);
});

myemitter.once("one",()=>{
    console.log("one事件被触发一次")
});

//触发事件
myemitter.emit("event",10,20);
myemitter.emit("event",100,200);

myemitter.emit("one");
myemitter.emit("one"); //此处触发事件无效
