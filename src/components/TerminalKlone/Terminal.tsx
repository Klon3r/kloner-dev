import { useEffect, useState } from "react";
import { FileSystemClass } from "./FileSytem";
import clsx from "clsx";

type TerminalType = {
  user: string;
  currentDir: string;
  commandList: string[];
  callbackFunction: (command: string) => void;
  fileSystem: FileSystemClass;
};

const Terminal = ({
  user,
  currentDir,
  commandList,
  callbackFunction,
  fileSystem,
}: TerminalType) => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [outputTextColor, setOutputTextColor] = useState(false);
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
      if (command === "ls") {
        const listOfDirectories = fileSystem.listOfCurrentDirectory;
        setOutputTextColor(true);
        setOutputText(listOfDirectories.join(" "));
      }
    }
    callbackFunction(command);
    setReadOnly(true);
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (!readOnly) e.target.focus();
  };

  useEffect(() => {}, []);

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
          autoFocus={!readOnly}
          onBlur={(e) => handleOnBlur(e)}
        />
      </div>
      <span className={clsx(outputTextColor ? "text-primary" : "")}>
        {outputText}
      </span>
    </div>
  );
};

export default Terminal;
