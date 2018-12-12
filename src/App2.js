import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter , Link, Switch } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Principal from "./components/Principal";
import NavBar from "./components/NavBar";
import Message from "./components/Message";
import SendMessage from "./components/SendMessage";
import Users from "./components/Users";
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
        to:'',
        message:'',
        userMessage:'',
        receivedMessages:[],
        usersOnline:[],
        
        
     
      }
  }
  
  
  componentDidMount(){
    this.props.history.push('/Login');
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
              this.props.history.push('/Message');
              this.handleUserReceivedMessage();
              
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
  
      // Api Mensajes recibidos
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
                          this.setState({usersOnline:responseText});
                          //alert(responseText);
                         
                    })
                    .catch((error)=>{
                        alert(error);
                    });
          
            
          }
        
    
  
  
  render() {
       
    return (      
      
        <React.Fragment>
        
           
          <Switch>
          
             <Route path="/Login" render={() => <Login onAccess={this.handleAccess} fieldChecker={this.loginHandle} validateSubmit={this.state.formValid} email={this.state.email} password={this.state.password}/>}
             />
             <Route path="/Message" render={ () => <Message newMessages={this.handleUserReceivedMessage} messages={this.state.receivedMessages} /> } />
              <ul>
                {this.state.receivedMessages.map(m=> <li key={m._id}>
                                                          {m.message}
                                                      </li>)}
              </ul>
          </Switch>
        </React.Fragment> 
     
         
   
    );
       
  }
}


export default withRouter(App2);

