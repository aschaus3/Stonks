import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import App from '../App';
import './about.css'

function About(){
    return(
       <div className = "help">
           <div className = "home-Button">
            <Link id="Home-Link" to="/App">Home</Link>
           </div>
           <div className="help-body">
               
           </div>
       </div> 
    );
}

export default About;