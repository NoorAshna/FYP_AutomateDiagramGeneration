import React from 'react';
import './login.css';
import mainlogo from "../components/images/logomain.png";
export default function Login() {
  return (
    <div className='MainBody'>
    <div className='logo'>
      
    <img src={mainlogo} alt="CogniDraw Logo" width="388" height="180"/>
    </div>
    <div className="signup-form">
    <div className='circle' ></div>
      <h2 className="form-title">Log in </h2>
      <form action="#" method="post">
        <div className="input-field">
          <label htmlFor="username" className="input-label">Username</label>
          <input type="text" id="username" className="input" />
        </div>
       
        <div className="input-field">
          <label htmlFor="password" className="input-label">Password</label>
          <input type="password" id="password" className="input" />
        </div>
      
        <button type="submit" className="submit-button">Sign Up</button>
        <div className='forgetpass'>
        <a src="">forget password?</a>
        </div>
      </form>

      <div className='triangle'></div>
    </div>
    </div>
  );
};

