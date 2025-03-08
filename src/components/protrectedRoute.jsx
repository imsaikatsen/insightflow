import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const protectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Route>
      {...rest}
      render=
      {(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    </Route>
  );
};

export default protectedRoute;
