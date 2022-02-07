import React from "react";
import "../Styles/addTodoBar.css";

const AddTodoBar = ({ addTodo }) => {
  const [newTodoText, setNewTodoText] = React.useState("");

  const handleOnChange = (ev) => {
    const value = ev.target.value;
    setNewTodoText(value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const todoTrimmed = newTodoText.trim();

    if (todoTrimmed !== "") {
      addTodo(todoTrimmed);
      setNewTodoText("");
    }
  };

  return (
    <div className="add-todo-bar">
      <div className="py-2">
        <form
          style={{ display: "flex", flexGrow: "1" }}
          onSubmit={handleSubmit}
        >
          <div className="input-group">
            <input
              style={{ flexGrow: "1" }}
              type="text"
              className="form-control"
              placeholder="Add new todo"
              value={newTodoText}
              onChange={handleOnChange}
            />
            <button className="btn btn-success" type="submit" value="Submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodoBar;
