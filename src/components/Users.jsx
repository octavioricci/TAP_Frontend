import React, {Component} from 'react';

class Users extends Component {
    
  render() {
    
      return (
          <React.Fragment>
            <div className="col-md-4" styles={{'background-color':'pink', height:'150px'}}>
                       <h3>First Column</h3>
                        Usuarios
            </div>
          </React.Fragment>
       ); 
   
    }
}

export default Users;