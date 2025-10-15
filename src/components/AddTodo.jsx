import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addName, addTodo } from '../features/todo/todoSlice'

const AddTodo = () => {
    const [input, setInput] = useState('')
    const [inputName, setInputName] = useState('')
    const dispatch = useDispatch()
    function handleClick(){
        dispatch(addTodo(input))
        setInput('')
    }
    function handleClickName(){
        dispatch(addName(inputName))
        setInputName('')
        
    }
  return (
    <div>
      <input type="text" placeholder='Enter Todo' value={input} onChange={(e) => setInput(e.target.value)} />
      <input type="text" placeholder='Enter Name' value={inputName} onChange={(e) => setInputName(e.target.value)} />
       <button onClick={handleClickName}>Add Name</button>
      <button onClick={handleClick}>Add Todo</button>
    </div>
  )
}

export default AddTodo
