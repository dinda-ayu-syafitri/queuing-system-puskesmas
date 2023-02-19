import React from 'react'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserOnly from './pages/UserOnly'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
      <Routes>
        <Route path='/register' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} />
        <Route path='/user-only' element={<ProtectedRoute><UserOnly/></ProtectedRoute>} />
      </Routes>

  )
}

export default App
