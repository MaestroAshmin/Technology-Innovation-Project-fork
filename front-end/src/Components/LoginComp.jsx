/*Login component
Justin Li 104138316
Last edited 14/09/2023*/
import React, { useState } from 'react';
import '../Css/Forms.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /*adjusts states*/
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  /*needs to contain logic for interacting with the backend*/ 
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  /*returns login form */
  return (
    <div className="layout">
      <div className="container">
        <div className="form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="form-label">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
                className="form-input"
              />
            </div>
            <div>
              <label className="form-label">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                required
                className="form-input"
              />
            </div>
            <div>
              <button type="submit" className="login-button">
                Login
              </button>
            </div>
          </form>
          <p><a href="/Register" className="link">Don't have an account? Click here to register!</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;


