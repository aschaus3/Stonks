import React, { Component } from 'react';
import './signUp.css';

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
    // fetch('http://localhost:5000/add-user', {
    fetch('/add-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data
    })
      .then(response => response.json())
      .then(function(body) {
        console.log(body);
      })
      .catch((err) => {
        throw err;
      });
  }

  testBackend = () => {
    console.log('method called');
    fetch('/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      }).catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="login">
      <div classname="form">
      <form onSubmit={this.onSubmit}>
        <div>
        <button onClick={() => this.testBackend()}>test</button>
        </div>
        <div className = "entry">
        <pre>
          Username: &nbsp; <input id="usr" type="text" ref={this.usrName} className="username"/><br></br>
          Password: &nbsp; <input type="text" ref={this.pass} className="password"/>
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
