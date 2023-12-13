import React from 'react';
import edit from './images/edit-24.png';
import download from './images/download-30.png';
import { Navigate,useNavigate,Link } from 'react-router-dom';
import Navbar from './navbar';
import './styles/OutPutScreen.css'
export default function OutPutScreen({logged}){

    // const navigate = useNavigate();
    if(logged){
        return <Navigate to='/login'/>
    }
    return(
        <>
        <Navbar />
        <div className='mainOutPut'>
            <div className='innerOutPut'>
                <Link to='/OutputPsuedocode'>
                <button className='InputButton'>Psuedocode</button>
                </Link>
                <img src={download} alt="download" width="35" height="35" className='imgOutPut'/>
            </div>
            <div className='outputdiagram'>
            <textarea id='outputtext' rows="30" cols="100" placeholder='Out put diagrams' readOnly/>
            </div>
        </div>
        </>
    )
}