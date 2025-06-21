import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import LandingPage from './pages/Landing/LandingPage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import AboutUs from './pages/landing/AboutUs';
import ContactUs from './pages/landing/ContactUs';
import TalentSearchpage from './pages/TalentSearchPage';
import Overview from './pages/dashboard/Overview';
import Skills from './pages/dashboard/Skills';
import Projects from './pages/dashboard/Projects';
import Reviews from './pages/dashboard/Reviews';
// import PrivateRoute from './lib/PrivateRoute';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/talent-search" element={<TalentSearchpage/>}/>
        <Route path="/profile/:name" element={<Overview/>} />
        <Route path='/profile/:name/skills' element={<Skills/>}/>
        <Route path='/profile/:name/projects' element={<Projects/>}/>
        <Route path='/profile/:name/reviews' element={<Reviews/>}/>
        {/* Private Routes */}
        {/* <Route path="/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>}/> */}

      </Routes>
    </Router>
  )
}

export default App
