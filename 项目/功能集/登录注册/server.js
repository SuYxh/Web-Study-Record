const express = require('express');
const app = express()
const { User } = require('./models')
const jwt = require('jsonwebtoken');

app.use(express.json())

// 显示所有接口
app.get('/api/users',async (req,res) => {
    const users = await User.find()
    res.send(users)
})

// 注册接口
app.post('/api/register',async (req,res) => {
    console.log('req.body的数据：',req.body)
    // // 另一种限制的方式是在数据库的模型中使用 unique:true 即可
    const existUser = await User.find({username:req.body.username})
    console.log('existUser的数据',existUser)
    if (existUser.length > 0) {
        res.send('用户名已存在！')
    } else {
        const user = await User.create({
            username:req.body.username,
            password:req.body.password
        })
        res.send(user)
    }
    
})

// 登录接口
app.post('/api/login',async (req,res) => {
    // 1.看看用户存不存在
    const existUser = await User.findOne({username:req.body.username})
    if (!existUser) {
        return res.status(422).send({message:'您输入的用户不存在！'})
    }
    // 2.看看密码是否正确
    const isPasswordValid = require('bcrypt').compareSync(req.body.password,existUser.password)
    if (!isPasswordValid) {
        return res.status(422).send({message:'您输入的用户或密码错误！'})
    }
    // 3.生成token,并返回 sign({id:String(existUser._id)},'secret') 
    // 第二个参数为密钥，应该存在环境变量的文件中，被 git 忽略
    const tokenData = jwt.sign({id:String(existUser._id)},'secret')
    res.send({messa:'登陆成功！',existUser,token:tokenData})
})

app.get('/api/profile',async (req,res) => {
    console.log('前端传递的数据--headers：',req.headers)
    //  1.获取前端传递的token -- 是否有传token
    //  正确的时候值为什么样子，错误的时候又是什么样子
    const  token  = String(req.headers.authorization).split(' ').pop()
    //  2.解析token -- token 是否正确
    const tokenData = jwt.verify(token,'secret')
    console.log('token解析的数据：',tokenData)
    //  3.通过解析的内容进行查找 -- 是否查找成功
    const user = await User.findById(tokenData.id)
    // 上述内容可以抽成函数，这里有一个技巧，抽成的函数返回的也是一个函数，作为中间件使用
    res.send(user)
})

app.listen(3001,() => {
    console.log('http://localhost:3001')
})