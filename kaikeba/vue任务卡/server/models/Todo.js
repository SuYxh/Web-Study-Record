const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    content: { type: String },
    done: { type:Boolean ,default:false},
    url:{type:String,default:'https://res.huat.xyz/img/defaultImage.jpg'}
})

module.exports = mongoose.model('Todo', schema)