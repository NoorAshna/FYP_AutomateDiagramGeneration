import React from 'react';
import edit from './images/edit-24.png';
import download from './images/download-30.png';
import Navbar from './navbar';
import Footer from './footer';
export default function OutPutScreen(){

    return(
        <>
        <Navbar />
        <div className='mainOutPut'>
            <div className='innerOutPut'>
                <button className='InputButton'>Psuedocode</button>
                <img src={download} alt="download" width="30" height="30" className='imgsocial'/>
                <img src={edit} alt="edit" width="30" height="30" className='imgsocial'/>
            </div>
            <div>

            </div>
        </div>
        <Footer />
        </>
    )
}