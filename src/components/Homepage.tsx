import React, { useEffect, useMemo } from "react";
import { Terminal } from "../Terminal";
import { useTerminal } from "../Terminal/hooks";

function Homepage() {
  const { history, pushToHistory, setTerminalRef, resetTerminal } =
    useTerminal();

  useEffect(() => {
    resetTerminal();

    pushToHistory(
      <>
        <div style={{ fontSize: 20 }}>
          <strong>kloner.dev</strong>
        </div>
        <div>Welcome to my website, it is kinda a terminal</div>
        <br />
        <div>To get started please enter to following commands</div>
        <div>Commands: about-me</div>
      </>
    );
  }, []);

  const commands = useMemo(
    () => ({
      start: async () => {
        await pushToHistory(
          <>
            <div>
              <strong>Starting</strong> the server...{" "}
              <span style={{ color: "green" }}>Done</span>
            </div>
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
