import React, { Component } from "react";

import styles from "./TodoItem.module.css";

class TodoItem extends Component {
  state = {
    editing: false,
  };
  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };
  handleUpdateDone = (event) => {
    if (event.key === "Enter") {
      this.setState({ editing: false });
    }
  };
  componentWillUnmount() {
    console.log("Cleaning up...");
  }
  render() {
    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    };

    const { id, title, completed } = this.props.todo;
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button onClick={() => this.props.handleDeleteProps(id)}>
            Delete
          </button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
        <input
          type="text"
          value={title}
          style={editMode}
          className={styles.textInput}
          onChange={(e) => {
            this.props.handleUpdateProps(e.target.value, id);
          }}
          onKeyDown={this.handleUpdateDone}
        />
      </li>
    );
  }
}

export default TodoItem;
