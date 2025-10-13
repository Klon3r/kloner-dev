import { useEffect, useState } from "react";
import { FileSystemClass } from "./FileSystem";
import clsx from "clsx";
import { runCommand } from "./Commands";

type TerminalType = {
  callbackFunction: (command: string) => void;
  fileSystem: FileSystemClass;
  setPrevInputList: React.Dispatch<React.SetStateAction<string[]>>;
  prevInputList: string[];
  id: number;
};

const Terminal = ({
  callbackFunction,
  fileSystem,
  setPrevInputList,
  prevInputList,
  id,
}: TerminalType) => {
  const [inputText, setInputText] = useState<string>("");
  const [outputText, setOutputText] = useState("");
  const [outputTextColor, setOutputTextColor] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [listCounter, setListCounter] = useState<number>(prevInputList.length);
  const [terminalCurrentDir] = useState(fileSystem.currentDirectory);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const checkMobileDevice = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setInputText(value);
  };

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const keyPressed = e.key;
    if (keyPressed === "Enter") {
      setPrevInputList((array) => [...array, inputText]);
      handleCommand(inputText);
    }
    if (keyPressed === "ArrowUp") {
      upArrowPrevInputList(e.target as HTMLInputElement);
    }
    if (keyPressed === "ArrowDown") {
      downArrowPrevInputList(e.target as HTMLInputElement);
    }
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (!readOnly) e.target.focus();
  };

  const handleCommand = (command: string) => {
    runCommand({ command, fileSystem, setOutputText, setOutputTextColor });
    callbackFunction(command);
    setReadOnly(true);
  };

  const upArrowPrevInputList = (e: HTMLInputElement) => {
    if (listCounter > 0) {
      const newCounter = listCounter - 1;
      setListCounter(newCounter);

      const prevInputValue = prevInputList[newCounter];
      setInputText(prevInputValue);

      // Move the cursor the end of the input
      setTimeout(() => {
        e.setSelectionRange(e.value.length, e.value.length);
      }, 0);
    }
  };

  const downArrowPrevInputList = (e: HTMLInputElement) => {
    if (listCounter < prevInputList.length - 1) {
      const newCounter = listCounter + 1;
      setListCounter(newCounter);

      const prevInputValue = prevInputList[newCounter];
      setInputText(prevInputValue);

      // Move the cursor the end of the input
      setTimeout(() => {
        e.setSelectionRange(e.value.length, e.value.length);
      }, 0);
    }
  };

  // Check for mobile
  useEffect(() => {
    window.addEventListener("resize", checkMobileDevice);
    return () => {
      window.removeEventListener("resize", checkMobileDevice);
    };
  }, []);

  console.log(isMobile);

  return (
    <div>
      <div>
        {isMobile ? (
          <span>
            {"t@k"} {terminalCurrentDir === "kloner" ? "~" : terminalCurrentDir}
            {" $ "}
          </span>
        ) : (
          <span>
            {"terminal@kloner"}{" "}
            {terminalCurrentDir === "kloner" ? "~" : terminalCurrentDir}
            {" $ "}
          </span>
        )}
        <input
          type="text"
          id={`terminal-${id}`}
          className="focus:border-0 focus:outline-0"
          onChange={(e) => handleInputChange(e)}
          onKeyDown={(e) => handleInputKeyPress(e)}
          value={inputText}
          autoComplete="off"
          readOnly={readOnly}
          autoFocus={!readOnly}
          onBlur={(e) => handleOnBlur(e)}
          autoCapitalize="none"
        />
      </div>
      <div className={clsx(outputTextColor ? "text-primary" : "")}>
        {outputText.split("\n").map((text, index) => (
          <div key={index}>{text}</div>
        ))}
      </div>
    </div>
  );
};

export default Terminal;
