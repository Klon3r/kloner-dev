import { FileSystemClass } from "@/components/TerminalKlone/FileSystem";
import { initialDirectories } from "@/components/TerminalKlone/initialDirectories";
import Terminal from "@/components/TerminalKlone/Terminal";
import { useRef, useState } from "react";

const TerminalKlone = () => {
  const [terminals, setTerminals] = useState<number[]>([1]);
  const [terminalCounter, setTerminalCounter] = useState(1);
  const [prevInputList, setPrevInputList] = useState<string[]>([]);

  // init FileSystem
  const fileSystemRef = useRef(
    new FileSystemClass({
      currentDirectory: "kloner",
      listOfDirectories: initialDirectories,
      fullPath: "home/kloner",
    })
  );

  const callbackFunction = (command: string) => {
    if (command === "clear") {
      resetFileSystemClass();
    } else {
      setTerminals((prev) => [...prev, terminalCounter + 1]);
      setTerminalCounter((prev) => prev + 1);
    }
  };

  const resetFileSystemClass = () => {
    fileSystemRef.current.fullPath = "/home/kloner";
    fileSystemRef.current.currentDirectory = "kloner";

    const newId = terminalCounter + 1;
    setTerminals([newId]);
    setTerminalCounter(newId);
  };

  return (
    <div className="font-mono text-lg container px-5">
      <p className="text-primary">Welcome to Terminal Klone</p>
      <p className="pl-5 text">
        To view a list of commands, type{" "}
        <span className="text-primary">"help"</span> and press Enter.
      </p>
      {terminals.map((terminalId) => (
        <Terminal
          key={terminalId}
          id={terminalId}
          callbackFunction={callbackFunction}
          fileSystem={fileSystemRef.current}
          setPrevInputList={setPrevInputList}
          prevInputList={prevInputList}
        />
      ))}
    </div>
  );
};

export default TerminalKlone;
