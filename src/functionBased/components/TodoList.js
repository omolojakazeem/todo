import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          handleChangeProps={props.handleChangeProps}
          todo={todo}
          handleDeleteProps={props.handleDeleteProps}
          handleUpdateProps={props.handleUpdateProps}
        />
      ))}
    </ul>
  );
};
export default TodoList;
