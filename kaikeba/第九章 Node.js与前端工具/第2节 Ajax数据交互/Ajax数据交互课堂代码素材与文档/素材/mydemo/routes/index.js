var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: '欢迎使用 Express 框架' });
});

module.exports = router;
