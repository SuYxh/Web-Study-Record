import React, { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import store from "./store";
import {
  getInputChange,
  getAddItem,
  getDelteItem,
  getAxiosListData,
} from "./store/actionCreators";
import TodoList from "./todoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    // 监听store的变化
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <TodoList
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleAddItem={this.handleAddItem}
        handleInputChange={this.handleInputChange}
        handleDelete={this.handleDelete}
      />
    );
  }
  // 钩子函数获取数据
  componentDidMount() {
    // axios.get("http://localhost:3004/data").then((res) => {
    //   const action = getListData(res.data);
    //   store.dispatch(action);
    // });
    const action = getAxiosListData();
    store.dispatch(action);
  }
  // 输入值改变
  handleInputChange(e) {
    const action = getInputChange(e.target.value);
    store.dispatch(action);
  }
  // store变化的时候 重新获取值 然后监听
  handleStoreChange() {
    this.setState(store.getState());
  }
  // 增加一条信息
  handleAddItem() {
    const action = getAddItem();
    store.dispatch(action);
  }
  // 删除一条信息
  handleDelete(index) {
    const action = getDelteItem(index);
    store.dispatch(action);
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
