import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/CounterSlice'

function App() {

  const { value } = useSelector((store) => store.counter)
  const dispatch = useDispatch();
  return (

    <div>
      <div>
        <h2>Counter : {value}</h2>
        <button onClick={()=> dispatch(increment())}>+</button>
        <button onClick={()=> dispatch(decrement())}>-</button>
      </div>
    </div>
  )
}

export default App
