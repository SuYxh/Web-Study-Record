import {
    CHANGE_INPUT_VALUE,
    ADD_ITEM,
    DELETE_ITEM
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