//定义导出模块类
module.exports = class{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    getInfo(){
        return `我的姓名${this.name},年龄${this.age}`;
    }

    hello(){
        console.log("Hello ....");
    }
}