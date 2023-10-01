// AuthProvider.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({token: null, postcode: null});
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const postcode = localStorage.getItem('userPostcode');
    if (token) {
      setUser({ token, postcode });
      setAuth(true);
    }
  }, []);

  const login = (token, postcode) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('userPostcode', postcode);
    setUser({ token });
    setAuth(true);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userPostcode');
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
