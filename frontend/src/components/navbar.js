import React from 'react';
import './styles/Navbar.css'
import logo from '../components/images/logomain.png';
import menu from '../components/images/menu-50.png';
import facebook from '../components/images/facebook-50.png';
import twitter from '../components/images/twitter-50.png';
import login from '../components/images/login.png'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function navbar(){
 
    return(
        <div id='mainNav'>
          <div>
         <Link to='/'>
          <img src={logo} alt="CogniDraw Logo" width="90" height="40" className='imglogo'/>
          </Link>
          </div>
          <div>
          <img src={menu} alt="menu" width="30" height="30" className='imgsocial'/>
          <img src={twitter} alt="twitter" width="30" height="30" className='imgsocial'/>
          <img src={facebook} alt="facebook" width="30" height="30" className='imgsocial'/>
          <Link to='/login' > 
          <img src={login} alt="facebook" width="30" height="30" className='imgsocial'/>
          </Link>
          
          </div>
        </div>
    )
}