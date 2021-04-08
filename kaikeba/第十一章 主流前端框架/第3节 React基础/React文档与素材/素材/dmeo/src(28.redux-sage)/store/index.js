import {
    createStore,
    applyMiddleware
} from "redux";
import reducer from "./reducer";
import createSageMiddleWare from "redux-saga";
import mySaga from './saga'
const sageMiddleWare = createSageMiddleWare()
const store = createStore(reducer, applyMiddleware(sageMiddleWare));
sageMiddleWare.run(mySaga)
export default store;