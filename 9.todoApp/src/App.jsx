import TodoCreate from './components/TodoCreate'
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList'
import { useState } from 'react';

function App() {
  const [todos,setTodos] = useState([])

  const createTodo = (newTodo)=>{
    setTodos([...todos,newTodo])
  }

  const removeTodo = (todoId) =>{
   setTodos([...todos.filter((todo) => todo.id !== todoId)])
  }

  const updateTodo = (todo) =>{
      if(todos.map((curTodo)=> todo.id !== curTodo.id))
        return curTodo;
      return todo;
   }
 
  console.log(todos)

  return (
    <div className="container">
    <div className="text-center">
      <TodoCreate onCreateTodo = {createTodo} />
      <TodoList todos={todos} onRemoveTodo = {removeTodo} updateTodo= {updateTodo}/>
    </div>
  </div>
  )
}

export default App
