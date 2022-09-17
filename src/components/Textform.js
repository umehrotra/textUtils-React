import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState('');
    
    const handleUpClick=()=>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }

    const handleLoClick=()=>{
        // console.log("Lower case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }

    const handleClearText=()=>{
        let newText = ('');
        setText(newText);
        props.showAlert("Text cleared","success");
    }

    const handleReverseText=()=>{
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.showAlert("Reversed text","success");
    }

    const handleCopy=()=>{
        var text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!","success");
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed","success");
    }

    const handleOnChange=(event)=>{
        // console.log("on change was clicked");
        setText(event.target.value);
    }

    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'rgb(4 47 96)':'white', color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange}  id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1"  onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 "  onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 "  onClick={handleClearText}>Clear text</button>
            <button className="btn btn-primary mx-1 "  onClick={handleReverseText}>Reverse text</button>
            <button className="btn btn-primary mx-1 "  onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-1 "  onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something in the textbox above to preview it here'}</p>
        </div>
        </>
    )
}
