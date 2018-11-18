import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Principal from "./components/Principal";
import NavBar from "./components/NavBar";
import Message from "./components/Message";
import SendMessage from "./components/SendMessage";
import Users from "./components/Users";
import logo from './logo.svg';
import './App.css';




class App extends Component {
  
  
  render() {
    
    return (
    
      <Router>
        <React.Fragment>
          <NavBar />
          <Navigation />
            <Switch>
              <Route path="/" component={Login} exact />
              <Route path="/Principal" component={Principal} />
              <Route path="/:id" render={() => <p>Este es el id</p>} />
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