import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Login extends Component {
  state = {
    loggedIn:false
  };


  loginHandle = () => {
    this.setState({loggedIn:true});
  }

  render(){
    return (
            <div className="container d-flex h-100">
                <div className="row align-self-center w-100">
                  <div className="col-6 mx-auto"> 
                    <div className="jumbotron">
                    <form name="form1">
                      <fieldset>
                        <legend>Chat App</legend>
                          <label for="UserName" className="col-form-label">Username</label>
                          <input type="text" className="form-control col-12" id="UserName"></input>
                          <label for="Password" className="col-form-label">Password</label>
                          <input type="text" className="form-control col-12" id="Password"></input>
                          <button type="button" value="log in" className="btn btn-secondary" onClick={this.loginHandle}>Login</button>
                      </fieldset>
                    </form>
                    <div style={{float:"right"}}>
                      <div className="login-help ">
                        <a href="#" className="badge badge-light">Register</a> - <a href="#" className="badge badge-light">Forgot Password</a>
                     </div>  
                   </div>
                    </div>
                  </div>
                </div>
               </div>
    );
  }
}
  
  
export default Login;

