var express = require('express');
var Student = require('../model/student')
var router = express.Router();

/* 浏览所有学生信息 */
router.get('/stu', function(req, res, next) {
//   res.send('浏览学生信息');
    // 学生信息查询
    Student.findAll((err,data) => {
        if (err) {
            return res.status(500).json({code:500,error:'获取学生信息失败！'})
        }
        res.json({code:0,stulist:data})
        // res.render('stu/index.html',{stulist:data})
    }) 
});

/* 获取单个学生信息 */
router.get('/stu/find', function(req, res, next) {
    // res.send('加载学生信息修改');
    // res.render('stu/edit.html')
    Student.findById(req.query.id,(err,data) => {
        if (err) {
            return res.status(500).json({code:500,error:'没有找到要修改的学生信息哦'})
        }
        //响应json数据
        res.json({code:0,stu:data})
    })
  });



/* 执行学生信息添加 */
router.post('/stu/add', function(req, res, next) {
    // res.send('执行学生信息添加');
    // 获取添加的数据
    Student.save(req.body,(err,data) => {
        if (err) {
            return res.status(500).json({code:500,error:'学生信息添加失败！'})
        }
        //响应json数据
        res.json({code:0,stu:data})
    })
  });


/* 执行学生信息修改 */
router.post('/stu/edit', function(req, res, next) {
    Student.updateById(req.body,(err) => {
        if (err) {
            return res.status(500).json({code:500,error:'学生信息修改失败！'})
        }
        //响应json数据
        res.json({code:0})
    })
  });

/* 执行学生信息删除 */
router.get('/stu/delete', function(req, res, next) {
    Student.deleteById(req.query.id,(err) => {
        if (err) {
            return res.status(500).json({code:500,error:'删除学生信息失败！'})
        }
        //响应json数据
        res.json({code:0})
    })
    // res.send('执行学生信息删除');
  });

module.exports = router;