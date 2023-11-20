import React from 'react';
import logo from '../components/images/logomain.png';
import menu from '../components/images/menu-50.png';
import facebook from '../components/images/facebook-50.png';
import twitter from '../components/images/twitter-50.png';

export default function Home(){
    return(
        <div id='mainNav'>
          <div>
          <img src={logo} alt="CogniDraw Logo" width="50" height="50"/>
          </div>
          <div>
          <img src={menu} alt="CogniDraw Logo" width="50" height="50"/>
          <img src={twitter} alt="CogniDraw Logo" width="50" height="50"/>
          <img src={facebook} alt="CogniDraw Logo" width="50" height="50"/>
          </div>
        </div>
    )
}