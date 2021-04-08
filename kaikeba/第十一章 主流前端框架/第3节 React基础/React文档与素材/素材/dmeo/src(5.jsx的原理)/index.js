import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return React.createElement(
      "div",
      {
        className: "app",
        id: "root"
      },
      React.createElement("h1", { className: "title" }, "铁蛋超级帅"),
      React.createElement("p", null, "昌平小白龙")
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
