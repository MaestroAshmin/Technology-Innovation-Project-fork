/*Login component
Justin Li 104138316
Last edited 14/09/2023*/
import React, { useState, useEffect, useRef, useContext} from 'react';
import AuthContext from "../Context/AuthProvider";
import axios from '../api/axios';
import '../Css/Forms.css';

const LOGIN_URL = 'http://localhost:8000/api/login'; // Replace with the actual route path

function Login() {
  const {setAuth} = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(()=>{
    userRef.current.focus();
  }, [])

  useEffect(() =>{
    setErrMsg('');
  }, [email, password])
 
  /*needs to contain logic for interacting with the backend*/ 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await axios.post(LOGIN_URL, 
        JSON.stringify({email, password}),
        {
          headers: {'Content-Type' : 'application/json'},
          withCredentials: true
        }
        );
        console.log(response);

      setEmail('');
      setPassword('');
      // Handle the response as needed
    } catch (error) {
      // Handle errors
    }
    setSuccess(true);



  };

  /*returns login form */
  return (
    <>
    {
      success ? (<section>
        hi, you logged in
      </section>) :
      (
    <div className="layout">
      <div className="container">
        <div className="form">
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen" }>{errMsg}</p>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='email' className="form-label">Email</label>
              <input
                type="email"
                id='email'
                placeholder="Enter your email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value);}}
                required
                className="form-input"
                ref={userRef}
              />
            </div>
            <div>
              <label htmlFor='password' className="form-label">Password</label>
              <input
                type="password"
                id='password'
                placeholder="Enter your password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
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
      )
}
    </>
  );
  
}

export default Login;


