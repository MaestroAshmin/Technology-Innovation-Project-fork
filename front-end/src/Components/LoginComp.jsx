import React, { useState} from 'react';

 

import axios from '../api/axios';

import '../Css/Forms.css';

//for routing after login https://stackoverflow.com/questions/62861269/attempted-import-error-usehistory-is-not-exported-from-react-router-dom

import { useNavigate } from 'react-router-dom';

 

const url = 'http://localhost:8000/api/login';

 

function Login() {

 

 

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

        url,

        JSON.stringify({ email, password }),

        {

          headers: { 'Content-Type': 'application/json' },

          //needs this

          withCredentials: true,

        }


      );

      

      //check login success

      if (response.data.status) {

 

        const token = response.data.token;

        const age = response.data.user.age;

        const gender = response.data.user.gender;

        const nationality = response.data.user.nationality;

        const postcode = response.data.user.postcode;

        const name = response.data.user.name;

        const user_id = response.data.user.user_id;

 

        localStorage.setItem('token', token);

        localStorage.setItem('email', email);

        localStorage.setItem('password', password);

        localStorage.setItem('age', age);

        localStorage.setItem('gender', gender);

        localStorage.setItem('nationality', nationality);

        localStorage.setItem('postcode', postcode);

        localStorage.setItem('name', name);

        localStorage.setItem('userId', user_id);

        navigate('/');

      }

      

    } catch (error) {

      //err

      if (!error.response){

        setErrMsg('No server response');

      }else if (errMsg.response?.status === 400){

        setErrMsg('Missing user name or password')

      }else if (errMsg.response?.status === 401){

        setErrMsg('Unauthorized');

      }else{

        setErrMsg('Login Failed');

      }

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

              <p className={errMsg ? 'errmsg' : 'offscreen'}>

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