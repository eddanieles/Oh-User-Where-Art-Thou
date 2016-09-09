import React, { Component } from 'react';
import { Link } from 'react-router';
import base from '../config/base';

class Login extends Component{
  constructor(props){
    super(props);
    this.login = this.login.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  login(event){
    event.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    base.authWithPassword({
      email, password
    }, this.handleLogin);
  }
  handleLogin(error, authData){
    event.preventDefault();
    console.log('error: ', error)
    console.log('authData: ', authData);
    this.props.setCurrentUser(authData);
  }
  render(){
    return(
      <form onSubmit={this.login}>
        <h3>Login Page</h3>
        <input type="text" ref="email" placeholder="Email Address"/>
        <input type="password" ref="password" placeholder="Password" />
        <button type="submit">Login</button>
        <p>New User?
          <Link to="/newUser"> Create Your Account</Link>
        </p>
      </form>
    )
  }
}

export default Login
