import {
  CHANGE_INPUT_VALUE,
  ADD_ITEM,
  DELETE_ITEM,
  GET_LIST_DATA,
} from "./actionTypes";
import axios from "axios";
export const getInputChange = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
});
export const getAddItem = () => ({
  type: ADD_ITEM,
});
export const getDelteItem = (index) => ({
  type: DELETE_ITEM,
  index,
});
// 获取axios列表信息
export const getListData = (data) => ({
  type: GET_LIST_DATA,
  data,
});
// 获取axios列表数据

export const getAxiosListData = () => {
  return (dispatch) => {
    axios.get("http://localhost:3004/data").then((res) => {
      const action = getListData(res.data);
      dispatch(action);
    });
  };
};
