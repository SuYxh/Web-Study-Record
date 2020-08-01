var express = require('express');
var Student = require('../model/student')
var router = express.Router();

/* 浏览学生信息 */
router.get('/', function(req, res, next) {
//   res.send('浏览学生信息');
    // 学生信息查询
    Student.findAll((err,data) => {
        if (err) {
            return res.status(500).send({error:'获取学生信息失败！'})
        }
        res.render('stu/index.html',{stulist:data})
    }) 
});

/* 加载学生信息添加*/
router.get('/add', function(req, res, next) {
    // res.send('加载学生信息添加');
    res.render('stu/add.html')
  });

/* 执行学生信息添加 */
router.post('/add', function(req, res, next) {
    // res.send('执行学生信息添加');
    // 获取添加的数据
    Student.save(req.body,(err) => {
        if (err) {
            return res.status(500).send({error:'学生信息添加失败！'})
        }
        // 删除完成后 跳转至首页 重定向 操作
        res.redirect('/stu')
    })
  });


/* 加载学生信息修改 */
router.get('/edit', function(req, res, next) {
    // res.send('加载学生信息修改');
    // res.render('stu/edit.html')
    Student.findById(req.query.id,(err,data) => {
        if (err) {
            return res.status(500).send({error:'没有找到要修改的学生信息哦'})
        }
        //数据反写
        res.render('stu/edit.html',{stu:data})
    })
  });

/* 执行学生信息修改 */
router.post('/edit', function(req, res, next) {
    Student.updateById(req.body,(err) => {
        if (err) {
            return res.status(500).send({error:'学生信息修改失败！'})
        }
        //修改完成后 跳转至首页 重定向 操作
        res.redirect('/stu')
    })
  });

/* 执行学生信息删除 */
router.get('/delete', function(req, res, next) {
    Student.deleteById(req.query.id,(err) => {
        if (err) {
            return res.status(500).send({error:'删除学生信息失败！'})
        }
        // 删除完成后 跳转至首页 重定向 操作
        res.redirect('/stu')
    })
    // res.send('执行学生信息删除');
  });

module.exports = router;