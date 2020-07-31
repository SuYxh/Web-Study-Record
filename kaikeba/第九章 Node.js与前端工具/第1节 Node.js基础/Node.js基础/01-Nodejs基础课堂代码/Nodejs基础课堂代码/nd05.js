//util实用工具实例
const util = require("util");
const fs = require("fs");


//类型判断
//2. 日期类型验证
console.log(util.types.isDate(new Date()));
console.log(util.isDate(new Date()));
// true
console.log(util.types.isDate(Date()));
// false (without 'new' returns a String)
console.log(util.types.isDate({}));
// false



//获取当前文件大小
const stat = util.promisify(fs.stat);
stat(__filename).then((stats)=>{
    console.log("当前文件大小：",stats.size);
}).catch((err)=>{
    //错误处理
});


/*
//获取当前文件大小
let size = 0;
fs.stat(__filename,(err,stats)=>{
    size = stats.size;
    console.log("当前文件大小2：",size);
});
console.log("当前文件大小：",size);
*/


/*
let name = 'zhangsan';
let age = 22;
console.log("我的姓名叫"+name+"，年龄"+age+"岁")
console.log(`我的姓名叫${name}，年龄${age}岁`)
console.log(util.format("我的姓名叫%s，年龄%d岁",name,age))
*/

