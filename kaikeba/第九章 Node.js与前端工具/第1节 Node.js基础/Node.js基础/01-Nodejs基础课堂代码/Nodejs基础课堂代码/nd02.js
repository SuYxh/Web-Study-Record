
/*
console.log(process.execPath); //可执行文件的绝对路径,如 /usr/local/bin/node
console.log(process.version);  //版本号
console.log(process.versions); //依赖库的版本号
console.log(process.platform); //运行平台。如 darwin、freebsd、linux、sunos、win32
console.log(process.env);      //操作系统环境信息
//process.chdir('/tmp');       //切换当前工作目录位置
console.log(process.cwd());    //此方法返回当前目录，不使用任何参数
*/

/*
//获取命令行参数
process.argv.forEach((val,index)=>{
    console.log(index,":",val);
});
*/

process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
    let chunk;
    // 使用循环确保我们读取所有的可用数据。
    while ((chunk = process.stdin.read()) !== null) {
        if(chunk == "q\r\n"){
            process.stdout.write("再见！");
            process.exit();
        }
        process.stdout.write(`数据: ${chunk}`);
    }
});