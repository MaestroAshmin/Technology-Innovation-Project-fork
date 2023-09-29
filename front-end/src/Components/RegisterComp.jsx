/*Main registration component
Justin Li 104138316
Last edited 14/09/2023*/

import React, { useState } from 'react';
import axios from 'axios';
import RegLoginInfo from './RegLoginInfo';
import RegDemoInfo from './RegDemoInfo';

function Registration() {
  //form data state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    gender: 'na',
    nationality: '',
    postcode: '',
  });

  //constants for handling form navigation
  const [step, setStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  //posts to backend
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/register', formData)
      .then((response) => {
        console.log('Registration successful:', response.data);
      })
      .catch((error) => {
        console.error('Registration error:', error);
      });
  };

  //returns navigation logic
  return (
    <div className="layout">
      <div className="container">
        {step === 1 && (
          <RegLoginInfo
            formData={formData}
            handleInputChange={handleInputChange}
            nextStep={nextStep}
          />
        )}
        {step === 2 && (
          <RegDemoInfo
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            prevStep={prevStep}
          />
        )}
      </div>
    </div>
  );
}

export default Registration;

