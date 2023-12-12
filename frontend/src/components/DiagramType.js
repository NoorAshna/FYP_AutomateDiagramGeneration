import React from 'react';
import './styles/DiagramType.css';
import Navbar from './navbar';
import { Navigate,useNavigate } from 'react-router-dom';

export default function DiagramType({logged}){
    const navigate = useNavigate();
    if(!logged){
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
                    <div className='select'><h3>Class Diagram</h3>
                    <p>Click the view buttom below to generate the Class Diagram for your input</p>
                    </div>
                    <button className='viewbtn' onClick={toNextScreen}>View</button>
                </div>
                <div className='items'>
                    <div className='select'><h3>SSD</h3>
                    <p>Click the view buttom below to generate the System Sequence Diagram for your input</p>
                    </div>
                    <button className='viewbtn' onClick={toNextScreen}>view</button>
                </div>
                <div className='items'>
                    <div className='select'><h3>UseCase Diagram</h3>
                    <p>Click the view buttom below to generate the UseCase Diagram for your input</p>
                    </div>
                    <button className='viewbtn' onClick={toNextScreen}>View</button>
                </div>
            </div>
        </div>
        
        </>
    )
}