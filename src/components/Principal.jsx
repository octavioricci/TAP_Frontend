import React, {Component} from 'react';
import Users from './Users';
import Message from './Message';
import SendMessage from './SendMessage'; 

class Principal extends Component {
  
  constructor(props){
    super(props);
    
  }
 
  handleSendMessage = () => {
    console.log("Handle Send message");
  }
  
  render(){
    
        return (
          <React.Fragment>
            <div className="jumbotron">
              <div className="container">
                      <h2>Chat Dashboard</h2>
                      <div className="row">
                         <Users />
                         <hr/>
                         <Message />
                         <hr/>
                         <SendMessage onSendMessage={this.handleSendMessage}  />    
                      </div>
                </div>
             </div>
           </React.Fragment>
         ); 
    
    }
}

export default Principal;

