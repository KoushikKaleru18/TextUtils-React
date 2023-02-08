import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpperCase = () => {
    setText(text.trim().toUpperCase());
  }

  const handleLowerCase = () => {
    setText(text.trim().toLowerCase())
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
    <div className="container my-4">
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" placeholder="Enter your text here"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      {/* uppercase */}
      <button className="btn btn-primary mx-1"
        onClick={handleUpperCase}
      > Convert to Uppercase </button>
      {/* lowercase */}
      <button className="btn btn-primary mx-1"
        onClick={handleLowerCase}
      > Convert to Lowercase </button>
    </div>

    <div className="container my-4">
        <h4>Text summary</h4>
        <p>This text contains: {text.split(" ").length} words and {text.length} letters</p>
        <p>{text.split(" ").length * 0.008} minutes read</p>
    </div>
    </>
  );
}


export default TextForm;