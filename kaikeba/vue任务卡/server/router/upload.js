module.exports = app => {
    const express = require('express');
    // express 的子路由
    const router = express.Router()
    const authMiddleware  =  require('../middleware/auth')();
    const Todo = require('../models/Todo')
    const secret = require('../secret')


    // 测试接口
    router.get('/all', async (req,res) => {
        // populate() 关联字段查询 好像  加不加 populate() 有什么区别 看看接口返回的数据 加了返回的是一个对象
       const items = await Todo.find()
       res.send(items)
    })

    const multer = require('multer');
    const MAO = require('multer-aliyun-oss');
    const upload = multer({
        storage: MAO({
            config: {
                region: secret.region,
                accessKeyId: secret.accessKeyId,
                accessKeySecret: secret.accessKeySecret,
                bucket: secret.bucket
            }
        })
    });
    // app.post('/aliyun',upload.single('file'),async (req,res) => {
    //     console.log(req.file)
    //     const file = req.file
    //     // file.url = `http://localhost:3000/uploads/${file.filename}`
    //     res.send('file')
    // })

    router.post('/aliyun',upload.single('file'),async (req,res) => {
        const file = req.file
        // file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })

    // authMiddleware
    app.use('/api/upload',router)
}