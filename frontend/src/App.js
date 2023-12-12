import React, { useState } from "react";
import Home from "./components/Home";
import {  Routes , Route } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import InputScreen from "./components/InputScreen";
import DiagramType from "./components/DiagramType";
import OutPutScreen from "./components/OutPutScreen";

export default function App(){
    const [logged , setlogged] = useState(false);
    console.log(logged);
    return(

    
      <Routes>
        <Route path="/login" element={<Login setlogged={setlogged}/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/" element={<Home  logged={logged}/>}/>
         <Route path="/InputScreen" element={<InputScreen logged={logged} />}/>
         <Route path="/DiagramType" element={<DiagramType logged={logged}/>}/>
         <Route path="/OutPutScreen" element={<OutPutScreen logged={logged}/>}/>
      </Routes>
     
    )
}
