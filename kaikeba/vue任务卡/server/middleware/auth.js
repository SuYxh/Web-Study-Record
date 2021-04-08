/*
module.exports = async (req,res,next) => {
    const token = String(req.headers.authorization || '').split(' ').pop()
    assert(token,401,'请提供 jwt-token')
    const { id } = jwt.verify(token,app.get('secret'))  // 返回的数据的样式： { id: '5f375ab04c8f6e6870044365', iat: 1597463746 }
    console.log(id)
    assert(id,401,'无效的token')
    req.user = await AdminUser.findById(id)
    assert(req.user,401,'用户不存在')
    await next()
}

    存在的问题 ： 如果我后面只想用到中间件的其中一个功能怎么办？
                 如果 模型不是 AdminUser 该如何去换？
    改进方案： 返回一个函数
*/


module.exports = options => {
    const jwt = require('jsonwebtoken');
    const AdminUser = require('../models/AdminUser');

    return async (req,res,next) => {
        // 检验用户是否登陆 -- token是否存在
        // token的形式： Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMzc1YWIwNGM4ZjZlNjg3MDA0NDM2NSIsImlhdCI6MTU5NzQ2Mzc0Nn0.Dbx2ngp9-vJYaOabwy_qJa6RlqeVRqmV2xEYBVHW0ZI
        // 需要提取token 所以换一种写法 split(' ') 使用 空格 进行分割，分割完成后变成了数组，然后在使用pop() ,pop() 可以提取最后一个元素
        // 没有 token 的时候 使用默认值
        const token = String(req.headers.authorization || '').split(' ').pop()
        if (!token) {
            res.send({code:401,message:'您无权访问！',data:null})
            return
        }
        // token验证 看看这个token是不是 服务器颁发的 ，客户端有没有进行篡改
        // decode(token) 对 token 进行解析，但是不会验证对错，不是很安全
        // verify(参数一，参数二)  对于token 进行校验 ，参数一： 需要校验的token 参数二：我们原来设置的 秘钥
        //  这里的req.app 和 app 是完全等同的
        const { id } = jwt.verify(token,req.app.get('secret'))  // 返回的数据的样式： { id: '5f375ab04c8f6e6870044365', iat: 1597463746 }
        // console.log(id)
        if (!id) {
            res.send({code:401,message:'请提供正确的凭证',data:null})
            return
        }
        // const user = await AdminUser.findById({id})  因为 user 后续也要使用，需要将其挂载到req上
        req.user = await AdminUser.findById(id)
        if (!req.user) {
            res.send({code:401,message:'用户不存在',data:null})
            return
        }
        await next()
    }
}

