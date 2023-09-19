import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/Texts";
import About from "./Components/About";
import Alert from "./Components/Alert";
import React, { useState } from 'react'

function App() {
  const[mode, setMode] = useState('light');
  const[alert,setAlert] = useState('null');
  const showAlert=(message,type)=>{
    setAlert(
      {
        msg :message,
        type: type
      }
    )

  }
  const ToggleMode=()=>{
    if(mode==='dark')
    {
    setMode( 'light'); 
    document.body.style.backgroundColor='white';
    showAlert("The Light Mode Has been Enabled", "success");
    }
    else
    {
    setMode( 'dark'); 
    document.body.style.backgroundColor='#0B1A4F';
    showAlert("The Dark Mode Has been Enabled", "success");
    }
}
  return (
    <>
      <Navbar title="Fitness Zone" mode={mode} ToggleMode={ToggleMode} />
      <Alert/>
      <div className = "container my-3"> 
      <TextForm heading="Enter Text to Analyse" mode={mode}/>
     <About mode={mode} ToggleMode={ToggleMode}/>
      </div>
      
    </>
  );
}

export default App;
