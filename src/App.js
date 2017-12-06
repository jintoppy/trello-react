import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />          
          <h1 className="App-title">Trello</h1>
          <ul className="menu">
            <li>
              <Link to="login">Login</Link>
            </li>
          </ul>
        </header>
        <div className="App-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
