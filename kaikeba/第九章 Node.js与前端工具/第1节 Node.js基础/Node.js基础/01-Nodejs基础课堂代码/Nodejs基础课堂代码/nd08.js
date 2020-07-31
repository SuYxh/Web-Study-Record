//path模块
const path = require("path");

let pfile = "/mnt/node/demo.js";

console.log(path.basename(pfile)); //文件名
console.log(path.extname(pfile)); //后缀名
console.log(path.basename(pfile,".js")); //去掉后缀的文件名
console.log(path.dirname(pfile)); //目录名

console.log(path.normalize("/aa/bb//cc/dd/ee/..")); //格式化路径

//合并路径
console.log(path.join("/a/b/c/","d.js"));

//获取指定文件的绝对路径（此文件必须存在）
console.log(path.resolve("nd08.js"));