import React from "react";
import "./App.css"; // Make sure you import the CSS file
import Background from "./components/Background";
import Button from "./components/SubmitButton";

function App() {
  return (
    <>
      <div className="navbar"></div>
      <h1 className="heading">Happy birthday Otis</h1>

      <div className="user-input">
        <p className="message">Show me some love</p>
        <input type="text"></input>
        <Button></Button>
      </div>
    </>
  );
}

export default App;
