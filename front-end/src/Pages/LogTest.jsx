/*register page
Justin Li 104138316
Last edited 21/09/2023*/
import React from 'react';
import LogTest from '../Components/LogTestComp';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'

function RegisterPage() {
  return (
    <div className="page">
      <Navbar />
      <div className="form-container">
      <LogTest />
      </div>
      <Footer />
    </div>
  );
}

export default RegisterPage;
