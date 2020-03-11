import React from 'react';
import { Route } from 'react-router-dom';

function CustomPropsRoute(props) {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={props => <Component {...props} />}
    />
  );
}

export default CustomPropsRoute;
