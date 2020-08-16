const mongoose = require('mongoose');


mongoose.connect('mongodb://118.126.96.227:27017/express-auth',{useNewUrlParser:true , useUnifiedTopology: true , useCreateIndex:true})

const userSchema = new mongoose.Schema({
    // username:{type:String,required:true,unique:true},
    username:{type:String,required:true},
    password:{type:String,required:true,set(val){
        // 进行加密
        return require('bcrypt').hashSync(val,10)
    }}
})

 const User = mongoose.model('User',userSchema)

 module.exports = { User }