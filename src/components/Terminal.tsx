import useSlowType from "./useSlowType";
import { useEffect, useRef, useState } from "react";

function Terminal() {
  const [commandInput, setCommandInput] = useState("");
  const [output, setOutput] = useState("");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shouldAutoScroll = useRef(true);
  const [isComplete, setIsComplete] = useState(false);

  /**
   * Once slow typing is complete, make it so you can autoscroll
   */
  const handleTypingComplete = () => {
    setIsComplete(true);
    shouldAutoScroll.current = false;
  };

  // Custom hook
  const lines = useSlowType(output, 30, handleTypingComplete);

  /**
   * Set the command to the value of the input
   * @param e The value of the input
   */
  function changeInput(e: string) {
    setCommandInput(e);
  }

  /**
   * Check what key is pressed
   * @param key The key that was pressed
   */
  function checkKeyPress(key: string) {
    if (key === "Enter") {
      commandCheck(commandInput);
      setCommandInput("");
    }
  }

  /**
   * List of usable commands
   * @param value The value that has been typed
   */
  function commandCheck(value: string) {
    console.log("You typed", value);
    value = value.toLowerCase();

    switch (value) {
      case "help":
        setOutput("List of Commands:\nabout-me,  email,  skills,  clear\n");
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
      case "skills":
        setOutput(
          "My Skills include:\nHTML, CSS, JavaScript\nReact, Python, SQL\nGit/GitHub,CI/CD, Testing, Linux\n"
        );
        resetScroll();
        break;
      default:
        setOutput(`\nUnknown command: ${value}\n`);
    }
  }

  /**
   * Reset the ability to scroll
   */
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
      <div id="command-div">
        Type '<span style={{ color: "#90EE90" }}>help</span>' for a list of
        commands
      </div>

      <div id="terminal-body" ref={containerRef} title="terminal-body">
        {lines.map((line, index) => (
          <div key={index} style={{ marginBottom: "1em", paddingLeft: "1em" }}>
            {line}
          </div>
        ))}
      </div>

      <div id="terminal-input-div">
        <p
          id="prompt"
          style={{ fontSize: 18, fontWeight: "bolder", color: "#90EE90" }}
        >
          {"> "}{" "}
        </p>
        <input
          title="command-input"
          onChange={(e) => changeInput(e.target.value)}
          value={commandInput}
          onKeyDown={(e) => checkKeyPress(e.key)}
        />
      </div>
    </>
  );
}

export default Terminal;
