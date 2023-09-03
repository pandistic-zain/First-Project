import React, { useState } from "react";

export default function TextForm(props) {
  const [Text, setText] = useState("Enter Text Here");
  const handleUpClick = () => {
    console.log("Submit Up Button Was Clicked" + Text);
    let newText = Text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    console.log("Submit Low Button Was Clicked" + Text);
    let newText = Text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    console.log("Submit Clear Button Was Clicked" + Text);
    let newText = "";
    setText(newText);
  };
  const handleESpacesClick = () => {
    console.log("Submit E-Space Button Was Clicked" + Text);
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleCopyClick = () => {
    console.log("Submit Copy Button Was Clicked" + Text);
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  };
  const [weight, setStyle] = useState({ fontWeight:"normal" });
  const handleBoldTextClick = () => {
    if (weight.fontWeight === "normal") 
    setStyle({ fontWeight: "bold" });
    else if (weight.fontWeight === "bold") 
    setStyle({ fontWeight: "normal" });
  };

  const handleOnChange = (event) => {
    console.log("OnChange");
    setText(event.target.value);
  };

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

        <button
          className="btn btn-outline-info mx-2"
          onClick={handleUpClick}
          type="submit"
        >
          {" "}
          Convert to UpperCase
        </button>
        <button
          className="btn btn-outline-info mx-2"
          onClick={handleLoClick}
          type="submit"
        >
          {" "}
          Convert to lowerCase
        </button>
        <button
          className="btn btn-outline-danger mx-2"
          onClick={handleClearClick}
          type="submit"
        >
          {" "}
          Clear Text
        </button>
        <button
          className="btn btn-outline-info mx-2"
          onClick={handleCopyClick}
          type="submit"
        >
          {" "}
          Copy Text
        </button>
        <button
          className="btn btn-outline-info mx-2"
          onClick={handleESpacesClick}
          type="submit"
        >
          Extra Spaces
        </button>
        <button
          className="btn btn-outline-info mx-2"
          onClick={handleBoldTextClick}
          type="submit"
        >
          Bold Text
        </button>
      </div>

      <div className="container my-3">
        <h1>Your text Summary</h1>
        <p>
          {Text.split(" ").length} Words And {Text.length} Characters
        </p>
        <h3>Preview of Text</h3>
        <p>{Text}</p>
        <p>{0.008 * Text.split(" ").length} Minutes to read.</p>
      </div>
    </>
  );
}
