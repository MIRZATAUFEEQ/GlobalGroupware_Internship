import React, { useEffect } from 'react'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProtectedRoute from './pages/ProtectedRoute'

const App = () => {

  return (
    <>
      <div className='w-full h-full bg-[#09090B] text-white'>
        <Router>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<ProtectedRoute element={<Home />} />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App