var express = require('express');
var router = express.Router();

// 渲染页面 01-ajax.html
router.get('/', function(req, res, next) {
    res.render('01-ajax.html')
});

// 渲染页面 02-ajax.html
router.get('/ajax02', function(req, res, next) {
    res.render('02-ajax.html')
});

// ajax简单测试
router.get('/a1', function(req, res, next) {
    res.send('hello ajax');
});

// 处理get请求
router.get('/get', function(req, res, next) {
    let name = req.query.name
    let age = req.query.age
    res.send(`您的名字是：${name}，年龄：${age}`);
});

// 处理post请求
router.post('/post', function(req, res, next) {
    let params = req.body
    console.log('post请求的参数是：',params)
    res.send(`这是post请求,姓名：${params.name},年龄：${params.age}`);
});

module.exports = router;
