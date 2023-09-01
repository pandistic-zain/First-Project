import React,{ useState } from "react"; 

export default function TextForm(props) {
  const [Text, setText] = useState('Enter Text Here');
  const handleUpClick = ()=>{
    console.log("Submit Up Button Was Clicked" + Text)
    let newText = Text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = ()=>{
    console.log("Submit Low Button Was Clicked" + Text)
    let newText = Text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = (event)=>{
    console.log("OnChange")
    setText(event.target.value);
  }


    return (
      <>
    <div className="container">
    <h1>{props.heading}</h1>
  
    <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
           TextArea
        </label>
        <textarea
          className="form-control"
          value={Text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
        </div>
        
        <button className="btn btn-Primary"onClick={handleUpClick}> Convert to UpperCase</button>
        <button className="btn btn-Primary"onClick={handleLoClick}> Convert to lowerCase</button>
    
    </div>

    <div className="container my-3">
    <h1>Your text Summary</h1>
    <p>{Text.split("").length} Words And {Text.length} Characters</p>
    <p>Preview of Text</p>
    <p>{Text}</p>
    <p>{0.008*Text.split("").length} Minutes to read.</p>

    </div>
    </>
  );
}
