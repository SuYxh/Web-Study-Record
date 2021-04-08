import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

const arr = [
  { id: 1, name: "大娃", age: 16 },
  { id: 2, name: "二娃", age: 18 },
];

class Title extends Component {
  static defaultProps = {
    name: "hehe",
  };
  constructor() {
    super();
    this.state = {
      name: "Tiedan",
      isBool: true,
      content: "<h1>我是后台传过的的html</h1>",
    };
  }
  handleBntclick = () => {
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
        <div dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
        <h1>
          {this.state.name}
          是不是很帅
        </h1>
        <button onClick={this.handleBntclick}>
          {this.state.isBool ? "对" : "特别帅"}
        </button>
        <div>
          {arr.map((person) => {
            return (
              <ul key={person.id}>
                <li>{person.id}</li>
                <li>{person.name}</li>
                <li>{person.age}</li>
              </ul>
            );
          })}
        </div>
      </div>
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
