import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

class Title extends React.Component {
  constructor() {
    super();
    // this.handleClick = this.handleClick.bind(this);
  }
  handleClick(name, event) {
    console.log(name, event);
  }
  render() {
    return (
      <button onClick={this.handleClick.bind(this, "铁蛋儿")}>按钮</button>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Title />
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
