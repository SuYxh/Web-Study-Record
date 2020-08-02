var express = require('express');
var Members = require('../model/members')
var router = express.Router();

/* 浏览会员信息 */
router.get('/', function(req, res, next) {
    // 会员信息查询
    Members.findAll((err,data) => {
        if (err) {
            return res.status(500).send({error:'获取会员信息失败！'})
        }
        res.render('member/index.html',{memlist:data})
    }) 
});

/* 加载会员信息添加*/
router.get('/add', function(req, res, next) {
    res.render('member/add.html')
  });

/* 执行会员信息添加 */
router.post('/add', function(req, res, next) {
    // 获取添加的数据
    Members.save(req.body,(err) => {
        if (err) {
            return res.status(500).send({error:'会员信息添加失败！'})
        }
        // 删除完成后 跳转至首页 重定向 操作
        res.redirect('/member')
    })
  });


/* 加载会员信息修改 */
router.get('/edit', function(req, res, next) {
    Members.findById(req.query.id,(err,data) => {
        if (err) {
            return res.status(500).send({error:'没有找到要修改的会员信息哦'})
        }
        //数据反写
        res.render('member/edit.html',{mem:data})
    })
  });

/* 执行会员信息修改 */
router.post('/edit', function(req, res, next) {
    Members.updateById(req.body,(err) => {
        if (err) {
            return res.status(500).send({error:'会员信息修改失败！'})
        }
        //修改完成后 跳转至首页 重定向 操作
        res.redirect('/member')
    })
  });

/* 执行会员信息删除 */
router.get('/delete', function(req, res, next) {
    Members.deleteById(req.query.id,(err) => {
        if (err) {
            return res.status(500).send({error:'删除会员信息失败！'})
        }
        // 删除完成后 跳转至首页 重定向 操作
        res.redirect('/member')
    })
  });



  router.post('/chaxun', function(req, res, next) {
    // console.log('member.js传递的参数1：',req.body)
    // console.log('member.js传递的参数2：',req.body.condition)
    Members.findByCondition(req.body,(err,data) => {
        if (err) {
            return res.status(500).send({error:'没有找到要修改的会员信息哦'})
        }
        // 后端判断查询条件是否为空
        if (req.body.condition == '') {
            res.send('请填写查询信息！');
            return;
        }
        // 未查询到结果的处理
        if (data == undefined ) {
            res.send('没有找到要修改的会员信息哦');
        }
        //数据反写
        // console.log('member.js 收到的处理数据',data)
        res.render('member/chaxun.html',{chaxundata:data})
        
    })
  });
module.exports = router;