import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Store from './pages/Store'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import SignUp from './pages/SignUp'
import Resetpassword from './pages/Resetpassword'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Store />} />
            <Route path='login' element={<Login />} />
            <Route path='forgot-password' element={<ForgotPassword />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='reset-password' element={<Resetpassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
