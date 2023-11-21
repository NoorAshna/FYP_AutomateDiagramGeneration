import React from 'react';
import './styles/footer.css'
import logo from '../components/images/logomain.png';
import menu from '../components/images/menu-50.png';
import facebook from '../components/images/facebook-50.png';
import twitter from '../components/images/twitter-50.png';

export default function Footer(){
    return(
        <div id='mainFooter'>
          <div className='innerFooter'>
            <ul>
                <li>Home</li>
                <li>History</li>
                <li>Logout</li>
            </ul>
          </div>
          <div className='innerFooter'>
          <ul>
                <li>Twitter</li>
                <li>facebook</li>
                <li>Contact</li>
            </ul>
          </div>
        </div>
    )
}