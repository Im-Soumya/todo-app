import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import { List, ListItem } from '@mui/material';

const Todos = ({ todos, Completed, editTaskName }) => {
  return (
    <div>
      {todos.map((todo, index) => <Todo 
        todo={todo} 
        key={index} 
        index= {index} 
        Completed={Completed}
        editTaskName={editTaskName}
      />)}
    </div>
  )
}

const Todo = ({ todo, index, Completed }) => {
  return (
    <div className='todoContainer'>        
        <p style={{textDecoration: todo.isComplete ? 'line-through' : ''}}>
          <Checkbox 
            name='completed'
            color='secondary'
            type='checkbox' 
            onChange={() =>Completed(index)} 
            id={index}
          />
          {' '}
          <label htmlFor={index}>{todo.text}</label>
        </p>
    </div>
  )
}

export default Todos
