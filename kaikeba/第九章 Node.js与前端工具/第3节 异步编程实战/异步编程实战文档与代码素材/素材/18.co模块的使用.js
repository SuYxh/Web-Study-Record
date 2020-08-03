const fs = require("fs");
const util = require("util");
// const co = require("co");
let read = util.promisify(fs.readFile);

function* readAge() {
  let name = yield read("name.txt", "utf8");
  console.log(name.toString());
  let arr = yield read("1.txt", "utf8");
  console.log(arr.toString());
  return "我是铁蛋儿";
}
function co(it) {
  return new Promise((resolve, reject) => {
    function next(data) {
      let { value, done } = it.next(data);
      if (done) {
        resolve(value);
      } else {
        Promise.resolve(value).then((data) => {
          next(data);
        }, reject);
      }
    }
    next();
  });
}

co(readAge()).then((data) => {
  console.log(data);
});
