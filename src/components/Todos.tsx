import Todo from "../models/todo";
import List from "./List";
import React from "react";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <List id={item.id} key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
