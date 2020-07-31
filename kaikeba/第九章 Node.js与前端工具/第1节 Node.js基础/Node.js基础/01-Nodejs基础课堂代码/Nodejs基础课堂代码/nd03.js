const { setTimeout } = require("timers");

console.log("start.....");

// setTimeout(()=>{
//     console.log("Hello world!");
// },3000);
setImmediate(()=>{
    console.log("Hello world!");
});

console.log("end.....");


console.log(__filename);
console.log(__dirname);