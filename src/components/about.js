/*import React, {  useState } from 'react'
 
 
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
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="card-link">Card link</a>
    <a href="/" className="card-link">Another link</a>
  </div>
  </div>
  <button type="button" onClick={togglestyle}  className="btn btn-primary">{btntext}</button>
  </div>
    
  )
}*/



