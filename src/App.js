import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    
    const list = ["User","Password"];
    
    return (
     <div className="container"> 
        <div class="jumbotron">
          <div className="App">  
              <h1>Chat App</h1>
                  <h2>{ 
                      list.map( item=> {
                          return (
                            <div>
                              <table witdh="400">
                                <tr>{item}
                                  <input name="name"></input>
                                </tr>
                              </table>
                            </div>  
                          );
                      })
                  }
                </h2> 
          </div>
        </div>
     </div>
		);
  }
}

export default App;

/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
 */