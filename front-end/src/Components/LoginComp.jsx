import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from "../Context/AuthProvider";
import axios from '../api/axios';
import '../Css/Forms.css';
//for routing after login https://stackoverflow.com/questions/62861269/attempted-import-error-usehistory-is-not-exported-from-react-router-dom
import { useNavigate } from 'react-router-dom';

const LOGIN_URL = 'http://localhost:8000/api/login';

function Login() {
  const { login } = useAuth(); 
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  //for submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //post form data
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json' },
          //needs this
          withCredentials: true,
        }
      );
      
      //check login success
      if (response.data.status) {
        //if successful, call AuthProvider login function
        login(response.data.token, response.data.user.postcode, response.data.user.user_id);
        setSuccess(true);
        //routes to test logging page
        navigate('/test');
      }

      setEmail('');
      setPassword('');
    } catch (error) {
      //err
      console.error('Login error:', error);
      setErrMsg('Invalid credentials. Please try again.');
    }
  };

  return (
    <>
      {success ? (
        <section>
          Welcome! You are logged in.
        </section>
      ) : (
        <div className="layout">
          <div className="container">
            <div className="form">
              <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'}>
                {errMsg}
              </p>
              <h2>Login</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                    className="form-input"
                    ref={userRef}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
              <p>
                <a href="/Register" className="link">
                  Don't have an account? Click here to register!
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
