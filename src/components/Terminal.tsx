import useSlowType from "./useSlowType";
import { useEffect, useRef, useState } from "react";

function Terminal() {
  const [commandInput, setCommandInput] = useState("");
  const [output, setOutput] = useState("");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shouldAutoScroll = useRef(true);
  const [isComplete, setIsComplete] = useState(false);

  const handleTypingComplete = () => {
    setIsComplete(true);
    shouldAutoScroll.current = false;
  };

  // Custom hook usage
  const lines = useSlowType(output, 3, handleTypingComplete);

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
        setOutput("\nList of Commands: clear, email\n");
        resetScroll();
        break;
      case "clear":
        setOutput("clear"); // Clear output
        resetScroll();
        break;
      case "email":
        setOutput("\nbunyan.keiran@gmail.com\n");
        resetScroll();
        break;
      case "about-me":
        setOutput(
          `\nHello, my name is Keiran Bunyan. I am a passionate web developer who loves programming and problem-solving. I thrive on the challenge of turning problems into elegant, functional solutions.\nI have recently graduated with a Bachelor's degree in 'Computer Science'. My academic journey provided me with a comprehensive foundation of software development, data structures & algorithms.\nI am committed to continuously enhancing my knowledge and deepening my interest in web technologies.\nMy goal is to stay of the forefront of industry trends and continually improve my skills to create innovative and effective web solutions.`
        );
        resetScroll();
        break;
      default:
        setOutput(`\nUnknown command: ${value}\n`);
    }
  }

  const resetScroll = () => {
    shouldAutoScroll.current = true;
    setIsComplete(false);
  };

  useEffect(() => {
    if (shouldAutoScroll.current && containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines, isComplete]); // Run on line change or complete

  return (
    <>
      <div id="command-div">Type 'help' for a list of commands</div>
      <div id="terminal-body" ref={containerRef}>
        {lines.map((line, index) => (
          <div key={index} style={{ marginBottom: "1em", paddingLeft: "1em" }}>
            {line}
          </div>
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
