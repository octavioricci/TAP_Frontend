import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return(
    
    <React.Fragment>
      <NavLink to="/" exact activeStyle={{color : 'green'}}>Login</NavLink>
      <NavLink to="/Principal" exact activeStyle={{color : 'green'}}>Principal</NavLink>
    </React.Fragment>
    
  );
};

export default Navigation;