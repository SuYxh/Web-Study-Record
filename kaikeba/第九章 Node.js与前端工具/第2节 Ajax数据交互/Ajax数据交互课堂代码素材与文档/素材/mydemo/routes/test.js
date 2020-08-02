//测试Ajax
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("ajax01.html");
});

router.get('/ajax02', function(req, res, next) {
  res.render("ajax02.html");
});

router.get('/ajax03', function(req, res, next) {
  res.render("ajax03.html");
});

router.get('/ajax04', function(req, res, next) {
  res.render("ajax04.html");
});

router.get('/ajax05', function(req, res, next) {
  res.render("ajax05.html");
});

router.get('/ajax06', function(req, res, next) {
  res.render("stu_ajax.html");
});

router.get('/a1', function(req, res, next) {
  res.send('Hello Ajax!');
});

//处理get请求带参数的
router.get('/a2', function(req, res, next) {
  let m1 = Number.parseInt(req.query.m1);
  let m2 = Number.parseInt(req.query.m2);
  res.send(`get:${m1}+${m2}=${m1+m2}`);
});

//处理post求带参数的
router.post('/a2', function(req, res, next) {
  let m1 = Number.parseInt(req.body.m1);
  let m2 = Number.parseInt(req.body.m2);
  res.send(`post:${m1}+${m2}=${m1+m2}`);
});

module.exports = router;
