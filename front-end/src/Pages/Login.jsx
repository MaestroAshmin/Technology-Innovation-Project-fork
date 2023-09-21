/*login page
Justin Li 104138316
Last edited 21/09/2023*/
import React from 'react';
import Login from '../Components/LoginComp';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'

function LoginPage() {
  return (
    <div className="page">
      <Navbar />
      <div className = 'form-container'>
      <Login />
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
