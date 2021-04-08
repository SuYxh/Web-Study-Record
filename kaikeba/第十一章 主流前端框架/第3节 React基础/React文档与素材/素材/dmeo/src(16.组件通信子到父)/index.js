import React, { Component } from "react";
import ReactDOM from "react-dom";
import Child from "./Child";
class App extends Component {
  state = {
    msg: "我是父组件传递的信息",
  };
  childMsg(msg) {
    console.log("父组件:" + msg);
  }
  render() {
    return (
      <div>
        父组件:
        <Child
          parms={this.state.msg}
          childmsg={(msg) => {
            this.childMsg(msg);
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
