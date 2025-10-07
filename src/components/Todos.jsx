import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todos = () => {
    const todos = useSelector(state => state.todos)
    const name = useSelector(state => state.name)
    const dispatch = useDispatch()
    
  return (
    <div>
        {name.map((item,idx) => <li key={idx}>{item}</li>)}
      {todos.map((todo)=>(
        <li key={todo.id}>
            {todo.text}
            <button onClick={()=> dispatch(removeTodo(todo.id))}>X</button>
        </li>
      ))}
    </div>
  )
}

export default Todos
