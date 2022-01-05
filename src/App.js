import React, { useState } from 'react';
import TodoForm from '../src/components/TodoForm';
import Todos from '../src/components/Todos';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Write a todo below',
      isComplete: false
    },
    {
      id: 2,
      text: 'Yes, Go on!',
      isComplete: false
    }
  ])
  
  const addTodo = (value) => {
    setTodos([...todos, {text: value}])
  }

  const Completed = (index) => {
    const newTodos = [...todos]
    newTodos[index].isComplete = !newTodos[index].isComplete
    setTodos(newTodos)
  }

  const editTaskName = (title, index) => {
    const newTodos = [...todos]
    newTodos[index].text = title
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <div className='container'>
        <h1>Todo App</h1>
        
        <TodoForm addTodo={addTodo} />
        <Todos todos={todos} Completed={Completed} editTaskName={editTaskName} />
      </div>
    </div>
  );
}

export default App;
