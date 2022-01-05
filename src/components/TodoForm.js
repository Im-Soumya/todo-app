import React, { useState } from 'react'
import Button from '@mui/material/Button';

import { Fab, FormControl, Input, InputLabel } from '@mui/material';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(!value) {
      return
    }
    addTodo(value)
    setValue('')
  }

  return (
    <div className='formGroup'>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel>Add a Task</InputLabel>
          <Input
            label='Add Todo'
            value={value}
            color='secondary'
            type='text'
            className='todoInput'
            onChange={handleChange}
          />
        </FormControl>
        {/* <Fab>
          <Button 
            disabled={!value}
            variant='contained'
            color='secondary'
            className='addBtn'
            onClick={handleSubmit}
          />
        </Fab> */}
        <Button
          disabled={!value}
          variant='contained'
          color='secondary'
          className='addBtn'
          onClick={handleSubmit}
        >
          Add
        </Button>
      </form>
    </div>
  )
}

export default TodoForm