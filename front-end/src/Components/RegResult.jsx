//reg result page
import React from 'react';
import { Link } from 'react-router-dom';

function RegResult({ regSuccess, regError, resetStep }) {
  return (
    <div className="reg-result">
      {regSuccess && ( //if success display success link to login
        <div className="success-message">
          Registration was successful! Click here to <Link to="/login">log in</Link>.
        </div>
      )}
      {regError && ( //if error prompt to restart the form
        <div className="error-message">
          Something went wrong! Click here to <Link to ="/register" onClick={resetStep}>try again</Link>.
        </div>
      )}
    </div>
  );
}

export default RegResult;