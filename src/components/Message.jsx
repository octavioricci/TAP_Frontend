import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Message extends Component {
    
 
    render(){
        
      
      
      return(
          <div className="container d-flex h-100">
                <div className="row align-self-center w-100">
                  <div className="col-6 mx-auto" styles={{'background-color':'pink', height:'150px'}}>
                    <div className="jumbotron">
                      
                        <h3>Messages Received</h3>
                      {/*{Object.prototype.toString.call(this.props.messages)}*/}
                       
                        <ul>
                          {this.props.messages.map(message => <li key={message._id}>
                              <p className="text-success">From: {message.from}</p>
                              <p className="text-success">Message: {message.message}</p>
                              
                          </li>)}
                         
                        </ul>  
                     
                    </div>
                  </div>
                </div>
        </div>
      );
    }
}


export default Message;
