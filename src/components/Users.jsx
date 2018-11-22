import React, {Component} from 'react';

class Users extends Component {
     
   constructor(props){
     super(props);
      this.state ={
        items: [],
        isLoaded: false
     }
     
   }
    
   componentDidMount(){
     
     fetch('https://tap-octavioricci820054.codeanyapp.com/api/users', {mode: 'cors'})
      .then(res => res.json())
      .then(users => {
        this.setState({
          isLoaded:true,
          items: users,
        }) 
      });
    
   }
  
  
  render() {
        
        var { items,isLoaded} = this.state;
      
        if(!isLoaded){
          return <div>Loading users...</div>;
        }
      
        else{
            return(
            
            <React.Fragment>
              <div className="container d-flex h-100">
                <div className="row align-self-center w-100">
                  <div className="col-6 mx-auto" styles={{'background-color':'pink', height:'150px'}}>
                    <div className="jumbotron">
                           <h3>Users</h3>
                              <ul>
                                {items.map(item => (
                                  <li key={item.id}>
                                    Name:{item.name} | Email:{item.email}
                                  </li>
                                ))}
                              </ul>
                    </div>  
                  </div>
                </div>
               </div>
            </React.Fragment>
            ); 
       }
  }
 }
  
export default Users;