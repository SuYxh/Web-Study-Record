import React from "react";
import ReactDOM from "react-dom";
// 函数式组件

// const App = props => <h1>欢迎铁蛋儿{props.name}</h1>;

// class关键字组件
class App extends React.Component {
  render() {
    return <h1>欢迎铁蛋儿{this.props.name}</h1>;
  }
}

// const app = new App({
//   name: "你好"
// }).render();

ReactDOM.render(<App name="最帅" />, document.getElementById("root"));
