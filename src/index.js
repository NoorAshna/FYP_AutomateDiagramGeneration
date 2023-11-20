import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Signup from './components/signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
   {/* <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/Home" element={<Home/>}/>
      </Routes>
    </Router>   */}
  //  <Login />
    //  < Signup /> 
    
  </React.StrictMode>
);

reportWebVitals();
