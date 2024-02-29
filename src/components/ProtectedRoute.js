import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, condition, redirectTo, ...rest }) => {
  return condition ? <Component {...rest} /> : <Navigate to={redirectTo} />;
};

export default ProtectedRoute