import React from 'react';
import './styles/Signup.css';
import mainlogo from "../components/images/logomain.png";
import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();

  const handleSubmit = (event) => {
      event.preventDefault();
      
      axios.post( 'http://127.0.0.1:3001/signup', formData)
      .then(result => {
          console.log(result);
          if(result.data === "Already registered"){
              alert("E-mail already registered! Please Login to proceed.");
              navigate('/login');
          }
          else{
              alert("Registered successfully! Please Login to proceed.")
              navigate('/login');
          }
          
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='MainBody'>
    <div className='logo'>
      
    <img src={mainlogo} alt="CogniDraw Logo" width="388" height="180"/>
    </div>
    <div className="signup-form">
    <div className='circle' ></div>
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleSubmit} action="#" method="post">
        <div className="input-field">
          <label htmlFor="username" className="input-label">Username</label>
          <input type="text" id="username" className="input" 
            onChange={handleInputChange}/>
        </div>
        <div className="input-field">
          <label htmlFor="email" className="input-label">Email</label>
          <input type="email" id="email" className="input" />
        </div>
        <div className="input-field">
          <label htmlFor="password" className="input-label">Password</label>
          <input type="password" id="password" className="input" 
            onChange={handleInputChange}/>
        </div>
        <div className="input-field">
          <label htmlFor="confirm-password" className="input-label">Confirm Password</label>
          <input type="password" id="confirm-password" className="input" 
            onChange={handleInputChange}/>
        </div>
        <button type="submit" className="submit-button" >Sign Up</button>
      </form>

      <div className='triangle'></div>
    </div>
    </div>
  );
};

