import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import axios from "axios";
const Person = ({ personId }) => {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState({});

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://autumnfish.cn/api/joke/list/?num=${personId}`)
      .then((res) => res.data.jokes)
      .then((data) => {
        console.log(data);
        setPerson(data);
        setLoading(false);
      });
  }, [personId]);

  if (loading === true) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <p> {person}</p>
    </div>
  );
};

function App() {
  const [show, setShow] = useState("1");

  return (
    <div className="App">
      <Person personId={show} />
      <div>
        Show:
        <button onClick={() => setShow("1")}>获取一条笑话</button>
        <button onClick={() => setShow("2")}>获取二条笑话</button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
