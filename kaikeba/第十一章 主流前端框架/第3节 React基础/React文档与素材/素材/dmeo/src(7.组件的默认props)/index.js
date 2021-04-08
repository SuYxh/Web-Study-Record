import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

class Title extends Component {
  static defaultProps = {
    name: "铁蛋儿",
  };
  render() {
    return <h1>欢迎小白龙{this.props.name}</h1>;
  }
}

const Content = (props) => {
  return <p>{props.name}是不是很帅</p>;
};
Content.defaultProps = {
  name: "Tiedan",
};
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Title />
        <Content />
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
