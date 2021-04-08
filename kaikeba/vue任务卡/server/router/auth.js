const AdminUser = require('../models/AdminUser');
const jwt = require('jsonwebtoken');


module.exports = app => {
    const express = require('express');
    // express 的子路由
    const router = express.Router()

    // 测试接口
    router.get('/test', async (req, res) => {
        // populate() 关联字段查询 好像  加不加 populate() 有什么区别 看看接口返回的数据 加了返回的是一个对象
        //    const items = await AdminUser.find()
        res.send({
            code: '200',
            message: 'OK!'
        })
    })

    // 登录接口
    router.post('/login', async (req, res) => {
        console.log('req.body', req.body)
        const { password } = req.body
        let usernameOrEmail = req.body.username ? { username: req.body.username } : { email: req.body.email }
        // console.log('usernameOrEmail',usernameOrEmail)
        // 1. 判断用户名或者邮箱是否存在
        // console.log({username:username})
        let user = await AdminUser.findOne(usernameOrEmail).select('+password')
        console.log('user', user)
        //  如果不存在
        if (!user) {
            res.send({
                code: 422,
                message: '用户不存在！'
            })
            return
        }
        // 用户存在 -- 验证密码是否正确
        let isValid = require('bcrypt').compareSync(password, user.password)
        // 密码错误
        if (!isValid) {
            res.send({
                code: 422,
                message: '用户或者密码错误！'
            })
            return
        }
        //  密码正确 --- 生成token 返回
        const token = jwt.sign({ id: user._id }, app.get('secret'))
        res.send({ user, token })
    })


    // 注册接口
    router.post('/register', async (req, res) => {
        console.log('req.body', req.body)
        // const model = await  req.Model.create(req.body)
        const user = await AdminUser.create(req.body)
        res.send({
            code: 200,
            message: '注册成功！'
        })
    })

    app.use('/api/auth', router)
}