//导入自定义的学生信息管理模块
const Student = require("./model/student");

//使用findfAll（）获取所有学生信息
Student.findAll((err,data)=>{
    if(err){ 
        console.error(err);
        return;
    }
    console.log(data);
});

//获取单条数据
Student.findById(6,(err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
})

//执行添加
let stu = { name: '小王', sex: '0', age: '20', classid: 'web088'};
// Student.save(stu,(err,info)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log("ok");
// });