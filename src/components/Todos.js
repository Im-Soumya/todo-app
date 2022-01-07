import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const Todos = ({ todos, Completed, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => <Todo 
        todo={todo} 
        key={index} 
        index= {todo.id} 
        Completed={Completed}
        deleteTodo={deleteTodo}
      />)}
    </div>
  )
}

const Todo = ({ todo, Completed, deleteTodo }) => {
  return (
    <div className='todoContainer'>        
        <p style={{textDecoration: todo.isComplete ? 'line-through' : ''}}>
          <Checkbox  
            name='completed'
            color='secondary'
            type='checkbox' 
            checked={todo.isComplete}
            onChange={() =>Completed(todo.id)} 
            id={todo.id}
          />
          {' '}
          <label htmlFor={todo.id} className='todoText'>{todo.text}</label>
          <Button
            variant='outlined'
            color='error'
            className='delBtn'
            onClick={() => deleteTodo(todo.id)}
            style={{fontSize: 10}}
          >Delete</Button>
        </p>
    </div>
  )
}

export default Todos
