import React, { useEffect, useMemo } from "react";
import { Terminal } from "./terminal";
import { useTerminal } from "./terminal/hooks";
import Typewriter from "./Typewriter";

function Homepage() {
  const { history, pushToHistory, setTerminalRef, resetTerminal } =
    useTerminal();

  function headerInfo() {
    pushToHistory(
      <>
        <div style={{ fontSize: 20 }}>
          <strong>kloner.dev</strong>
        </div>
        <div>To get started please enter to following commands</div>
        <div>Commands: about-me</div>
      </>
    );
  }

  useEffect(() => {
    resetTerminal();

    pushToHistory(
      <>
        <div style={{ fontSize: 20 }}>
          <strong>kloner.dev</strong>
        </div>
        <div>To get started please enter to following commands</div>
        <div>Commands: about-me, clear</div>
      </>
    );
  }, []);

  const commands = useMemo(
    () => ({
      "about-me": async () => {
        await pushToHistory(
          <>
            <Typewriter
              text={`
              Hello, my name is Keiran Bunyan. I am a passionate web developer
              who loves programming and problem-solving. I thrive on the
              challenge of turning problems into elegant, functional
              solutions.

              I have recently graduated with a Bachelor's degree in 'Computer
              Science'. My academic journey provided me with a comprehensive
              foundation of software development, data structures & algorithms.

              I am committed to continuously enhancing my knowledge and
              deepening my interest in web technologies.

              My goal is to stay at the forefront of industry trends and
              continually improve my skills to create innovative and effective
              web solutions.
            `}
              speed={20} // Adjust the speed as necessary
            />
          </>
        );
      },
      alert: async () => {
        alert("Hello!");
        await pushToHistory(
          <>
            <div>
              <strong>Alert</strong>
              <span style={{ color: "orange", marginLeft: 10 }}>
                <strong>Shown in the browser</strong>
              </span>
            </div>
          </>
        );
      },
      clear: async () => {
        resetTerminal();
        headerInfo();
      },
    }),
    [pushToHistory]
  );

  return (
    <div className="Homepage">
      <Terminal
        history={history}
        ref={setTerminalRef}
        promptLabel={<>{">"}</>}
        commands={commands}
      />
    </div>
  );
}

export default Homepage;
