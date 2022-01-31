import { useState } from "react"
import  React from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")
    const convertUp= ()=>
    {
        // console.log("text converted to upper case")
        let newtxt=text.toUpperCase();
        console.log(newtxt)
        setText(newtxt);

    }
    const convertDown= ()=>
    {
        // console.log("text converted to upper case")
        let newtxt=text.toLowerCase();
        console.log(newtxt)
        setText(newtxt);

    }
    const changehandler= (event)=>
    {
        // console.log("text converted to upper case")
        setText(event.target.value)
    }
  const  handleclear =()=>
  {
      setText("")
  }
    return (
        <>
        <div class="container my-20">
            <h1 style={{marginTop:'40px'}}>{props.heading}</h1>
           
    <textarea className="form-control" onChange={changehandler} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} onClick={convertUp} className="btn btn-secondary mx-2">convert to upper case
        </button>
        <button disabled={text.length===0} onClick={convertDown} className="btn btn-secondary mx-2">convert to lower case
        </button>
        <button disabled={text.length===0} onClick={handleclear} className="btn btn-secondary mx-2">clear
        </button>

        <div className="container my-2">
            <h1>your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} letter</p>
            <h1>preview
                <br />
                
                {
(text)?
<p style={{fontSize:'14px'}}>{text}</p>: 
<h5>Nothing to preview</h5>



                }
            </h1>
          
            <h1>number of sentences</h1>
            <p>{text.split(".").length}</p>
            
            
        </div>
        </>
    )
}
