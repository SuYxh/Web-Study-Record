const defaultState = {
    inputValue: '铁蛋儿很帅',
    list: [1, 2]
}
export default (state = defaultState, action) => {
    // input 发生改变了以后返回新的State
    if (action.type === "chang_input_value") {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    // 添加一天信息
    if (action.type === "add_item") {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    return state
}