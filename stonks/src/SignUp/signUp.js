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

    let data = {
      username: this.usrName.value,
      password: this.pass.value
    }

    axios.post(URL + '/add-user', data);
  }

  render() {
    return (
      <div className="login">
      <div className="form">
      <form onSubmit={this.onSubmit}>
        <div>
        <button onClick={() => this.testBackend()}>test</button>
        </div>
        <div className = "entry">
        <pre>
          Username: &nbsp; <input id="usr" type="text" ref={usr => (this.usrName = usr)} className="username"/><br></br>
          Password: &nbsp; <input type="text" ref={pass => (this.pass = pass)} className="password"/>
        </pre>
        </div>
        <div className="submit">
        <input type="submit" className="submit-button" />
        </div>
      </form>
      </div>
      </div>
    );
  }
}


export default SignUp;
