const fs = require('fs')
const thunkify = require('thunkify')

let readFileThunk = thunkify(fs.readFile)

let gen = function* () {
    yield readFileThunk('name.txt', 'utf8')
    yield readFileThunk('3.txt', 'utf8')
}
let generator = gen()

for (let t of generator) {
    t((err, data) => {
        console.log(data)
    })
}