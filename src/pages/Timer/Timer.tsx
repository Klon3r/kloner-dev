import clsx from "clsx";
import { flexCenter, flexCol, textColor } from "../../StyleGlobal";
import { timerButtonContainer, timerButtonStyle, timerDisplay } from "./Style";
import { useEffect, useState } from "react";
import { convertMinutesToSeconds } from "../../utils/time";

const Timer = () => {
  const [minute, setMinute] = useState(5);
  const [timeRemaining, setTimeRemaining] = useState(0);

  const [displayMinute, setDisplayMinute] = useState(minute);
  const [displaySecond, setDisplaySecond] = useState(0);

  const [countdownStarted, setCountdownStarted] = useState(false);
  const [countdownFinished, setCountdownFinished] = useState(false);

  const startCountdown = () => {
    const totalSeconds = convertMinutesToSeconds(minute) - 1;
    setTimeRemaining(totalSeconds);
    setCountdownStarted(true);
    calculateTimeToDisplay(totalSeconds);
    setMinute(minute);
  };

  const clearCountdown = () => {
    setCountdownFinished(false);
    setCountdownStarted(false);
    setTimeRemaining(minute);
  };

  const calculateTimer = (interval: NodeJS.Timeout) => {
    let timeLeft = timeRemaining - 1;

    if (timeLeft <= 0) {
      setTimeRemaining(0);
      setCountdownFinished(true);
      setCountdownStarted(false);
      clearInterval(interval);
    }

    setTimeRemaining(timeLeft);
    calculateTimeToDisplay(timeLeft);
  };

  const calculateTimeToDisplay = (timeInSeconds: number) => {
    let minute = Math.floor(timeInSeconds / 60);
    let second = timeInSeconds % 60;

    setDisplayMinute(minute);
    setDisplaySecond(second);
  };

  useEffect(() => {
    if (countdownStarted && !countdownFinished) {
      const countdownInterval = setInterval(() => {
        calculateTimer(countdownInterval);
      }, 1000);
      return () => clearInterval(countdownInterval);
    }
  }, [countdownStarted, timeRemaining]);

  return (
    <div className={clsx(flexCenter, flexCol, textColor)}>
      <div className={timerDisplay}>
        {countdownFinished
          ? "Finished"
          : countdownStarted
          ? `${displayMinute} : ${displaySecond}`
          : `${minute} mins`}
      </div>
      <div className={timerButtonContainer}>
        <button className={timerButtonStyle} onClick={startCountdown}>
          START
        </button>
        <button className={timerButtonStyle} onClick={clearCountdown}>
          CLEAR
        </button>
      </div>
    </div>
  );
};

export default Timer;
