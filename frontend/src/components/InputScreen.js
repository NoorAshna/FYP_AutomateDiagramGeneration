import React from 'react';
import './styles/InputScreen.css';
import Navbar from './navbar';
import { Navigate,useNavigate } from 'react-router-dom';

export default function InputScreen({logged}){

    const navigate = useNavigate();
    if(!logged){
        return <Navigate to='/login'/>
    }
    const toNextScreen = ()=>{
        navigate('/DiagramType');
    }
    return(
        <>
        <Navbar />
            <div className='mainInputscreen'>
                
             <div className='inputinner1'>
               <button className='newInput'>New Input</button>
               <div className='history'><h3>history 1</h3></div>
             </div>
             <div className='inputinner2'>
                <div className='generate'>
                    <textarea id='inputtext' rows="20" cols="90" placeholder='Enter text here...'/>
                    <button className='InputButton InputButton2' onClick={toNextScreen}>Generate</button>
                </div>
                <h3>OR</h3>
                <button className='InputButton'>Upload Document</button>
             </div>
             
            </div>
            
            </>
    )
}