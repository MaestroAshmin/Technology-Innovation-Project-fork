/*register page
Justin Li 104138316
Last edited 21/09/2023*/
import React from 'react';
import Register from '../Components/RegisterComp';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'
function RegisterPage() {
  return (
    <div className='page'>
    <Navbar />
    <div className="form-container">
      <Register />
    </div>
    <Footer/>
    </div>
  );
}

export default RegisterPage;
