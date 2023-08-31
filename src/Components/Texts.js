import React,{ useState } from "react"; 

export default function TextForm(props) {
  const [Text, setText] = useState('Enter Text Here');
  const handleOnChange = (event)=>{
    console.log("Submit Button Was Clicked")
    setText(event.target.value);
  }


    return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>

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
        
        <button className="btn Primary">Convert to UpperCase</button>
      </div>
    </div>
  );
}
