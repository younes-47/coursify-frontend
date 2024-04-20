import React, { createContext, useState } from 'react';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [userInfo, setUserInfo] = useState(null);
  const [persist, setPersist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('persist')) || false;
    } catch (error) {
      return false;
    }
  });

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <AuthContext.Provider
      value={{ auth, setAuth, persist, setPersist, userInfo, setUserInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
