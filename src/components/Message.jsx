import React, { Component } from 'react';

class Message extends Component {
    render(){
        
      return(
          <div className="container d-flex h-100">
                <div className="row align-self-center w-100">
                  <div className="col-6 mx-auto" styles={{'background-color':'pink', height:'150px'}}>
                    <div className="jumbotron">
                        <h3>Messages Received</h3>
                        Mensajes no leídos
                    </div>
                  </div>
                </div>
        </div>
      );
    }
}


export default Message;
