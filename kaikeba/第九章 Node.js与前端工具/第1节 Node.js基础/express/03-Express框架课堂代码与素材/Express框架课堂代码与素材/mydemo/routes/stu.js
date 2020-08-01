//学生信息管理路由文件
var express = require('express');
var Student = require("../model/student");
var router = express.Router();

/*浏览学生信息*/
router.get('/', function(req, res, next) {
  //res.send('浏览学生信息');
  Student.findAll((err,data)=>{
     if(err){
       return res.status(500).send({ error: '获取学生信息失败！' });
     }
     res.render("stu/index.html",{stulist:data});
  });

});

/*加载添加学生信息表单*/
router.get('/add', function(req, res, next) {
  res.render('stu/add.html');
});


/*执行学生信息添加*/
router.post('/add', function(req, res, next) {
  Student.save(req.body,(err)=>{
      if(err){
        return res.status(500).send({ error: '学生信息添加失败！' });
      }
      //添加完毕后，跳转回浏览页（重定向）
      res.redirect('/stu');
  });
});


/*加载学生信息修改表单*/
router.get('/edit', function(req, res, next) {
  Student.findById(req.query.id,(err,data)=>{
      if(err){
        return res.status(500).send({ error: '没有找到要修改的学生信息！' });
      }
      //加载修改表单模板，并将获取的信息放置进去
      res.render("stu/edit.html",{stu:data});
  });
});

/*执行学生信息修改*/
router.post('/edit', function(req, res, next) {
  Student.updateById(req.body,(err)=>{
      if(err){
        return res.status(500).send({ error: '学生信息修改失败！' });
      }
      //修改完毕后，跳转回浏览页（重定向）
      res.redirect('/stu');
  });
});

/*执行学生信息删除*/
router.get('/delete', function(req, res, next) {
  console.log(req.query.id);
  Student.deleteById(req.query.id,(err)=>{
      if(err){
        return res.status(500).send({ error: '删除学生信息失败！' });
      }
      //删除完毕后，跳转回浏览页（重定向）
      res.redirect('/stu');
  });
});


module.exports = router;
