module.exports = app => {
    const express = require('express');
    // express 的子路由
    const router = express.Router()
    const url = require('url')
    const authMiddleware  =  require('../middleware/auth')();
    const Todo = require('../models/Todo')
    const fs = require('fs');

    // // 删除所有
    // router.get('/delall', async (req,res) => {
    //    const model = await Todo.deleteMany()
    //    res.send(model)
    // })

    // 数据初始化
    router.get('/init', async (req,res) => {
        // console.log(req.body)
        let initData = fs.readFileSync('./db/initData.json').toString()
        await Todo.insertMany(JSON.parse(initData))
        res.send('数据初始化成功！')
     })



    // todo 列表
    router.get('/all', async (req,res) => {
        // populate() 关联字段查询 好像  加不加 populate() 有什么区别 看看接口返回的数据 加了返回的是一个对象
       const items = await Todo.find()
       res.send(items)
    })


    //  单个删除 
    router.delete('/del/:_id', async (req,res) => {
        console.log('del-req.params',req.params._id)
        await Todo.findByIdAndDelete(req.params._id)
        res.send({
            success:true
        })
    })

    // 单个查询
    router.get('/search/:id', async (req,res) => {
        
        const model = await  Todo.findById(req.params.id)
        res.send(model)
    })

    // 创建 todo
    router.post('/create', async (req,res) => {
       console.log(req.body)
       const model = await Todo.create(req.body)
       res.send(model)
    })


    // 编辑分类 -- 更新
    router.put('/put/:id', async (req,res) => {
        console.log('req.params.id',req.params.id)
        console.log('req.body',req.body)
        const model = await Todo.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
        // res.send({message:true})
    })

    // 模糊查询
    router.get('/blurry/:content', async (req,res) => {
        // console.log('模糊查询',req)
        // console.log('模糊查询originalUrl',req.originalUr)
        // let serachVal = decodeURI(req.originalUrl.split('=').pop())
        // console.log('serachVal',serachVal)
        console.log('req.params.content',req.params.content)
        let serachVal = req.params.content
        const model = await Todo.find({"content": {$regex: serachVal, $options:'i'}})
        res.send(model)
    })
    // db.test_info.find({"name": {$regex: '测试', $options:'i'}}) 
    // router.get('/blurry', async (req,res) => {
    //     console.log('模糊查询',req)
    //     console.log('模糊查询originalUrl',req.originalUr)
    //     let serachVal = decodeURI(req.originalUrl.split('=').pop())
    //     console.log('serachVal',serachVal)
    //     const model = await Todo.find({"todo": {$regex: serachVal, $options:'i'}})
    //     res.send(model)
    // })

    app.use('/api/todo',authMiddleware,router)
}