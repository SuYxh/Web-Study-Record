import React, { Component } from "react";
import { Button, Input, List } from "antd";
const TodoList = (props) => {
  const {
    inputValue,
    list,
    handleInputChange,
    handleAddItem,
    handleDelete,
  } = props;
  return (
    <div style={{ marginTop: "100px", marginLeft: "100px" }}>
      <div>
        <Input
          value={inputValue}
          placeholder="todoList"
          style={{ width: "300px", marginRight: "20px" }}
          onChange={handleInputChange}
        />
        <Button onClick={handleAddItem}>提交</Button>
        <List
          style={{ marginTop: "10px", width: "300px" }}
          size="small"
          bordered
          dataSource={list}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                handleDelete(index);
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default TodoList;
