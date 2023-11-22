import React from 'react';
import './styles/Signup.css';
import mainlogo from "../components/images/logomain.png";
import  { useState } from 'react';

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:3001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        const data = await response.json();
        console.log(data);
      } else {
        const errorData = await response.json();
        console.error(errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className='MainBody'>
    <div className='logo'>
      
    <img src={mainlogo} alt="CogniDraw Logo" width="388" height="180"/>
    </div>
    <div className="signup-form">
    <div className='circle' ></div>
      <h2 className="form-title">Sign Up</h2>
      <form action="#" method="post">
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
        <button type="submit" className="submit-button" onSubmit={handleSubmit}>Sign Up</button>
      </form>

      <div className='triangle'></div>
    </div>
    </div>
  );
};
