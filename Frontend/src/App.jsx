import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import UserLogin from "./pages/UserLogin.jsx";
import UserSignup from "./pages/UserSignup.jsx";
import CaptainLogin from "./pages/CaptainLogin.jsx";
import CaptainSignup from "./pages/CaptainSignup.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/login' element={<UserLogin/>} /> 
        <Route path='/register' element={<UserSignup/>} /> 
        <Route path='/login' element={<CaptainLogin/>} /> 
        <Route path='/register' element={<CaptainSignup/>} /> 
      </Routes>
    </div>
  )
}

export default App