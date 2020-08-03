// next 参数传递会给上一个yield的返回值

function* read() {
    let a = yield 1
    console.log(a)
    let b = yield 2
    console.log(b)
    let c = yield 3
    console.log(c)
}
let it = read() // 返回的是一个iterator接口  也叫遍历接口
it.next('xxx') // 第一次传递参数 是无意义的
it.next('hello') // next传递的参数会给上一个yield的返回值
it.next('word')
it.next('铁蛋儿')