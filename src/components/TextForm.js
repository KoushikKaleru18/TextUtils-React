import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpperCase = () => {
    setText(text.trim().toUpperCase());
    props.showAlert("Converted to Upper case", "success")
  };

  const handleLowerCase = () => {
    setText(text.trim().toLowerCase());
    props.showAlert("Converted to Lower case", "success")
  };

  const handleClearText = () => {
    setText("");
    props.showAlert("All Clear, Buddy", "info")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopyText = () => {
    var text = document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  }

  return (
    <>
      <div
        className="container my-4"
        style={{ color: props.mode === "light" ? "#343a40" : "white" }}
      >
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            placeholder=""
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#343a40",
              color: props.mode === "light" ? "#343a40" : "white",
            }}
            onChange={handleOnChange}
          ></textarea>
        </div>
        {/* uppercase */}
        <button className="btn btn-primary mx-1" onClick={handleUpperCase}>
          Convert to Uppercase
        </button>
        {/* lowercase */}
        <button className="btn btn-primary mx-1" onClick={handleLowerCase}>
          Convert to Lowercase
        </button>

        {/* Copy to clipboard */}
        <button className="btn btn-primary mx-1" onClick={handleCopyText}>
          Copy to Clipboard
        </button>
        {/* Clear text */}
        <button className="btn btn-danger mx-1" onClick={handleClearText}>
          Clear
        </button>
      </div>

      <div
        className="container my-4"
        style={{ color: props.mode === "light" ? "#343a40" : "white" }}
      >
        <h4>Text summary</h4>
        <p>
          This text contains: {text.split(" ").length} words and {text.length}
          letters
        </p>
        <p>{text.split(" ").length * 0.008} minutes read</p>
      </div>
    </>
  );
}

export default TextForm;
