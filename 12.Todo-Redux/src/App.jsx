import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateTodo from './components/createTodo'
import TodoList from './components/todolist'

function App() {


  return (
    <div className="container">
    <div className="text-center">
      <CreateTodo />
      <TodoList />
    </div>
  </div>
  )
}

export default App
