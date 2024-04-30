import React from 'react';
import { Navigate } from 'react-router-dom';

const Auth = ({ children }) => {
  const sessionid = localStorage.getItem('Sessionid');
  console.log('Sessionid: ' + sessionid);
  return !sessionid ? <Navigate to="/app/inicio" /> : React.cloneElement(children, { sessionid });
};

export default Auth;