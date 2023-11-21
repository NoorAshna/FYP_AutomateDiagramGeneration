import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Signup from './components/signup';
import Navbar from './components/navbar';
import Footer from './components/footer';
import InputScreen from './components/InputScreen';
import Home from './components/Home';
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
    {/* <Login />
    
      < Signup />  */}
    < InputScreen />
  </React.StrictMode>
);

reportWebVitals();
