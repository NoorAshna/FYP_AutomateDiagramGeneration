import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Signup from './components/signup';
import Login from './components/login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
   <Login />
    < Signup />
    
  </React.StrictMode>
);

reportWebVitals();
