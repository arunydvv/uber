import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Start from "./pages/Start.jsx";
import UserLogin from "./pages/UserLogin.jsx";
import UserSignup from "./pages/UserSignup.jsx";
import CaptainLogin from "./pages/CaptainLogin.jsx";
import CaptainSignup from "./pages/CaptainSignup.jsx";
import UserProtectedWrapper from './pages/UserProtectedWrapper.jsx';
import UserLogout from './pages/UserLogout.jsx';

const App = () => {
  return (
    <div className="font-[Poppins]">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<UserProtectedWrapper><Home /></UserProtectedWrapper>} />
        <Route path="/user/logout" element={<UserProtectedWrapper><UserLogout /></UserProtectedWrapper>} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/register" element={<UserSignup />} />


        <Route path="/captain/login" element={<CaptainLogin />} />
        <Route path="/captain/register" element={<CaptainSignup />} />
      </Routes>
    </div>
  );
}

export default App