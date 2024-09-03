import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // useState : hooks 

  // useState : bir state 'in değeri set metodu kullanılarak değiştirildiğinde component yeniden render edilir



  // const [firstName, setFirstName] = useState('Muhammet')
  // const [lastName, setLastName] = useState('Kılınç')
  // const [userInfo, setUserInfo] = useState({ username: "mami", password: "1234" })

  const [count, setCount] = useState(0)

  const increaseCount = () => {
    setCount(count + 1)
  }
  const decreaseCount = () => {
    setCount(count - 1)
  }


  return (
    <div>
      <div>Count : {count}</div>
      <div><button onClick={increaseCount}>Arttır</button></div>
      <div><button onClick={decreaseCount}>Azalt</button></div>
    </div>
  )
}

export default App
