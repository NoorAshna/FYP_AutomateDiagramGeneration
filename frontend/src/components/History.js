import React from 'react';
import './styles/history.css';
import Navbar from './navbar';
import { Navigate,useNavigate } from 'react-router-dom';

export default function History({logged}){
    const navigate = useNavigate();
    if(logged){
        return <Navigate to='/login'/>
    }
    const toNextScreen = ()=>{
        navigate('/OutPutScreen');
    }
    return(
        <>
        <Navbar />
        <div id='mainDiagram'>
            <div className='mainContent'>
                <div className='items'>
                    <div className='selecthistory'><h3>History 1</h3>
                    <p>12th dec 2023</p>
                    </div>
                    <button className='viewbtn' onClick={toNextScreen}>View</button>
                </div>
                <div className='items'>
                    <div className='selecthistory'><h3>History 2</h3>
                    <p>12th dec 2023</p>
                    </div>
                    <button className='viewbtn' onClick={toNextScreen}>view</button>
                </div>
                <div className='items'>
                    <div className='selecthistory'><h3>History 3</h3>
                    <p>12th dec 2023</p>
                    </div>
                    <button className='viewbtn' onClick={toNextScreen}>View</button>
                </div>
            </div>
            <div className='triangle'></div>
        </div>
        
        </>
    )
}