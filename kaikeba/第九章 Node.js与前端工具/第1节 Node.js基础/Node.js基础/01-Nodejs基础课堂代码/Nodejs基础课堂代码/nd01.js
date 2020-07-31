
//定义指定参数的累加函数
function mysum(m=0){
    let total = 0;
    for(let i=0; i<=m; i++){
        total += i;
    }
    return total;
}

console.log("10的累加结果：",mysum(10));
console.log("50的累加结果：",mysum(50));
global.console.log("100的累加结果：",mysum(100));