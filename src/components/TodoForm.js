import React, { useState } from 'react'
import AddTaskIcon from '@mui/icons-material/AddTask';
import Button from '@mui/material/Button';
import { FormControl, InputLabel, Input } from '@mui/material';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addTodo(value)
    setValue('')
  }

  return (
    <div className='formGroup'>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel htmlFor='outlined-component' className='label'>Add a Task</InputLabel>
          <Input
            label='Add Todo'
            value={value}
            color='secondary'
            type='text'
            className='todoInput'
            onChange={handleChange}
            style={{fontFamily: 'Work Sans'}}
            // style={{fontSize: 20}}
          />
        </FormControl>
        
        <Button
          disabled={!value}
          variant='contained'
          color='secondary'
          className='addBtn'
          cursor='pointer'
          onClick={handleSubmit}
          style={{fontSize: 15, fontFamily: 'Work Sans'}}
        >Add</Button>
      </form>
    </div>
  )
}

export default TodoForm