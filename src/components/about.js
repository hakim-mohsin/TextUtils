import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
 
 
export default function About() {
    const [myStyle,setMyStyle]=useState({
         color:'white',
        backgroundColor:'black'
     })
     const [btntext,setBtnText] = useState("Enable dark mode")
     const togglestyle=()=>{
        if(myStyle.color==='white'){
            setMyStyle({
                color:'black',
                 backgroundColor:'white'
            })
         setBtnText("Enable light mode");
        }
        else{
            setMyStyle({
                 color:'white',
               backgroundColor:'black'
                }) 
          setBtnText("Enable dark mode") ;      
        }
      } 
    
  return (
    <div className='container' style={myStyle} >
      <div className="card"  >
  <div className="card-body" >
    <h5 className="card-title">About TextUtils</h5>
    <h6 className="card-subtitle mb-2 text-muted">About Us</h6>
    <p className="card-text">This app is made for the ease for users such as copying text to clipboad and counting the no of word in a paragraph and also time taken to read the paragraph also some more functions .</p>
    <Link to="/" className="card-link">Home</Link>
    <a href="/" className="card-link"></a>
  </div>
  </div>
  <button type="button" onClick={togglestyle}  className="btn btn-primary">{btntext}</button>
  </div>
    
  )
}



