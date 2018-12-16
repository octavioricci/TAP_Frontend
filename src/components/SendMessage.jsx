import React, { Component } from 'react';

class SendMessage extends Component {
 
    
  
    render(){
        return (
              <div className="container d-flex h-100">
                <div className="row align-self-center w-100">
                  <div className="col-6 mx-auto" styles={{'background-color':'pink', height:'150px'}}>
                    <div className="jumbotron">
                        <h3>Send Message</h3>
                          <div className="SenMessage">
                           <form name="sendMessage" onSubmit={(e) => this.props.onSendMessage(e)}>
                              To: <input type="text" className="form-control col-12" name="to" id="to" value={this.props.to} onChange={(e) => this.props.checkMessage(e)}/>
                              Message <input type="text" className="form-control col-12" name="message" id="message" value={this.props.sendMessage} onChange={(e) => this.props.checkMessage(e)} />
                              <button type="submit" className="sendMessageButton"  >Send Message</button>
                            </form>
                          </div>
                    </div>
                  </div>
                </div>
            </div>        
        );
    }
  
  
}

export default SendMessage;