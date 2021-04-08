import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { name, age } = this.state;
    return (
      <div>
        <div>
          <span>姓名:</span>
          <input
            type="text"
            value={name}
            name="name"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <span>年龄:</span>
          <input
            type="text"
            value={age}
            name="age"
            onChange={this.handleChange}
          />
        </div>
        <h1>
          帅锅:{name},{age}
        </h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
