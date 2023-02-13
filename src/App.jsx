import React from 'react'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
      <Routes>
        <Route path='/register' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<Home />} />
      </Routes>

  )
}

export default App
