function* show() {
    console.log('a')
    yield
    console.log('b')
}
let gen = show()
gen.next()
gen.next()