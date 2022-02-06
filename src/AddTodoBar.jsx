const getClassname = (complete) => complete
  ? 'todo'
  : 'todo complete'

const TodoItem = ({
  todo: {
    id,
    name,
    complete
  },
  toggleTodo,
  delteTodo,
}) => {
  return (
    <div className={getClassname(complete)}>
      <h3>{this.props.todo.name}</h3>
      <button
        className="btn"
        onClick={() => toggleTodo(id)}>
        {text}
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
