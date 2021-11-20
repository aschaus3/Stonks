import React, { Component } from 'react';
import './signUp.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { render } from 'react-dom';


class SignUp extends Component
{
  constructor() {
    super();
    this.usrName = React.createRef();
    this.pass = React.createRef();
    this.state = { user: {} };
    this.onSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) 
  {
    e.preventDefault();
    fetch('http://localhost:5000/add-user', { 
        method: 'POST',
        body: {
          username: this.usrName,
          password: this.pass
        }
      })
      .then(function(response) {
        console.log(response.json());
      }).then(function(body) {
        console.log(body);
      });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input id="usr" type="text" placeholder="Username" ref={this.usrName}/>
        <input type="text" placeholder="Password" ref={this.pass}/>
        <input type="submit" />
      </form>
    );
  }

}


  export default SignUp;