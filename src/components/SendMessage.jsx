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
              <div className="container d-flex h-100">
                <div className="row align-self-center w-100">
                  <div className="col-6 mx-auto" styles={{'background-color':'pink', height:'150px'}}>
                    <div className="jumbotron">
                        <h3>Send Message</h3>
                          <div className="SenMessage">
                            <label for="SendMessageLabel">Send Message</label>
                            <textarea class="form-control" id="SendMessageLabel" rows="3" value={this.state.value} onChange={this.handleMessage}></textarea>
                            <button type="submit" className="sendMessageButton" onClick={() =>(this.props.onSendMessage(this.state.message))}>Send</button>
                          </div>
                    </div>
                  </div>
                </div>
            </div>        
        );
    }
  
  
}

export default SendMessage;