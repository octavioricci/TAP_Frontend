import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Login extends Component {
 
  constructor(props){
    super(props);
      this.state = {
       
        email:"",
        password:"",
        formErrors: {email:'',password:''},
        emailValid: false,
        passwordValid: false,
        formValid:false
      }
    
  }
  
  loginHandle = (e) => {
   
   const name = e.target.name;
   const value = e.target.value;
   // Acá asigno en el state, el email y password que lo mandó como callback a validateFields
   // Cuando completo en el input email: {[name]: value} == email: octavioricci@gmail.com
   // Cuando completo en el input password: {[name]: value} == password: Banco123
   this.setState(
      {[name]: value}, 
      () => {this.validateFields(name,value)});
   }
  
  validateFields = (name,value) => {
    let formValidator = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    
    switch(name){
        
      case 'email':
        let emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        formValidator.email = emailValid ? 'true' : 'false'; 
        break;
      
      case 'password':
        
        passwordValid = value.length >=8;
        formValidator.password = passwordValid ? true : false;
        console.log("FORMVALIDATOR",formValidator.password);
        break;
        
      default:
          break;
     }
      console.log("formErrors:" +formValidator.email + " "+formValidator.password+" EmailValid "+emailValid+" passwordValid"+passwordValid);
      this.setState({
        formErrors: formValidator,
        emailValid: formValidator.email,
        passwordValid: passwordValid 
        
      },this.validateForm)
    
  }
  
  validateForm = () => {
      this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }
  
  /*
  handleAccess = (e) => {
    
    var data = {
      'email': this.state.email,
      'password': this.state.password
    } 

        
    // Si está el email y password validado a nivel cliente, realizo la consulta a la api /users/login
    if(!e.disabled){
        
      
        fetch('https://tap-octavioricci820054.codeanyapp.com/api/users/login',{
                 method: 'POST',
                 headers: {'Accept': 'application/json','Content-Type': 'application/json'},
                 body: JSON.stringify(data)
                })
                .then((response) => {
                   if(!response.ok) throw new Error(response.status);
                })
                .then((data)=> {
                  console.log("This", this.props.history);
                 
                  //that.props.history.push('/Principal');	 
                 })
                .catch((error) => {
                    alert('error:' +  error);
                });
      
          
    }
  }*/


  render(){
    return (
        <React.Fragment>
            <div className="container d-flex h-100">
                <div className="row align-self-center w-100">
                  <div className="col-6 mx-auto"> 
                    <div className="jumbotron">
                    <form name="form1" onSubmit={(e) => this.props.onAccess(e)}>
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
                      <div className="login-help ">
                        <a href="#" className="badge badge-light">Register</a> - <a href="#" className="badge badge-light">Forgot password</a>
                     </div>  
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

