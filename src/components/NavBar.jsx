import React, { Component } from 'react';



  const NavBar = () =>  {
    
      return(
        <React.Fragment>
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
              Navbar <span className="badge badge-pill badge-secondary"></span>
            </a>
          </nav>
        </React.Fragment>
      );
     
  };

export default NavBar;