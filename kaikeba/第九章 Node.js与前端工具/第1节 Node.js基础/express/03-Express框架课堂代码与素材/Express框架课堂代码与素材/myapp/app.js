//加载express
const express = require("express");
const path = require("path");

//1.调用express获取一个app
const app = express();

//设置静态资源目录,开放 public 目录资源，限制访问前缀/static
app.use("/static",express.static("public"));

// view engine setup
app.engine('html', require('express-art-template'));
//app.set('view', { //报错：View is not a constructor
//    debug: process.env.NODE_ENV !== 'production'
//});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//2.设置请求处理函数
app.get("/",(req,res)=>{
    //res.send("Hello World!");
    //加载并渲染模板，第二参数是放置模板中要渲染的数据
    res.render("index.html",{
        title:'在Express框架中使用了art-template模板引擎',
        link:'<a href="https://aui.github.io/art-template/docs/syntax.html">art-template模板引擎语法</a>',
        num:[10,20,30,40],
        dlist:[
            {name:'张无忌',age:20,sex:1},
            {name:'赵敏',age:19,sex:0},
            {name:'张三丰',age:60,sex:1},
        ]
    });
});

app.get("/myform",(req,res)=>{
    console.log("url:",req.originalUrl);
    console.log("参数uname的值:",req.query.uname);
    res.send("get /myform");
});
app.post("/myform",(req,res)=>{
    console.log("url:",req.originalUrl);
    console.log("参数:",req.body);
    res.send("post /myform");
});
//3.绑定端口，启动服务
app.listen(3000,()=>{
    console.log("app listening on posrt 3000");
});