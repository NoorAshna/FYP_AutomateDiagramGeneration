import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Signup from './components/signup';
import InputScreen from './components/InputScreen';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import DiagramType from './components/DiagramType';
import OutPutScreen from './components/OutPutScreen';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
   <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/" element={<Home/>}/>
        <Route path="/InputScreen" element={<InputScreen />}/>
        <Route path="/DiagramType" element={<DiagramType />}/>
        <Route path="/OutPutScreen" element={<OutPutScreen />}/>
      </Routes>
    </Router>  
   
  </React.StrictMode>
);

reportWebVitals();
