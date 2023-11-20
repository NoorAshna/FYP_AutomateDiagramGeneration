import React from 'react';
import './styles/Navbar.css'
import logo from '../components/images/logomain.png';
import menu from '../components/images/menu-50.png';
import facebook from '../components/images/facebook-50.png';
import twitter from '../components/images/twitter-50.png';

export default function navbar(){
    return(
        <div id='mainNav'>
          <div>
          <img src={logo} alt="CogniDraw Logo" width="80" height="35" className='imglogo'/>
          </div>
          <div>
          <img src={menu} alt="CogniDraw Logo" width="30" height="30" className='imgsocial'/>
          <img src={twitter} alt="CogniDraw Logo" width="30" height="30" className='imgsocial'/>
          <img src={facebook} alt="CogniDraw Logo" width="30" height="30" className='imgsocial'/>
          </div>
        </div>
    )
}