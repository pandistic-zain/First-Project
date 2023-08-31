import React from "react";

export default function TextForm(props) {
  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>

        <label htmlFor="myBox" className="form-label">
           TextArea
        </label>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
        ></textarea>
        
        <button className="btn Primary">Convert to UpperCase</button>
      </div>
    </div>
  );
}
