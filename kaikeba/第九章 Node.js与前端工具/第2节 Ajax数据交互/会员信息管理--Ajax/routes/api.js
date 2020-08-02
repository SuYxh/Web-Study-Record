var express = require('express');
var Members = require('../model/members')
var router = express.Router();

/* 浏览会员信息 */
router.get('/user', function(req, res, next) {
    // 会员信息查询
    Members.findAll((err,data) => {
        if (err) {
            return res.status(500).json({code:500,error:'获取会员信息失败！'})
        }
        res.json({code:0,memlist:data})
    }) 
});


/* 查询单个会员信息 */
router.get('/user/find', function(req, res, next) {
    Members.findById(req.query.id,(err,data) => {
        if (err) {
            return res.status(500).json({code:500,error:'没有找到要修改的会员信息哦'})
        }
        //数据反写
        res.json({code:0,mem:data})
    })
  });


/* 执行会员信息添加 */
router.post('/user/add', function(req, res, next) {
    // 获取添加的数据
    Members.save(req.body,(err,data) => {
        if (err) {
            return res.status(500).json({code:500,error:'会员信息添加失败！'})
        }
        //响应json数据
        res.json({code:0,mem:data})
    })
  });




/* 执行会员信息修改 */
router.post('/user/edit', function(req, res, next) {
    Members.updateById(req.body,(err) => {
        if (err) {
            return res.status(500).json({code:500,error:'会员信息修改失败！'})
        }
        //修改完成后 跳转至首页 重定向 操作
        res.json({code:0})
    })
  });

/* 执行会员信息删除 */
router.get('/user/del', function(req, res, next) {
    Members.deleteById(req.query.id,(err) => {
        if (err) {
            return res.status(500).json({code:500,error:'删除会员信息失败！'})
        }
        // 删除完成后 跳转至首页 重定向 操作
        res.json({code:0})
    })
  });



  router.get('/user/condition', function(req, res, next) {
    console.log('member.js传递的参数1：',req.query)
    // console.log('member.js传递的参数2：',req.body.condition)
    Members.findByCondition(req.query,(err,data) => {
        if (err) {
            return res.status(500).json({code:500,error:'没有找到要修改的会员信息哦'})
        }
        // 后端判断查询条件是否为空
        // if (req.body.condition == '') {
        //     res.send('请填写查询信息！');
        //     return;
        // }
        // 未查询到结果的处理
       
        //数据反写
        console.log('member.js 收到的处理数据',data)
        if (data == undefined ) {
            res.json({code:1,data:'没有找到要修改的会员信息哦'});
        } else {
            res.json({code:0,data:data})
        }
        
        
    })
  });
module.exports = router;