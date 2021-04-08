import React, { Component } from "react";
class Child extends Component {
  constructor(prop) {
    super(prop);
  }
  render() {
    return <p>我是子组件:{this.props.parms}</p>;
  }
}

export default Child;
