import React from 'react';
import './login.css'
import { Link } from 'react-router-dom';

function Login() {
    return (
      <div className="login">
        <div className="login-body">
            <div> Login </div> 
            <input placeholder={"Username"} className="username" type="text"/>
            <input placeholder={"Password"} className="password" type="password" />
            <Link to="../App"> Link </Link>
            <div>
                Don't have an account,
                <button className="login-button"> Sign Up </button>
            </div>
        </div>
      </div>
    );
  }
  
  export default Login;