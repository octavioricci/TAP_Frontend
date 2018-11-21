import React, { Component } from 'react';

class SendMessage extends Component {
   
    constructor(props){
      super(props);
        this.state = {  
          message:''
        }
      }
    
  
    handleMessage = (e) => {
      this.setState({message:e.target.value});
      let message = this.state.message;
      
    }
    
    
    
  
    render(){
        return (
              <div className="col-md-4" styles={{'background-color':'orange', height:'150px'}}>
                  <h3>Send Message</h3>
                  <div className="SenMessage">
                    <label for="SendMessageLabel">Send Message</label>
                    <textarea class="form-control" id="SendMessageLabel" rows="3" value={this.state.value} onChange={this.handleMessage}></textarea>
                    <button type="submit" className="sendMessageButton" onClick={() =>(this.props.onSendMessage(this.state.message))}>Send</button>
                  </div>
              </div>
        
        );
    }
  
  
}

export default SendMessage;