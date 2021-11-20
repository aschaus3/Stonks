import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import App from '../App';
import './login.css'

function Login() {
    return (
      <div className="login">
        <div className="login-body">
            <div> Login </div> 
            <input placeholder={"Username"} className="username" type="text"/>
            <input placeholder={"Password"} className="password" type="password" />
            <div>
                Don't have an account,
                <button className="login-button"> Sign Up </button>
                <Link to="/App">Home</Link>
            </div>
        </div>
      </div>
    );
  }

  export default Login;