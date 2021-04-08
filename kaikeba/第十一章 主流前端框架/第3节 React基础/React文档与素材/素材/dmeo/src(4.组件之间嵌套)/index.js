import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
class Title extends Component {
  render() {
    return <h1>铁蛋儿最帅</h1>;
  }
}

class Content extends Component {
  render() {
    return <p>昌平小白龙</p>;
  }
}
class App extends Component {
  render() {
    return (
      //   <div>
      //     <Title />
      //     <Content />
      //   </div>
      <Fragment>
        <Title />
        <Content />
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
