import React, { useState } from 'react';
import TodoForm from '../src/components/TodoForm';
import Todos from '../src/components/Todos';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: new Date().getTime(),
      text: 'Write a todo below',
      isComplete: false
    }
  ])
  
  const addTodo = (value) => {
    setTodos([
      ...todos, 
      {
        id: new Date().getTime(),
        text: value,
        isComplete: false
      }
    ])
  }

  const Completed = (id) => {
    const updatedTodos = [...todos].map(todo => {
      if(todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodos)
    console.log(id)
  }

  const deleteTodo = (id) => {
    const updatedTodos = [...todos].filter(todo => todo.id !== id)
    setTodos(updatedTodos)
    console.log(id)
  }

  return (
    <div className="App">
      <div className='container'>
        <h1>Todo App</h1>
        
        <TodoForm addTodo={addTodo} />
        <Todos todos={todos} Completed={Completed} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
