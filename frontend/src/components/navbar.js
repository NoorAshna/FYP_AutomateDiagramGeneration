
import './styles/Navbar.css'
import logo from '../components/images/logomain.png';
import facebook from '../components/images/facebook-50.png';
import twitter from '../components/images/twitter-50.png';
import profile from '../components/images/profile.png'
import { Link, useNavigate } from 'react-router-dom';
import React, { createContext, useContext, useState } from 'react';
import { useAuth } from './SharedStateContext';


export default function Navbar() {

  const { logged, setlogged } = useAuth();
  const navigate = useNavigate();
  const logout = () => {
    
    navigate('/');
    setlogged(false) 
  };
  return (
    <div id='mainNav'>
      <div>
        <Link to='/'>
          <img src={logo} alt="CogniDraw Logo" width="90" height="40" className='imglogo' />
        </Link>
      </div>
      <div className='socialicons'>
        { logged ?
        
        <div className="dropdown">
        <img src={profile} alt="Profile" width="30" height="30" className='imgsocial' />
          <div className="dropdown-content">
            <a href="#">History</a>
            <a href="#">Change Password</a>
            <a  onClick={logout}>LogOut</a>
          </div>
        </div>     :<></> 
}
        <img src={twitter} alt="twitter" width="30" height="30" className='imgsocial' />
        <img src={facebook} alt="facebook" width="30" height="30" className='imgsocial' />

      </div>
    </div>
  )
}