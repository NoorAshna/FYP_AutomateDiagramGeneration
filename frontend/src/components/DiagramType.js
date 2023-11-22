import React from 'react';
import './styles/DiagramType.css';
import Navbar from './navbar';
import Footer from './footer';

export default function DiagramType(){
    return(
        <>
        <Navbar />
        <div id='mainDiagram'>
            <div className='mainContent'>
                <div className='items'>
                    <div className='select'>class Diagram</div>
                    <button className='viewbtn'>View</button>
                </div>
                <div className='items'>
                    <div className='select'>SSD</div>
                    <button className='viewbtn'>view</button>
                </div>
                <div className='items'>
                    <div className='select'>UseCase Diagram</div>
                    <button className='viewbtn'>View</button>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}