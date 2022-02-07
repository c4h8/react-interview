import React from "react";
import "../Styles/todo.css";

const getClassname = (complete) =>
  complete
    ? "list-group-item todo complete"
    : "list-group-item todo incomplete";

const TodoItem = ({ todo: { id, name, complete }, toggleTodo, deleteTodo }) => {
  return (
    <li className={getClassname(complete)}>
      <span>
        <input
          type="checkbox"
          value={complete}
          aria-label="Toggle"
          onChange={() => toggleTodo(id)}
        />
        {name}
      </span>
      <button
        className="btn btn-outline-secondary"
        aria-label="Delete"
        onClick={() => deleteTodo(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
