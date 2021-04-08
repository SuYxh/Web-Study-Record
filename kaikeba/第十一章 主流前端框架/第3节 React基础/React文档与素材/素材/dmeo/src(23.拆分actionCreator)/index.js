import React, { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Button, Input, List } from "antd";
import store from "./store";
import {
  getInputChange,
  getAddItem,
  getDelteItem,
} from "./store/actionCreators";
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
      <div style={{ marginTop: "100px", marginLeft: "100px" }}>
        <div>
          <Input
            value={this.state.inputValue}
            placeholder="todoList"
            style={{ width: "300px", marginRight: "20px" }}
            onChange={this.handleInputChange}
          />
          <Button onClick={this.handleAddItem}>提交</Button>
          <List
            style={{ marginTop: "10px", width: "300px" }}
            size="small"
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <List.Item
                onClick={() => {
                  this.handleDelete(index);
                }}
              >
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
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
