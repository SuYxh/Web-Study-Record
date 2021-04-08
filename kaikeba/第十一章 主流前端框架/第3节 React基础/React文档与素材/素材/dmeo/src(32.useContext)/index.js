import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const AppContext = React.createContext({});

const Navbar = () => {
  const { username } = useContext(AppContext);

  return (
    <div className="navbar">
      <h1>Navabar</h1>
      <p>{username}</p>
    </div>
  );
};

const Messages = () => {
  const { username } = useContext(AppContext);

  return (
    <div className="messages">
      <h1>Messages</h1>
      <p>{username}</p>
    </div>
  );
};

function App() {
  return (
    <AppContext.Provider
      value={{
        username: "共享的数据1",
      }}
    >
      <div className="App">
        <Navbar />
        <Messages />
      </div>
    </AppContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
