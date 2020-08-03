function* show() {
    yield 12
    yield 13
}
let gen = show()

for (let value of gen) {
    console.log(value)
}