import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Proptypes from "prop-types";
class Title extends Component {
  static defaultProps = {
    name: "铁蛋儿",
  };
  render() {
    return <h1>{this.props.children}</h1>;
  }
}

const Content = (props) => {
  return <p>{props.children}</p>;
};
Content.defaultProps = {
  name: "Tiedan",
};
Content.propTypes = {
  name: Proptypes.string,
};
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Title>我是小白龙</Title>
        <Content>
          <i>我很帅</i>
        </Content>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
