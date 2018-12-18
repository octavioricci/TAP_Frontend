import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter , Link, Switch } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Principal from "./components/Principal";
import NavBar from "./components/NavBar";
import Message from "./components/Message";
import SendMessage from "./components/SendMessage";
import Users from "./components/Users";
import Register from "./components/Register";
import logo from './logo.svg';
import './App.css';




class App2 extends Component {
  
  constructor(props){
    super(props);
      this.state = {
        
        email:"",
        password:"",
        formErrors: {email:'',password:''},
        messages: [{from:'', message:''}],
        emailValid: false,
        passwordValid: false,
        formValid:false,
        userOnline: {email:'',token:''},
        from: '',
        to:[],
        message:'',
        userMessage:'',
        receivedMessages:[],
        sendMessage:[],
        onlineUsers:[],
        isLogged:false,
        loginPage:false,
        registerPage:false
     
      }
  }
  
  
  componentDidMount(){
    this.setState({loginPage:true});
    //this.props.history.push('/Login');
  } 
  
       // Valido el input del login
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
  
  setMessage = (e) =>{
    
        const name = e.target.name;
        const value = e.target.value;
        
        
        this.setState(
          {[name]: value});
   }

  handleAccessRegister = () => {
    this.setState({loginPage:false,registerPage:true});
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
          .then(response => response.json())
            .then(text => {
              const userOnline = {...this.state.userOnline};
              userOnline.email = this.state.email;
              userOnline.token = text.token;
              this.setState({userOnline});
              this.setState({isLogged:true});
              this.setState({loginPage:false});
              //this.props.history.push('/Message');
              //this.props.history.push('/Users');
              this.handleUserReceivedMessage();
              this.handleUsersOnline();
              
              
        })
        .catch(error => {
          console.log(error);
        });
      
               
     }
    }
  
  
  
      // Api Mensajes recibidos
      handleSendMessage = (e) =>{
       
             
        e.preventDefault();
         var data = {
          'from': this.state.email,
          'to': this.state.to,
          'message': this.state.message
        } 



         console.log(JSON.stringify(data));
         fetch('https://tap-octavioricci820054.codeanyapp.com/api/messages',{
                     method: 'POST',
                     headers: {'Accept': 'application/json',
                               'Content-Type': 'application/json',
                               'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                               'Authorization': this.state.userOnline.token
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
                   
        }
  
  
        handleUserReceivedMessage = () => {
          
            
            const token = this.state.userOnline.token;
           
            fetch('https://tap-octavioricci820054.codeanyapp.com/api/mymessages',{
                 method: 'GET',
                 headers: {'Accept': 'application/json','Content-Type': 'application/json','Authorization':token},
                  })
                    .then((response)=>response.json())
                      .then((responseText) => {
                          console.log(responseText);
                          this.setState({receivedMessages:responseText.message});
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
                    .then((response)=>response.json())
                      .then((responseText) => {
                          //const data = JSON.stringify(responseText);
                          this.setState({onlineUsers:responseText});
                          this.props.history.push('/users')
                         
                    })
                    .catch((error)=>{
                        alert(error);
                    });
          
            
          }
        
    
  
  
  render() {
       
        let lPage,mess,us,sMess,register = null;
        if(this.state.loginPage === true){
          lPage=<Login onAccess={this.handleAccess} fieldChecker={this.loginHandle} validateSubmit={this.state.formValid} email={this.state.email} password={this.state.password} onRegister={this.handleAccessRegister}/> 
        }
        else if(this.state.loginPage===false && this.state.registerPage===true){
          register=<Register />
        }
          
        if(this.state.isLogged){
          mess=<Message newMessages={this.handleUserReceivedMessage} messages={this.state.receivedMessages} />
          us= <Users usersOnline={this.handleUsersOnline} users={this.state.onlineUsers} /> 
          sMess = <SendMessage onSendMessage={this.handleSendMessage} checkMessage={this.setMessage}/>
        }
    return (      
      
        <React.Fragment>
            
      {/*<Route path="/Login" render={() => <Login onAccess={this.handleAccess} fieldChecker={this.loginHandle} validateSubmit={this.state.formValid} email={this.state.email} password={this.state.password} /> } /> */}
            
              <div>
                 {lPage}
                 {mess}
                 {us}
                 {sMess}
                 {register}
              </div>
            
           
        </React.Fragment> 
     
    );
       
  }
}


export default withRouter(App2);