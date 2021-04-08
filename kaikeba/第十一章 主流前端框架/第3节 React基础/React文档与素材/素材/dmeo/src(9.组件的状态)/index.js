import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Proptypes from "prop-types";
class Title extends Component {
  // state = {
  //   name: "Tiedan",
  //   isBool: false,
  // };
  static defaultProps = {
    name: "hehe",
  };
  constructor() {
    super();
    this.state = {
      name: "Tiedan",
      isBool: true,
    };
  }
  handleBntclick = () => {
    // this.setState({
    //   isBool: !this.state.isBool,
    // });
    this.setState(
      (prevState, props) => {
        return {
          isBool: !prevState.isBool,
        };
      },
      () => {
        console.log("最新的state:" + this.state.isBool);
      }
    );
  };
  render() {
    return (
      <div>
        <h1>{this.state.name}是不是很帅</h1>
        <button onClick={this.handleBntclick}>
          {this.state.isBool ? "对" : "特别帅"}
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Title></Title>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
