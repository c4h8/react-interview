import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

import TodoItem from './TodoItem';

const todos = [
    {id: "1", name: 'Go to the supermarket', complete: false},
    {id: "2", name: 'Call Alice', complete: false},
    {id: "3", name: 'Ask Alice to call Bob', complete: false},
    {id: "4", name: 'Do the dishes', complete: false},
    {id: "5", name: 'Change car tyres', complete: false}
];

const todoObject = ({});
for (const todo in todos) {
  todoObject[""+todo.id] = todo
}

const todos2 = {
  "a1": {id: "a1", name: 'Go to the supermarket', complete: false},
  "a2": {id: "a2", name: 'Call Alice', complete: false},
  "a3": {id: "a3", name: 'Ask Alice to call Bob', complete: false},
  "a4": {id: "a4", name: 'Do the dishes', complete: false},
  "a5": {id: "a5", name: 'Change car tyres', complete: false}
};

console.log('todos;', todoObject)

const generateNewId = uuidv4

const App2 = () => {
  const [todos, setTodos] = React.useState(todos2);
  const [newTodoName, setNewTodoName] = React.useState('');

  const handleSubmitNewTodo = (ev) => {
    ev.preventDefault();
    const newId = uuidv4()

    setTodos(oldTodos => ({
      ...oldTodos, 
      [newId]: {
        id: newId,
        name: this.state.newTodoName,
        complete: false,
      }
    }))
    setNewTodoName('')
  }

  const deleteTodo = id => {
    if(todos[id])
    setTodos(oldTodos => {
      const {[id]: _, ...newTodos} = oldTodos
      return newTodos
    })
  }

  const toggleTodo = id => {
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
      {console.log('', todos)}
      {Object.keys(todos).map(todoKey => 
        <TodoItem
          key={todoKey}
          todo={todos[todoKey]}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      )}
    </div>
  )
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodoName: '',
            todos: todos
        };
    }

    generateNewId() {
        return this.state.todos.length + 1;
    }

    onSubmit(event) {
        event.preventDefault();

        var newTodos = this.state.todos.slice();
        newTodos.push({
            id: this.generateNewId(),
            name: this.state.newTodoName,
            complete: false
        });

        this.setState({todos: newTodos, newTodoName: ''});
    }

    onClick(id) {
        var todoItems = this.state.todos.slice();
        for (let i = 0; i < this.state.todos.length; i++) {
            if (todoItems[i].id === id) {
                var newComplete = !todoItems[i].complete;
                todoItems[i].complete = newComplete;
            }
        }

        this.setState({
            todos: todoItems
        });
    }

    onChange(event) {
        this.setState({newTodoName: event.target.value});
    }
    onRemoveClick(id) {
        //implement this logic
        console.log('Remove Item!');
    }

    render() {
        return (
            <div className="">
                {this.todoItems()}
                <Bar
                    onSubmit={this.onSubmit.bind(this)}
                    newTodoName={this.state.newTodoName}
                    onInputChange={this.onChange.bind(this)}
                />
            </div>
        );
    }

    todoItems = () => {
        var retVal = [];

        for (let i = 0; i < this.state.todos.length; i++) {
            var todo = this.state.todos[i];
            retVal.push(
                <Hello
                    key={todo.id}
                    todo={todo}
                    onClick={this.onClick.bind(this)}
                    onRemoveClick={this.onRemoveClick.bind(this)}
                />
            );
        }
        return retVal;
    };
}

class Hello extends React.Component {
    render() {
        var color;
        var text;

        if (this.props.todo.complete === true) {
            color = 'lightgreen';
            text = 'Complete';
        } else {
            color = 'pink';
            text = 'Incomplete';
        }

        return (
            <div className="wrapper" style={{backgroundColor: color}}>
                <h3>{this.props.todo.name}</h3>
                <button
                    className="btn"
                    onClick={() => this.props.onClick(this.props.todo.id)}>
                    {text}
                </button>
                <button
                    className="btn"
                    onClick={() =>
                        this.props.onRemoveClick(this.props.todo.id)
                    }>
                    Remove from list
                </button>
            </div>
        );
    }
}

class Bar extends React.Component {
    render() {
        return (
            <form
                className="wrapper"
                style={{'grid-template-columns': '7fr 2fr'}}
                onSubmit={this.props.onSubmit}>
                <input
                    placeholder="Add new todo"
                    value={this.props.newTodoName}
                    onChange={this.props.onInputChange}
                />
                <button
                    className="btn btn-success"
                    type="submit"
                    value="Submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default App2;
