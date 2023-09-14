/*Main registration component
Justin Li 104138316
Last edited 14/09/2023*/

import React, { useState } from 'react';
import RegLoginInfo from './RegLoginInfo';
import RegDemoInfo from './RegDemoInfo';

function Registration() {
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

  /*Constants for handling form navigation*/ 
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

/*Will contain logic for sending data to the backend*/
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  /*returns navigation logic */
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

