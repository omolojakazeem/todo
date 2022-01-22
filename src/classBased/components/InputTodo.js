import React, { Component } from "react";

class InputTodo extends Component {
  state = {
    title: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoItemProps(this.state.title);
      this.setState({
        title: "",
      });
    } else {
      alert("Please write item");
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          name="title"
          type="text"
          placeholder="Add todo..."
          className="input-text"
          value={this.state.title}
          onChange={this.handleChange}
        />

        <button className="input-submit">Submit</button>
      </form>
    );
  }
}

export default InputTodo;
