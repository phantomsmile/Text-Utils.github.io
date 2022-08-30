import React, { useState } from "react";

export default function TestForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText("");
    setText(event.target.value);
    let numberOfWords = text.split(" ");
    setWords(numberOfWords.length)
  };

  const handleDownClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };

  const handleReset = () => {
    setText("");
    setWords("0");
    props.showAlert("The text box is reset","success");
  };

  const replaceText = () => {
    let promp1 = prompt("Please enter the word to be replaced", "");
    let promp2 = prompt("Please enter the word to be replaced by", "");
    let newText = text.replace(promp1, promp2);
    setText(newText);
  };
  const replaceTextAll = () => {
    let promp1 = prompt("Please enter the word to be replaced", "");
    let promp2 = prompt("Please enter the word to be replaced by", "");
    let newWord = text.replace(new RegExp(promp1, "g"), promp2);
    setText(newWord);
  };

  const reverseWords = () => {
    let reverseWordArr = text
      .split(" ")
      .map((word) => word.split("").reverse().join(""));
    reverseWordArr = reverseWordArr.join(" ");
    setText(reverseWordArr);
  };

  const handleCopy = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Text was copied to clipboard","success");
  };

  const [text, setText] = useState("");
  const [words, setWords] = useState("0");
  return (
    <>
      <div className="container" style={{color: props.mode=== 'dark'?'white':'black', height: '61.5vh'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange} style= {{backgroundColor: props.mode=== 'dark'?'grey':'white', color: props.mode=== 'dark'?'white':'black'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} style={{background: props.mode=== 'dark'?'white':'black', color: props.mode=== 'dark'?'black':'white'}}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick} style={{background: props.mode=== 'dark'?'white':'black', color: props.mode=== 'dark'?'black':'white'}}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={replaceText} style={{background: props.mode=== 'dark'?'white':'black', color: props.mode=== 'dark'?'black':'white'}}>
          Replace first occurence
        </button>
        <button className="btn btn-primary mx-2" onClick={replaceTextAll} style={{background: props.mode=== 'dark'?'white':'black', color: props.mode=== 'dark'?'black':'white'}}>
          Replace all occurences
        </button>
        <button className="btn btn-primary mx-2" onClick={reverseWords} style={{background: props.mode=== 'dark'?'white':'black', color: props.mode=== 'dark'?'black':'white'}}>
          Reverse Words
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleCopy} style={{background: props.mode=== 'dark'?'white':'black', color: props.mode=== 'dark'?'black':'white'}}>
          Copy to clipboard
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleReset} style={{background: props.mode=== 'dark'?'white':'black', color: props.mode=== 'dark'?'black':'white'}}>
          Reset
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode=== 'dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>
          {words} words and {text.length} characters and time required to read
          this will be {text.split(" ").length * 0.008} minutes
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text.trim():"Enter your text above to preview here"}</p>
      </div>
    </>
  );
}
