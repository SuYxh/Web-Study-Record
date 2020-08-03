// next 参数传递会给上一个yield的返回值

function* read() {
    yield 111
    yield 222
    return 333
}
let it = read() // 返回的是一个iterator接口  也叫遍历接口
let res1 = it.next()
let res2 = it.next()
let res3 = it.next()
console.log(res3)