
import Home from "./components/Home";
import {  Routes , Route } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import InputScreen from "./components/InputScreen";
import DiagramType from "./components/DiagramType";
import OutPutScreen from "./components/OutPutScreen";
import OutPutPsuedocode from "./components/OutPutPsuedocode";
import Navbar from "./components/navbar";
import History from "./components/History";
import { AuthProvider } from './components/SharedStateContext';
import React, { createContext, useContext, useState } from 'react';

const SharedStateContext = createContext();

export default function App(){
    const [logged , setlogged] = useState(true);
    console.log(logged);
    return(

      <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login setlogged={setlogged}/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/" element={<Home  logged={logged}/>}/>
         <Route path="/InputScreen" element={<InputScreen logged={logged} />}/>
         <Route path="/DiagramType" element={<DiagramType logged={logged}/>}/>
         <Route path="/OutPutScreen" element={<OutPutScreen logged={logged}/>}/>
         <Route path="/OutPutPsuedocode" element={<OutPutPsuedocode logged={logged}/>}/>
         <Route path="/History" element={<History logged={logged}/>}/>
         <Route element={<Navbar />} />
      </Routes>
      </AuthProvider>
    )
}
