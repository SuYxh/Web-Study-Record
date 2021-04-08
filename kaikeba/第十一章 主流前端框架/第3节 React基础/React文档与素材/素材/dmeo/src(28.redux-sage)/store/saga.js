import {
    takeEvery,
    put
} from "redux-saga/effects";
import {
    GET_INIT_LIST
} from './actionTypes'
import {
    getListData
} from './actionCreators'
import axios from "axios";

function* getInitList() {
    try {
        const res = yield axios.get("http://localhost:3004/data")
        const action = getListData(res.data)
        yield put(action)
    } catch (e) {
        console.log('我错了' + e)
    }
}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList)
}
export default mySaga;