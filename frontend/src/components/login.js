import React from 'react';
import './styles/login.css'
import mainlogo from "../components/images/logomain.png";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import  { useState } from 'react';



export default function Login( {setlogged}) {

  const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  const navigate = useNavigate();

  

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.post( 'http://127.0.0.1:3001/login', {email , password})
    .then(result => {
        console.log(result);
        
            alert("login successfully! .")
            navigate('/');
            setlogged(true);  
    })
    .catch(err => console.log(err));
}

  return (
    <div className='MainBody'>
    <div className='logo'>
      
    <img src={mainlogo} alt="CogniDraw Logo" width="388" height="180"/>
    </div>
    <div className="signup-form">
    <div className='circle2' ></div>
      <h2 className="form-title">Log in </h2>
      <form onSubmit={handleSubmit} action="#" method="post">
        <div className="input-field">
          <label htmlFor="username" className="input-label">User Email</label>
          <input type="email" id="username" className="input" 
          onChange={(event) => setEmail(event.target.value)}/>
        </div>
       
        <div className="input-field">
          <label htmlFor="password" className="input-label">Password</label>
          <input type="password" id="password" className="input" 
          onChange={(event) => setPassword(event.target.value)}/>
        </div>
      
        <button type="submit" className="submit-button">Login </button>
        
        <div className='forgetpass'>

          <Link to='/signup'>Sign up</Link>
        
        </div>
      </form>

      <div className='triangle2'></div>
    </div>
    </div>
  );
};

