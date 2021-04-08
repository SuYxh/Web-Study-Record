import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./home";
import User from "./user";
class App extends Component {
  render() {
    return (
      <div>
        {/* 路由匹配规则 */}
        <Router>
          <ul>
            <li>
              <Link to="/home">主页</Link>
            </li>
            <li>
              <Link to="/user">用户</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/home" component={Home}></Route>
            <Route path="/home/:id?" component={Home}></Route>
            <Route path="/user" component={User}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
