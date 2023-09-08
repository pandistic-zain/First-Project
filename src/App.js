import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/Texts";
import About from "./Components/About";
import React, { useState } from 'react'

function App() {
  const[mode, setMode] = useState('light');
  const ToggleMode=()=>{
    if(mode==='dark')
    {
    setMode( 'light'); 
    document.body.style.backgroundColor='white';
    }
    else
    {
    setMode( 'dark'); 
    document.body.style.backgroundColor='#0B1A4F';
    }
}
  return (
    <>
      <Navbar title="Fitness Zone" mode={mode} ToggleMode={ToggleMode} />
      
      <div className = "container my-3">
      <TextForm heading="Enter Text to Analyse" mode={mode}/>
     <About mode={mode} ToggleMode={ToggleMode}/>
      </div>
      
    </>
  );
}

export default App;
