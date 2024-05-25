import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const userInfo = localStorage.getItem('userInfo');

  return (
    <Route
      {...rest}
      render={(props) =>
        userInfo ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
