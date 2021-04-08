import React, { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Button, Input, List } from "antd";
import store from "./store";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }
  render() {
    return (
      <div style={{ marginTop: "100px", marginLeft: "100px" }}>
        <div>
          <Input
            value={this.state.inputValue}
            placeholder="todoList"
            style={{ width: "300px", marginRight: "20px" }}
          />
          <Button>提交</Button>
          <List
            style={{ marginTop: "10px", width: "300px" }}
            size="small"
            bordered
            dataSource={this.state.list}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
