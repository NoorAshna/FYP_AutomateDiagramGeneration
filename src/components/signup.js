import React from 'react';
import './Signup.css';
import mainlogo from "../components/images/logomain.png";
export default function Signup() {
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
          <input type="text" id="username" className="input" />
        </div>
        <div className="input-field">
          <label htmlFor="email" className="input-label">Email</label>
          <input type="email" id="email" className="input" />
        </div>
        <div className="input-field">
          <label htmlFor="password" className="input-label">Password</label>
          <input type="password" id="password" className="input" />
        </div>
        <div className="input-field">
          <label htmlFor="confirm-password" className="input-label">Confirm Password</label>
          <input type="password" id="confirm-password" className="input" />
        </div>
        <button type="submit" className="submit-button">Sign Up</button>
      </form>

      <div className='triangle'></div>
    </div>
    </div>
  );
};

