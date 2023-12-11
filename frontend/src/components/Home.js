import React from 'react';
import mainimg from './images/nn.jpg'
import Navbar from './navbar';
import Footer from './footer';
import './styles/Home.css'
import { useNavigate } from 'react-router-dom';
export default function Home(){

    const navigate = useNavigate();
    const toNextScreen = ()=>{
        navigate('/InputScreen');
    }
    return(
        <>
        <Navbar />
        <div id='mainHome'>
         <div className='Homeinner Homeinner1'>
            <div className='backRec'>

            </div>
            <img src={mainimg} alt="CogniDraw Logo" width="300" height="300" className='mainimg'/>
         </div>
         <div className='Homeinner Homeinner2'>
            <div className='circle1'>
             
            </div>
            <div className='hometext' >
                <h2>Automated Diagram Generation</h2>
                <p>Our cutting-edge platform automates diagram generation, 
                    empowering software developers to effortlessly communicate complex concepts, 
                    enhancing collaboration, and accelerating innovation.</p>
                <button className='homebutton' onClick={toNextScreen}>Get Started</button>
            </div>
         </div>
        </div>
        <Footer />
        </>
    )
}