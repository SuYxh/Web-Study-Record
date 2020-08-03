// 获取文件 多参数 以前
// fs.readFile(fileName, callback);

// // Thunk函数版  单参数
// Thunk(fileName)(callback);
// let Thunk = function (fileName) {
//     return function (callback) {
//         return fs.readFile(fileName)(callback);
//     };
// };

let thunkify = require("thunkify");
let fs = require("fs");

let read = thunkify(fs.readFile)
read('package.json', 'utf8')(function (err, data) {
    console.log(data)
})