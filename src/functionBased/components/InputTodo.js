import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: "",
  });

  const handleChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      props.addTodoItemProps(inputText.title);
      setInputText({
        title: "",
      });
    } else {
      alert("Please write item");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={inputText.title}
          name="title"
          onChange={handleChange}
        />
        <button className="input-submit">
          <FaPlusCircle
            style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }}
          />
        </button>
      </form>
    </div>
  );
};

export default InputTodo;
