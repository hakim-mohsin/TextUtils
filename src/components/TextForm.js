import React,{useState} from 'react'

export default function TextForm(props){
    const [text,settext] = useState('');
   
    const handleUpClick=()=>{
      settext("you have clicked");
      let newtext=text.toUpperCase();
      settext(newtext);
      props.showalert("converted to uppercase","success")

    }
    const handleloClick=()=>{
        settext("you have clicked");
        let newtext=text.toLowerCase();
        settext(newtext);
        props.showalert("converted to lowercase","success")
  
      }
      const handleclearClick=()=>{
        let newtext='';
        settext(newtext);
        props.showalert("cleared text","success")
  
      }
    const handlechange=(event)=>{
        settext(event.target.value);
      }
      const handlecopy=()=>{
        var text=document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value);
        props.showalert("copied text to clipboard","success")
      }



    
    return(
       <> 
  <div className="container" style= {{color : props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className='mb-3'>
    <label for="exampleInputEmail1">Text Box</label>
    <textarea  className="form-control" id="myBox" style={{backgroundColor: props.mode==='light'?'white':'grey',color : props.mode==='dark'?'white':'black'}} value={text} onChange={handlechange} />
    </div>
    <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
    <button className='btn btn-primary mx-2' onClick={handleloClick}>Convert to UpperCase</button>
    <button className='btn btn-primary mx-2' onClick={handleclearClick}>Clear</button>
    <button className='btn btn-primary mx-2' onClick={handlecopy}>Copy text</button>
  </div>
  <div className='container'  style= {{color : props.mode==='dark'?'white':'black'}}>
<h1>Your text Summary</h1>
<h3>your words {text.split(" ").length} and characters {text.length}</h3>
<h3>
    {0.008*text.split(" ").length}minutes to read words
</h3>
<h2>preview</h2>
<h3>{text}</h3>
  </div>
  </>
    )
}