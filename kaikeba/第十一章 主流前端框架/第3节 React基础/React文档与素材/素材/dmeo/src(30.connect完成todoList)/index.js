import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./todoList";
import { Provider } from "react-redux";
import store from "./store";
const App = (
  // 子组件可以通过Provider获取store
  <Provider store={store}>
    <TodoList />
  </Provider>
);
ReactDOM.render(App, document.getElementById("root"));
