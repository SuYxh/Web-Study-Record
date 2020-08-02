var express = require('express');
var router = express.Router();

/* GET users listing. */
// 渲染页面 01-ajax.html
router.get('/', function(req, res, next) {
  res.render('user_index.html')
});

module.exports = router;
