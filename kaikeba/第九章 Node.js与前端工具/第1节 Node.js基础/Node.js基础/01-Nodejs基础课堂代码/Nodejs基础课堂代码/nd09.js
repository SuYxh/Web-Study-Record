//文件系统模块
const fs = require("fs");
const path = require("path");
/*
//异步文件读取
console.log("start....");
fs.readFile("./mydir/a.txt","utf8",(err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
});
console.log("end....");
*/

/*
//同步文件读取
console.log("start....");
try{
    const data = fs.readFileSync("./mydir/a.txt","utf8");
    console.log(data);
}catch(err){
    console.error(err);
}
console.log("end....");
*/


//异步写入文件操作
// const content = "Hello Nodejs!";
// fs.writeFile("./mydir/a.txt",content,err=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log("文件写入成功！");
// });

//同步写入文件操作
// const content = "Hello Nodejs!";
// try{
//     fs.writeFileSync("./mydir/a.txt",content);
//     console.log("文件写入成功！");
// }catch(err){
//     console.error(err);
// }

//追加写
// const content = "Hello Nodejs!\r\n";
// try{
//     fs.writeFileSync("./mydir/c.txt",content, {flag:'a'});
//     console.log("文件写入成功！");
// }catch(err){
//     console.error(err);
// }


//目录的操作
const dirname = "./mydir";

fs.readdir(dirname,(err,files)=>{
    if(err){
        console.error(err);
        return;
    }
    for(let f of files){
        //console.log(f);
        let file = path.join(dirname,f);//合并目录与文件
        //获取此文件的信息
        fs.stat(file,(err,stats)=>{
            if(err){
                console.error(err);
                return;
            }
            console.log(stats);
        });
    }
});



//文件监听
// fs.watchFile("./mydir/a.txt", { interval: 200 }, (a, b) => {
//     console.log('a.txt 被改动');
//   });