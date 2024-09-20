import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('authToken'); 
  return token ? children : <Navigate to="/" />; 
};

export default PrivateRoute;