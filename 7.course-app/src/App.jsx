import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './css/Course.css'
import Header from './header'
import { courses } from './Data'
import Course from './Course'
function App() {
  return (
    <>
      <Header />
      <div className='course-main'>
        {
          courses?.map((course) => (
            <Course key={course.id} course={course} />
          ))
        }
      </div>
    </>
  )
}

export default App
