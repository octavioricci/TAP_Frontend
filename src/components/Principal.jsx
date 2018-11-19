import React, {Component} from 'react';
import Users from './Users';
import Message from './Message';
import SendMessage from './SendMessage'; 

class Principal extends Component {
  render(){
    
        return (
          <React.Fragment>
            <div className="jumbotron">
              <div className="container">
                      <h2>Chat Dashboard</h2>
                      <div className="row">
                         <Users />
                         <Message />
                         <SendMessage />    
                      </div>
                </div>
             </div>
           </React.Fragment>
         ); 
    
    }
}

export default Principal;

