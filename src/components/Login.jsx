import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Login extends Component {
 
  
  render(){
    return (
        <React.Fragment>
            <div className="container d-flex h-100">
                <div className="row align-self-center w-100">
                  <div className="col-6 mx-auto"> 
                    <div className="jumbotron">
                    <form className="login" onSubmit={(e) => this.props.onAccess(e)}>
                      <fieldset>
                        <legend>Chat App</legend>
                          <label name="labelEmail" className="col-form-label">Email</label>
                          <input type="text" className="form-control col-12" name="email" id="email" value={this.props.email} onChange={(e) => this.props.fieldChecker(e)} />
                          <label name="labelPassword" className="col-form-label">Password</label>
                          <input type="password" className="form-control col-12" name="password" id="password" value={this.props.password} onChange={(e) => this.props.fieldChecker(e)} />
                          <button type="submit" className="btn btn-secondary" disabled={!this.props.validateSubmit} >Login</button>
                      </fieldset>
                    </form>
                    <div style={{float:"right"}}>
                     
                   </div>
                    </div>
                  </div>
                </div>
               </div>
       </React.Fragment>                                                 
                                                           
    );
  }
}
  
  
export default Login;

