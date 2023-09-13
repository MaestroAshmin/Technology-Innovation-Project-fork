import React , {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import AboutUs from './AboutUs';
import HowToUse from './HowToUse';
import Services from './Services';

function App() {
   // Use state to track the login status of the user
   const isLoggedIn = false;
 
  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn = {isLoggedIn}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/how-to-use" element={<HowToUse />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
