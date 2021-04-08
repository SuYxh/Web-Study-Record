import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import classnames from "classnames";
import { Wrapper, Button } from "./style";
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div style={{ color: "red", fontSize: "14px" }}>1.内联样式</div>
        <div className="cls">2.className</div>
        <div className={classnames({ cls: false })}>
          3.classnames用来根据条件判断className是否显示
        </div>
        <Wrapper>
          4.这是我们的样式组件化
          <h1>我是小白龙</h1>
        </Wrapper>
        <Wrapper>我是第二个</Wrapper>
        <Button>继承的组件</Button>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
