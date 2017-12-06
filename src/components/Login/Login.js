import React, { Component } from 'react';
import './login.css';
import { browserHistory } from 'react-router'

class Login extends Component {
    constructor(props){
        super(props);
        this.authenticationSuccess = this.authenticationSuccess.bind(this);
        this.authenticationFailure = this.authenticationFailure.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    authenticationSuccess()  {
        browserHistory.push('/board');
    }
      
    authenticationFailure() {
        console.log('Failed authentication');
    }

    onClick(){
        window.Trello.authorize({
            type: 'popup',
            name: 'Getting Started Application',
            scope: {
              read: 'true',
              write: 'true' 
            },
            expiration: 'never',
            success: this.authenticationSuccess.bind(this),
            error: this.authenticationFailure.bind(this)
          });
    }
    render() {
        return (
            <button onClick={this.onClick}>Login with Trello</button>
        )
    }
}

export default Login