//OS模块
const os = require("os");

console.log('CPU的字节序: ' + os.endianness());

console.log('操作系统名: ' + os.type());

console.log('操作系统的发行版本: ' + os.release());

console.log('编译时的操作系统名: ' + os.platform());

console.log('系统内存总量: ' + os.totalmem() + " bytes.");

console.log('操作系统空闲内存量: ' + os.freemem() + " bytes.");
