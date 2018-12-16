import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Users extends Component {
       
  render() {
        
        return(
            
            <React.Fragment>
              <div className="container d-flex h-100">
                <div className="row align-self-center w-100">
                  <div className="col-6 mx-auto" styles={{'background-color':'pink', height:'150px'}}>
                    <div className="jumbotron">
                          <h3>Users Online</h3>
                              <ul>
                                {this.props.users.map(user => 
                                  <li key={user._id}>
                                    {user.email}
                                     
                                  </li>)}
                                                                    
                              </ul>

                      
                            
                           
                    </div>  
                  </div>
                </div>
               </div>
            </React.Fragment>
            ); 
   }
}
 
  
export default Users;

                    