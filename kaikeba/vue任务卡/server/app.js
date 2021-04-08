const mongoose = require('mongoose');
const Todo = require('./models/Todo')
const fs = require('fs');
// 链接数据库
mongoose.connect('mongodb://localhost:27017/vue-todo',
{useNewUrlParser:true,useUnifiedTopology:true},(err) => {
    if (!err) {
        console.log('数据库连接成功！')
    }
})



async function duwenjian() {
    let data = await fs.readFile('./db/initData.json',(err,data) => {
        if (!err) {
            console.log(data.toString())
            
        }
    })
}

duwenjian()


console.log('yxh')
// let arr  = [{content: 'Ant Design, a design language for background applications, is refined by Ant UED Team',url:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'},
// {content: 'Ant Design, a design language for background applications, is refined by Ant UED Team-2',url:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'},
// {content: 'Ant Design, a design language for background applications, is refined by Ant UED Team-3',url:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'},
// {content: 'Ant Design, a design language for background applications, is refined by Ant UED Team-4',url:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'},
// {content: 'Ant Design, a design language for background applications, is refined by Ant UED Team-5',url:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}]


// Todo.insertMany(arr)


// Todo.create({content: 'input',url:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'})

// Todo.deleteMany({})
