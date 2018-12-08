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
  
  constructor(props){
    super(props);
      this.state = {
        email:"",
        password:"",
        formErrors: {email:'',password:''},
        emailValid: false,
        passwordValid: false,
        formValid:false,
        from: '',
        to:'',
        message:'',
        userMessage:'',
        receivedMessages:'',
        usersOnline:''
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
  
  handleAccess = (e) => {
    
    e.preventDefault();
    var data = {
      'email': this.state.email,
      'password': this.state.password
    } 

        
    // Si está el email y password validado a nivel cliente, realizo la consulta a la api /users/login
    if(!e.disabled){
        
     fetch('https://tap-octavioricci820054.codeanyapp.com/api/users/login',{
          method:'POST',
          headers: {'Accept': 'application/json','Content-Type': 'application/json'},
          body: JSON.stringify(data)
         },{mode: 'no-cors'})
          .then(response => response.text())
            .then(text => {
              alert(text);
              this.setState({messages:text});
        })
        .catch(error => {
          console.log(error);
        });
      
               
     }
    }
  
  handleMessage = (e) =>{
    this.setState({message:e.target.value});
  }
  
  handleFrom = (e) => {
    this.setState({from : e.target.value});
  }
  
  handleTo = (e) => {
    this.setState({to : e.target.value});
  }
  
  handleSendMessage = () =>{
    const from = this.state.from;
    const to = this.state.to;
    const message = this.state.message;
    
     var data = {
      'from': from,
      'to': to,
      'message': message
    } 
     
  
     
     console.log(JSON.stringify(data));
     fetch('https://tap-octavioricci820054.codeanyapp.com/api/messages',{
                 method: 'POST',
                 headers: {'Accept': 'application/json',
                           'Content-Type': 'application/json',
                           'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                           'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYWJjZGE5ZWE3MTJlMDM2MjJiNmM2MSIsImlhdCI6MTU0MjkyOTA1NiwiZXhwIjoxNTQyOTM1MDU2fQ.hkYfdyMc1iteNV2XtwuImPPC9SR-65J5nD0aIqCo46g'
                          },
                            
                 body: JSON.stringify(data)
                })
                 .then((response)=>response.text())
                      .then((responseText) => {
                          alert(responseText);
                          
                    })
                    .catch((error)=>{
                        alert(error);
                    });
                /*.then((response) => {
                   if(!response.ok) throw new Error(response.status);
                })
                .then((data)=> {
                  alert(data);
                 
                  
                 })
                .catch((error) => {
                    alert('error:' +  error);
                });*/
    }
  
  
         handleUserMessage = (e) => {
              this.setState({userMessage:e.target.value});
          }
        
        handleReceivedMessages = (e) => {
          this.setState({receivedMessages: e.target.value})
        }
         
         
        handleUserReceivedMessage = () => {
            const user = this.state.userMessage;
            
            fetch('https://tap-octavioricci820054.codeanyapp.com/api/mymessages',{
                 method: 'GET',
                 headers: {'Accept': 'application/json','Content-Type': 'application/json','Authorization':user},
                  })
                    .then((response)=>response.text())
                      .then((responseText) => {
                          alert(responseText);
                          this.setState({receivedMessages:responseText});
                    })
                    .catch((error)=>{
                        alert(error);
                    });
          
          
             
          }
        
          handleUsersOnline = () => {
            
            fetch('https://tap-octavioricci820054.codeanyapp.com/api/users/login',{
                 method: 'GET',
                 headers: {'Accept': 'application/json','Content-Type': 'application/json'},
                  })
                    .then((response)=>response.text())
                      .then((responseText) => {
                          alert(responseText);
                         
                    })
                    .catch((error)=>{
                        alert(error);
                    });
          
            
          }
        
    
  
  
  render() {
        
    return (      
      
        <React.Fragment>
             <div className="container d-flex h-100">
                <div className="row align-self-center w-100">
                  <div className="col-6 mx-auto"> 
                    <div className="jumbotron">
                    <form name="form1" onSubmit={this.handleAccess}>
                      <fieldset>
                        <legend>Chat App</legend>
                          <label name="labelEmail" className="col-form-label">Email</label>
                          <input type="text" className="form-control col-12" name="email" id="email" value={this.state.value} onChange={this.loginHandle} />
                          <label name="labelPassword" className="col-form-label">Password</label>
                          <input type="password" className="form-control col-12" name="password" id="password" value={this.state.value} onChange={this.loginHandle} />
                          <button type="submit" className="btn btn-secondary" disabled={!this.state.formValid}>Login</button>
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
            <div className="container d-flex h-100">
                <div className="row align-self-center w-100">
                  <div className="col-6 mx-auto" styles={{'background-color':'pink', height:'150px'}}>
                    <div className="jumbotron">
                           <h3>Users</h3>
                           <button type="submit" className="usersOnlineButton" onClick={this.handleUsersOnline}>View Users Online</button>
                           <textarea class="form-control" id="usersOnline" rows="3" value={this.state.value} ></textarea>  
                    </div>  
                  </div>
                </div>
               </div>
          <div className="container d-flex h-100">
                <div className="row align-self-center w-100">
                  <div className="col-6 mx-auto" styles={{'background-color':'pink', height:'150px'}}>
                    <div className="jumbotron">
                        <h3>Messages Received</h3>
                        <label name="labeluserMessage" className="col-form-label">Token</label>
                        <input type="text" className="form-control col-12" name="userMessageInput" id="userMessageInput" value={this.state.userMessage} onChange={this.handleUserMessage} />
                        <button type="submit" className="sendMessageButton" onClick={this.handleUserReceivedMessage}>Send</button>
                        <textarea class="form-control" id="userMessage" rows="3" value={this.state.value} onChange={this.handleReceivedMessages}></textarea>
                        
                    </div>
                  </div>
                </div>
        </div>
        <div className="container d-flex h-100">
                <div className="row align-self-center w-100">
                  <div className="col-6 mx-auto" styles={{'background-color':'pink', height:'150px'}}>
                    <div className="jumbotron">
                        <h3>Send Message</h3>
                          <div className="SenMessage">
                            <label for="SendMessageLabel">Send Message</label>
                            <textarea class="form-control" id="SendMessageLabel" rows="3" value={this.state.value} onChange={this.handleMessage}></textarea>
                            <label name="labelFrom" className="col-form-label">From</label>
                            <input type="text" className="form-control col-12" name="from" id="from" value={this.state.from} onChange={this.handleFrom} />
                            <label name="labelTo" className="col-form-label">To</label>
                            <input type="text" className="form-control col-12" name="email" id="email" value={this.state.to} onChange={this.handleTo}  />
                            <button type="submit" className="sendMessageButton" onClick={this.handleSendMessage}>Send</button>
                          </div>
                    </div>
                  </div>
                </div>
            </div>        
  
        </React.Fragment> 
     
         
   
    );
       
  }
}


export default App;
/*
<Login onLogin={this.handleLogin} email={this.state.email} password={this.state.password}/>
            <Users />
            <SendMessage />
            <Message /> */
