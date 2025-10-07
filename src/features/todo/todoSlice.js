import {createSlice, nanoid} from '@reduxjs/toolkit'


const initialState = {
    todos: [],
    name:[]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
            console.log(initialState)
        },
        removeTodo: (state,action)=>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
            console.log(initialState)

        },
        addName: (state, action)=>{
            const Textname = action.payload
            state.name.push(Textname)
        }
    }
})


export const {addTodo, removeTodo, addName} = todoSlice.actions

export default todoSlice.reducer