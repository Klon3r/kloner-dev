import { useState } from "react";
import { FileSystemClass } from "./FileSytem";
import clsx from "clsx";
import { ls } from "./Commands";

type TerminalType = {
  user: string;
  currentDir: string;
  commandList: string[];
  callbackFunction: (command: string, directory: string) => void;
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

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (!readOnly) e.target.focus();
  };

  const handleCommand = (command: string) => {
    const commandSplit = command.split(" ");

    if (!commandList.includes(commandSplit[0])) {
      setOutputText(`command not found: ${command}`);
    } else {
      if (command === "help") {
        setOutputText(commandList.join(", "));
      }
      if (command === "ls") {
        ls(fileSystem, setOutputText, setOutputTextColor);
      }
    }
    callbackFunction(command, fileSystem.currentDirectory);
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
