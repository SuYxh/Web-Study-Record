import {
    CHANGE_INPUT_VALUE,
    ADD_ITEM,
    DELETE_ITEM,
    GET_LIST_DATA
} from "./actionTypes";

export const getInputChange = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})
export const getAddItem = () => ({
    type: ADD_ITEM
})
export const getDelteItem = (index) => ({
    type: DELETE_ITEM,
    index
})
// 获取axios列表信息
export const getListData = (data) => ({
    type: GET_LIST_DATA,
    data
})