import React from 'react';
import './styles/DiagramType.css';
import Navbar from './navbar';
import Footer from './footer';
import { useNavigate } from 'react-router-dom';

export default function DiagramType(){
    const navigate = useNavigate();
    const toNextScreen = ()=>{
        navigate('/OutPutScreen');
    }
    return(
        <>
        <Navbar />
        <div id='mainDiagram'>
            <div className='mainContent'>
                <div className='items'>
                    <div className='select'>class Diagram</div>
                    <button className='viewbtn' onClick={toNextScreen}>View</button>
                </div>
                <div className='items'>
                    <div className='select'>SSD</div>
                    <button className='viewbtn' onClick={toNextScreen}>view</button>
                </div>
                <div className='items'>
                    <div className='select'>UseCase Diagram</div>
                    <button className='viewbtn' onClick={toNextScreen}>View</button>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}