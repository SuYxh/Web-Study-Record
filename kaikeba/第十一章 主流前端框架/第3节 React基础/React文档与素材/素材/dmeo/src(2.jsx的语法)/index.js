import React from "react";
import ReactDOM from "react-dom";
const app = (
  <h1 style={{ background: "red", width: "200px" }}>
    {/*注释必须加双括号*/}
    字符串:{"铁蛋儿很帅"},数字:{18},数组:{[1, 2, 3, 4]}
  </h1>
);

ReactDOM.render(app, document.getElementById("root"));
