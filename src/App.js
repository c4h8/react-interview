import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

import AddTodoBar from './AddTodoBar'
import TodoItem from './TodoItem';

const todos2 = {
  "a1": {id: "a1", name: 'Go to the supermarket', complete: false},
  "a2": {id: "a2", name: 'Call Alice', complete: false},
  "a3": {id: "a3", name: 'Ask Alice to call Bob', complete: false},
  "a4": {id: "a4", name: 'Do the dishes', complete: false},
  "a5": {id: "a5", name: 'Change car tyres', complete: false}
};

const App2 = () => {
  const [todos, setTodos] = React.useState(todos2);

  const addTodo = (newTodoName) => {
    const newId = uuidv4()

    setTodos(oldTodos => ({
      [newId]: {
        id: newId,
        name: newTodoName,
        complete: false,
      },
      ...oldTodos, 
    }))
  }

  const deleteTodo = (id) => {
    if(todos[id])
      setTodos(oldTodos => {
        const {[id]: _, ...newTodos} = oldTodos
        return newTodos
      })
  }

  const toggleTodo = (id) => {
    const targetTodo = todos[id]; 

    setTodos(oldTodos => ({
      ...oldTodos,
      [id]: {
        ...targetTodo,
        complete: !targetTodo.complete
      }
    }))
  }

  return (
    <div>
      <AddTodoBar addTodo={addTodo}/>
      <ul className="list-group list-group-flush">
        {Object.keys(todos).map(todoKey => 
          <TodoItem
            key={todoKey}
            todo={todos[todoKey]}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        )}
      </ul>
    </div>
  )
}

export default App2;
