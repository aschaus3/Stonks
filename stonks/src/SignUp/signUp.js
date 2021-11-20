import React from 'react';
import './signUp.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { render } from 'react-dom';






function SignUp() {
    return (
      <div className="signUp">
        <div className="signUp-body">
            <div> SignUp Here </div> 
            <input placeholder={"Username"} className="username" type="text"/>
            <input placeholder={"Password"} className="password" type="password" />
            <input placeholder={"Confirm Password"} className="password" type="password" />

        </div>
        

      </div>
      
    )
    
}
  
  export default SignUp;