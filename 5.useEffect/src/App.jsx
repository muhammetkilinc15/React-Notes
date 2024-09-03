import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setlastName] = useState('')

  useEffect(() => {
    console.log("Her zaman calısır")
  })

  useEffect(() => {
    console.log("Componnet ilk render edildiğinde calısır")
    // veri tabanında ürünleri getir ve listele
  }, [])


  useEffect(() => {
    console.log("Componnet ilk render edildiğinde ve FİRSTNAME , LASTNAME state değiştiğinde calısır ")
  }, [firstName, lastName])

  // useEffect(() => {
  //   console.log("Componnet ilk render edildiğinde ve LASTNAME state değiştiğinde calısır ")
  // }, [lastName])


  return (
    <div>
      <div><button onClick={() => { setFirstName("Mami") }}>rename</button></div>
      <div><button onClick={() => { setlastName("kilinc") }}>resurname</button></div>
    </div>
  )
}

export default App
