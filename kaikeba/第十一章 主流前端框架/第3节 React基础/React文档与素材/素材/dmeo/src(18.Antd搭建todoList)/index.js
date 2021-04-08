import React, { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Button, Input, List } from "antd";
const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];
class App extends Component {
  render() {
    return (
      <div style={{ marginTop: "100px", marginLeft: "100px" }}>
        <div>
          <Input
            placeholder="todoList"
            style={{ width: "300px", marginRight: "20px" }}
          />
          <Button>提交</Button>
          <List
            style={{ marginTop: "10px", width: "300px" }}
            size="small"
            bordered
            dataSource={data}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
