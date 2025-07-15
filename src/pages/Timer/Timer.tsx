import clsx from "clsx";
import { flexCenter, flexCol, textColor } from "../../StyleGlobal";
import { timerButtonContainer, timerButtonStyle, timerDisplay } from "./Style";
import { useEffect, useState } from "react";

const Timer = () => {
  const [minute, setMinute] = useState(5);
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [countdownFinished, setCountdownFinished] = useState(false);

  const startCountdown = () => {
    console.log("countdownStarted");
    setTimeRemaining(minute);
    setCountdownFinished(false);
    setCountdownStarted(true);
    setMinute(5);
  };

  useEffect(() => {
    if (countdownStarted && !countdownFinished) {
      const countdownInterval = setInterval(() => {
        let timeLeft = timeRemaining - 1;
        console.log("Time left", timeLeft);

        if (timeLeft <= 0) {
          setTimeRemaining(0);
          clearInterval(countdownInterval);
          setCountdownStarted(false);
          setCountdownFinished(true);
          console.log("COUNTDOWN FINISHED");
        }

        setTimeRemaining(timeLeft);
      }, 1000);
      return () => clearInterval(countdownInterval);
    }
  }, [countdownStarted, timeRemaining]);

  return (
    <div className={clsx(flexCenter, flexCol, textColor)}>
      <div className={timerDisplay}>
        {countdownFinished ? "Finished" : `${timeRemaining} seconds`}
      </div>
      <div className={timerButtonContainer}>
        <button className={timerButtonStyle} onClick={startCountdown}>
          START
        </button>
        <button className={timerButtonStyle}>CLEAR</button>
      </div>
    </div>
  );
};

export default Timer;
