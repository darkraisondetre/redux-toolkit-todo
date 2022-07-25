import {createSlice} from '@reduxjs/toolkit'
import { v4 } from 'uuid'

const initialState = {
  items: [
    {
      id: 1,
      text: 'Redux Todo',
      completed: false
    },
    {
      id: 2,
      text: 'Купить сыр',
      completed: false
    }
  ]
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action) {
      const todo = {
        id: v4(),
        text: action.payload,
        completed: false
      }
      state.items.push(todo)
    },
    removeTodo(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    toggleCompleteTodo(state, action) {
      const todo = state.items.find(todo => todo.id === action.payload)

      if (todo) {
        todo.completed = !todo.completed
      }   
    }
  }
})

export const { addTodo, removeTodo, toggleCompleteTodo } = todoSlice.actions
export default todoSlice.reducer