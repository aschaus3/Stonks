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
            <form action="auth"> 
              <input type="text" name="username" placeholder="Username" required/>
              <input type="text" name="password" placeholder="Password" required/>
              <Link id="Login-Link" to="/App">Home</Link>
            </form>
            <input placeholder={"Username"} className="username" type="text"/>
            <input placeholder={"Password"} className="password" type="password" />
            
            <div>
                Don't have an account,
                <Link id="Login-Link" to="/signUp">Sign Up</Link>
            </div>
        </div>
      </div>
    );
  }

export default Login;