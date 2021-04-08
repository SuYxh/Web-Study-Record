import React, { useState } from "react";

// useState()这个函数接受状态的初始值，作为参数，上例的初始值为按钮的文字。
// 该函数返回一个数组，数组的第一个成员是一个变量（上例是buttonText），指向状态的当前值。
// 第二个成员是一个函数，用来更新状态，约定是set前缀加上状态的变量名（上例是setButtonText）。
export default function Button() {
  const [buttonText, setButtonText] = useState("按钮初始值");

  function handleClick() {
    return setButtonText("设置按钮的值");
  }

  return <button onClick={handleClick}> {buttonText} </button>;
}
