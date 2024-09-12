import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import EmployeeAbout from './pages/EmployeeAbout'
import Header from './components/Header'
import ProductDetails from './pages/ProductDetails'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} >
            <Route path='employee' element={<EmployeeAbout/>} />
        </Route>
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product-details/:id' element={<ProductDetails />} />
        <Route path='*' element={<Error />} />
      </Routes>

    </div>
  )
}

export default App
