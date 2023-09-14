/*Main page
Le Vy Cao 104201234
Last edited 14/09/2023*/
import React, { useState } from 'react';
import '../Css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import AboutUs from './AboutUs';
import HowToUse from './HowToUse';
import Services from './Services';
import LogTest from './LogTest';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/how-to-use" element={<HowToUse />} />
          <Route path="/services" element={<Services />} />
          <Route path="/test" element={<LogTest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
