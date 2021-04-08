module.exports = app => {
    const mongoose = require('mongoose');
    // 链接数据库
    mongoose.connect('mongodb://localhost:27017/vue-todo',
    {useNewUrlParser:true,useUnifiedTopology:true},(err) => {
        if (!err) {
            console.log('数据库连接成功！')
        }
    })
}