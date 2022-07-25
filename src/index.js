import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import todoSlice from './redux/features/todoSlice'
import { configureStore } from '@reduxjs/toolkit'

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
  reducer: {
    todo: todoSlice
  }
})

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
