import React from 'react';

const getClassname = (complete) => complete
  ? 'todo'
  : 'todo complete'

const TodoItem = ({
  todo:  {
    id,
    name,
    complete
  },
  toggleTodo,
  deleteTodo,
}) => {

  return (
    <div className={getClassname(complete)}>
      <h3>{name}</h3>
      {console.log('', name)}
      <button
        className="btn"
        onClick={() => toggleTodo(id)}>
        {name}
      </button>
      <button
        className="btn"
        onClick={() => deleteTodo(id)
      }>
          Remove from list
      </button>
  </div>
  )
}

export default TodoItem;
