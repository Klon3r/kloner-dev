import { useState } from "react";

type TerminalType = {
  user: string;
  currentDir: string;
  commandList: string[];
  callbackFunction: (command: string) => void;
};

const Terminal = ({
  user,
  currentDir,
  commandList,
  callbackFunction,
}: TerminalType) => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [readOnly, setReadOnly] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setInputText(value);
  };

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const keyPressed = e.key;
    if (keyPressed === "Enter") {
      handleCommand(inputText);
    }
  };

  const handleCommand = (command: string) => {
    if (!commandList.includes(command)) {
      setOutputText(`command not found: ${command}`);
    } else {
      if (command === "help") {
        setOutputText(commandList.join(", "));
      }
    }
    callbackFunction(command);
    setReadOnly(true);
  };

  return (
    <div>
      <div>
        <span>
          {user} {currentDir}
          {" $ "}
        </span>
        <input
          type="text"
          id="terminal-input"
          className="focus:border-0 focus:outline-0"
          onChange={(e) => handleInputChange(e)}
          onKeyDown={(e) => handleInputKeyPress(e)}
          value={inputText}
          autoComplete="off"
          readOnly={readOnly}
        />
      </div>
      <span>{outputText}</span>
    </div>
  );
};

export default Terminal;
