import SlowType from "./useSlowType";
import { useState } from "react";

function Terminal() {
  const [commandInput, setCommandInput] = useState("");
  const [output, setOutput] = useState("");

  // Custom hook usage
  const lines = SlowType(output, 10);

  function changeInput(e: string) {
    setCommandInput(e);
  }

  function checkKeyPress(key: string) {
    if (key === "Enter") {
      commandCheck(commandInput);
      setCommandInput("");
    }
  }

  function commandCheck(value: string) {
    console.log("You typed", value);
    value = value.toLowerCase();

    switch (value) {
      case "help":
        setOutput("List of Commands: clear, email\n");
        break;
      case "clear":
        setOutput("clear");
        break;
      case "email":
        setOutput("bunyan.keiran (at) gmail.com\n");
        break;
      default:
        setOutput(`Unknown command: ${value}\n`);
    }
  }

  return (
    <>
      <div id="command-div">Type 'help' for a list of commands</div>
      <div id="terminal-body">
        {lines.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
      <div id="terminal-input-div">
        <p id="prompt">{"> "} </p>
        <input
          onChange={(e) => changeInput(e.target.value)}
          value={commandInput}
          onKeyDown={(e) => checkKeyPress(e.key)}
        />
      </div>
    </>
  );
}

export default Terminal;
