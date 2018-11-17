import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import logo from './logo.svg';
import './App.css';




class App extends Component {
  

  render() {
    
    return (
    
      <Router>
        <React.Fragment>
          <Navigation />
            <Switch>
              <Route path="/Login" component={Login} />
            </Switch>
        </React.Fragment> 
      </Router>
         
   
    );
       
  }
}


export default App;


/*
 <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
*/