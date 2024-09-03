import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './product'
import Container from './Container'

function App() {
  const products = [
    { productName: "Buzdolabı", price: 25000 },
    { productName: "Ayakkabı", price: 1750 },
    { productName: "Pantolan", price: 920 },
  ]


  return (
    <div>
      <Container products={products} />
    </div>

  )
}

export default App
