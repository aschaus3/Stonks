import React, { Component } from 'react';
import axios from 'axios';
import './signUp.css';

const URL = 'http://localhost:5000';

class SignUp extends Component
{
  constructor() {
    super();
    this.usrName = React.createRef();
    this.pass = React.createRef();
    this.state = { user: '' };
    this.onSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e)
  {
    e.preventDefault();
    const data = new FormData(e.target);

    axios.post(URL + '/add-user', data);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input id="usr" type="text" placeholder="username" ref={this.usrName}/>
        <input type="text" placeholder="password" ref={this.pass}/>
        <input type="submit" />
      </form>
    );
  }
}


export default SignUp;
