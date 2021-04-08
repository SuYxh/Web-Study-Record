import React, { Component } from "react";
import ReactDOM from "react-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.input} />
        <button onClick={this.handleClick.bind(this)}>click</button>
      </div>
    );
  }
  handleClick() {
    console.log(this.input.current.value);
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
