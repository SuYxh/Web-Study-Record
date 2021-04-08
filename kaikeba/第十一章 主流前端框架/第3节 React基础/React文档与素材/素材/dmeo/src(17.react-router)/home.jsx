import React, { Component } from "react";
class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>我是home组件 ID:{this.props.match.params.id}</div>;
  }
}

export default Home;
