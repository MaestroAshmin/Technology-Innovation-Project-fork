// AuthProvider.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ token: null, postcode: null, user_id: null });
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const postcode = localStorage.getItem('userPostcode');
    const user_id = localStorage.getItem('userId')
    if (token) {
      setUser({ token, postcode , user_id});
      setAuth(true);
    }
  }, []);

  const login = (token, postcode, user_id) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('userPostcode', postcode);
    localStorage.setItem('userId', user_id);
    setUser({ token, postcode, user_id });
    setAuth(true);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userPostcode');
    localStorage.removeItem('userId');
    setUser(null);
    setAuth(false);
  };

  const contextValue = {
    user,
    login,
    logout,
    auth,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
