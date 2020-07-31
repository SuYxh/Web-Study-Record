//nodejs模块的使用
const mymod = require("./m1");
const m2 = require("./m2");
const {a,b:bb} = require("./m2"); //导入多个模块变量并使用解构赋值
const stu = require("./stu"); //导入类模块
const c1 = require("./count");
const c2 = require("./count");

//使用
mymod();

m2.a();
m2.b();
console.log(m2.mystr);
a();
bb();

//测试导入stu类，并实例化调用方法和属性输出
const s = new stu("zhangsan",22);
console.log(s.getInfo());
s.hello()
console.log(s.name);


console.log(c1.count());
console.log(c2.count());
console.log(c1.count());
console.log(c2.count());

