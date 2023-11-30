import { useEffect, useState } from 'react';
import './App.css';
//import { BrowserRouter as Router,
 // Route,Link, Routes, BrowserRouter} from "react-router-dom";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/about';
import Alert from './components/alert';


function App() {
  const [mode,setmode]=useState('light')
  const [alert,setAlert]=useState('');
  const showalert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
   setAlert("null");
  },3000)
  }
  
  const togglemode=()=>{
    if(mode==='light'){
    setmode('dark')
    document.body.style.backgroundColor='#042743';
    showalert("Dark mode has been enabled successfully","success");
    document.title='TExtUtils -Dark mode'
  }
  else{
    setmode('light')
    document.body.style.backgroundColor='white';
    showalert("Light mode has been enabled successfully ","success")
    document.title='TExtUtils -Light mode'
  }
}
  return (
  <>
  
  <Navbar title="TextUtiles" mode={mode} togglemode={togglemode}/>
  <Alert alert={alert}/>
   
     <TextForm showalert={showalert} heading="Enter the text to anaylyze" mode={mode} />
  
   

  
 
</>
 );
}


export default App;
