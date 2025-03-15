import { useState, useEffect } from "react";
import Terminal from "./Terminal";
import photo from "../../assets/photo-me-cropped.png";
import githubBlack from "../../assets/github-logo-black.png";
import githubWhite from "../../assets/github-logo-white.png";
import "./style.css";

function App() {
  const [text, setText] = useState("");
  const [githubLogo, setGithubLogo] = useState(githubBlack);
  const introText: string =
    "Hello, My name is Keiran Bunyan.\nWelcome to kloner.dev";

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
      <div id="info-div">
        <div id="photo-div">
          <img
            id="photo-of-me"
            src={photo}
            alt="Photo of me"
            title="photo-of-me"
          ></img>
        </div>
        <img
          id="github-logo"
          src={githubLogo}
          onMouseOver={() => setGithubLogo(githubWhite)}
          onMouseOut={() => setGithubLogo(githubBlack)}
          onClick={() => window.open("https://www.github.com/Klon3r")}
          alt="GitHub Logo"
          title="github-logo"
        ></img>
      </div>
      <div id="terminal-main-div">
        <div id="terminal-title-div">
          <div id="title-button-div">
            <div id="title-red-button-div"></div>
            <div id="title-yellow-button-div"></div>
            <div id="title-green-button-div"></div>
          </div>
          <div></div>
          <div id="title-div">
            <h3 id="title-text">kloner.dev</h3>
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
