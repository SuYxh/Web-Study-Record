const fs = require('fs')
const util = require('util')
let read = util.promisify(fs.readFile)

let asyncReadFile = async function () {
    let f1 = await read('name.txt', 'utf-8')
    let f2 = await read('1.txt', 'utf-8')
    console.log(f1.toString())
    console.log(f2.toString())
    return '我是铁甲小宝'
}

asyncReadFile().then(data => {
    console.log(data)
})