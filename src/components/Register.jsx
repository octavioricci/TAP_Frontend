import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Register extends Component {
 
  
  render(){
    return (
        <React.Fragment>
            <div className="container d-flex h-100">
                <div className="row align-self-center w-100">
                  <div className="col-6 mx-auto"> 
                    <div className="jumbotron">
                    <form className="register" onSubmit={(e) => this.props.onRegister(e)}>
                      <fieldset>
                        <legend>Chat App Register</legend>
                          <label name="labelEmail" className="col-form-label">Name</label>
                          <input type="text" className="form-control col-12" name="name" id="name" value={this.props.name} onChange={(e) => this.props.nameRegisterfieldChecker(e)} />
                          <label name="labelEmail" className="col-form-label">Email</label>
                          <input type="text" className="form-control col-12" name="email" id="name" value={this.props.name} onChange={(e) => this.props.fieldChecker(e)} />
                          <label name="labelPassword" className="col-form-label">Password</label>
                          <input type="password" className="form-control col-12" name="password" id="password" value={this.props.password} onChange={(e) => this.props.fieldChecker(e)} />
                          <button type="submit" className="btn btn-secondary" disabled={!this.props.validateSubmit}>Register</button>
                      </fieldset>
                    </form>
                      
                    </div>
                  </div>
                </div>
               </div>
       </React.Fragment>                                                 
                                                           
    );
  }
}
  
  
export default Register;
