import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

const BASE_URL = "http://localhost:3000"

function App() {

  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users")
    console.log(response.data)
  }

  const getUserById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`)
    console.log(response.data)
  }

  useEffect(() => {
    //getAllUsers()
    getUserById(1)
  }, [])
  return (
    <div>

    </div>
  )
}

export default App
