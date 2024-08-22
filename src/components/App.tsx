import { useState, useEffect } from "react";
import Terminal from "./Terminal";

function App() {
  const [text, setText] = useState("");
  const introText: string =
    "Hello, my name is Keiran Bunyan. I am a passionate web developer who loves programming and problem-solving. I thrive on the challenge of turning problems into elegant, functional solutions";

  const updateText = () => {
    for (let i = 0; i < introText.length; i++) {
      setTimeout(() => {
        setText((prevText) => prevText + introText.charAt(i));
      }, i * 10);
    }
  };

  useEffect(updateText, []);

  return (
    <>
      <div id="terminal-main-div">
        <div id="terminal-title-div">
          <div id="title-button-div">
            <div id="title-red-button-div"></div>
            <div id="title-yellow-button-div"></div>
            <div id="title-green-button-div"></div>
          </div>
          <div></div>
          <div id="title-div">
            <h3 id="title-text">Kloner.dev</h3>
          </div>
          <div></div>
          <div></div>
        </div>
        <div id="terminal-body-div">
          <div id="terminal-body">{text}</div>
          <Terminal />
        </div>
      </div>
    </>
  );
}

export default App;
