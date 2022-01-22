import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  state = {};
  render() {
    return (
      <>
        <ul>
          {this.props.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              handleChangeProps={this.props.handleChangeProps}
              todo={todo}
              handleDeleteProps={this.props.handleDeleteProps}
              handleUpdateProps={this.props.handleUpdateProps}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default TodoList;
