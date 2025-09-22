import { FileSystemClass } from "@/components/TerminalKlone/FileSytem";
import { initialDirectories } from "@/components/TerminalKlone/initialDirectories";
import Terminal from "@/components/TerminalKlone/Terminal";
import { useEffect, useState } from "react";

const TerminalKlone = () => {
  const user = "terminal@kloner-dev";
  const initDir = "~";
  const commandList: string[] = ["clear", "help", "ls"];

  const [currentDir, setCurrentDir] = useState("");

  const [terminals, setTerminals] = useState<number[]>([1]);
  const [terminalCounter, setTerminalCounter] = useState(1);

  // FileSystem class
  const FileSystem = new FileSystemClass({
    currentDirectory: currentDir,
    listOfDirectories: initialDirectories,
  });

  const callbackFunction = (command: string, currentDir: string) => {
    if (command === "clear") {
      const newId = terminalCounter + 1;
      setTerminals([newId]);
      setTerminalCounter(newId);
      setCurrentDir(initDir);
    } else {
      setCurrentDir(currentDir);
      setTerminals((prev) => [...prev, terminalCounter + 1]);
      setTerminalCounter((prev) => prev + 1);
    }
  };

  // Init page load
  useEffect(() => {
    setCurrentDir(initDir);
  }, []);

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
          user={user}
          currentDir={currentDir}
          commandList={commandList}
          callbackFunction={callbackFunction}
          fileSystem={FileSystem}
        />
      ))}
    </div>
  );
};

export default TerminalKlone;
