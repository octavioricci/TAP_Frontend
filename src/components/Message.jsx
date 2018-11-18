import React, { Component } from 'react';

class Message extends Component {
    render(){
        
      return(
          <div className="col-md-4" styles={{'background-color':'green', height:'150px'}}>
                <h3>Second Column</h3>
                Mensajes no leídos
          </div>
      );
    }
}


export default Message;
