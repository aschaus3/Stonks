import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import App from '../App';
import './Trade.css'
import Coin from '../Api/Coin'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { useLocation } from 'react-router-dom'


function Trade() {
    const location = useLocation()
    const { from } = location.state

    return (
      <div className="login">
        <div className="login-body">
            
            <div> TradePage </div>
            <div>{from}</div> 
            
        </div>
      </div>
    );
  }
  

export default Trade;