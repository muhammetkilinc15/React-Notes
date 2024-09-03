import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let names = [
    "Mami", "Ugur", "Batu"
  ]
  return (
    <>
      {
        names.map((name, index) => (
          <div style={{
            width: '%100',
            backgroundColor: 'orange',
            border: '1px solid black'
          }} key={index}>{name}</div>
        ))
      }
    </>
  )
}

export default App
