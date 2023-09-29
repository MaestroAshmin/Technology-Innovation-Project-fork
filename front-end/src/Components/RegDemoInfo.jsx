/*Second registration page
Justin Li 104138316
Last edited 14/09/2023*/

import React from 'react';

function RegDemoInfo({ formData, handleInputChange, handleSubmit, prevStep }) {
  return (
    <div className="form registration-form">
      <h2>Demographic Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="age" className="form-field-optional">
            Age*
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-field-optional">
            Gender*
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
            className="form-input"
          >
            <option value="na">Prefer not to say</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="nationality" className="form-field-optional">
            Nationality*
          </label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            value={formData.nationality}
            onChange={handleInputChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="postcode" className="form-field-optional">
            Postcode*
          </label>
          <input
            type="text"
            id="postcode"
            name="postcode"
            value={formData.postcode}
            onChange={handleInputChange}
            required
            className="form-input"
          />
        </div>
        <p>*Fields labelled in italics are optional.</p>
        <div>
        <button type="button" onClick={prevStep} className="login-button">
            Back
          </button>
          <button type="submit" className="login-button">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegDemoInfo;
