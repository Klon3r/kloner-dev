import clsx from "clsx";
import { flexCenter, flexCol, textColor } from "../../StyleGlobal";
import {
  minuteButton,
  timerButton,
  timerButtonContainer,
  timerDisplay,
} from "./Style";
import { useEffect, useState } from "react";
import { convertMinutesToSeconds } from "../../utils/time";
import timerIcon from "../..//assets/icons/timer.png";

const Timer = () => {
  const [minute, setMinute] = useState(30);
  const [timeRemaining, setTimeRemaining] = useState(0);

  const [displayMinute, setDisplayMinute] = useState(minute);
  const [displaySecond, setDisplaySecond] = useState(0);

  const [countdownStarted, setCountdownStarted] = useState(false);
  const [countdownFinished, setCountdownFinished] = useState(false);
  const [countdownPause, setCountdownPause] = useState(false);

  const sendNotification = () => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("Times up!", {
        body: "The timer has finished",
        icon: timerIcon,
        tag: "timer",
        requireInteraction: true,
      });
    }
  };

  const startCountdown = () => {
    const totalSeconds = convertMinutesToSeconds(minute) - 1;
    setTimeRemaining(totalSeconds);
    setCountdownStarted(true);
    calculateTimeToDisplay(totalSeconds);
    setMinute(minute);
  };

  const resetCountdown = () => {
    setCountdownFinished(false);
    setCountdownStarted(false);
    setMinute(30);
    setTimeRemaining(minute);
    setCountdownPause(false);
  };

  const pauseCountdown = () => {
    setCountdownPause((prev) => !prev);
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

  const addMinutes = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!countdownStarted) {
      const addTime = event.shiftKey ? 1 : 5;
      setMinute((prev) => prev + addTime);
    }
  };

  const removeMinutes = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!countdownStarted) {
      const removeTime = event.shiftKey ? 1 : 5;
      if (minute - removeTime >= 1) setMinute((prev) => prev - removeTime);
    }
  };

  useEffect(() => {
    if (countdownStarted && !countdownFinished && !countdownPause) {
      const countdownInterval = setInterval(() => {
        calculateTimer(countdownInterval);
      }, 1000);
      return () => clearInterval(countdownInterval);
    }

    if (countdownFinished) sendNotification();
  }, [countdownStarted, timeRemaining, countdownFinished, countdownPause]);

  useEffect(() => {
    if ("Notification" in window && Notification.permission == "default") {
      Notification.requestPermission();
    }
  }, []);

  return (
    <div className={clsx(flexCenter, flexCol, textColor)}>
      <div>
        <button className={minuteButton} onClick={(e) => addMinutes(e)}>
          +
        </button>
      </div>
      <div className={timerDisplay}>
        {countdownFinished
          ? "Finished"
          : countdownStarted
          ? `${displayMinute} : ${displaySecond.toString().padStart(2, "0")}`
          : `${minute} min`}
      </div>
      <div>
        <button className={minuteButton} onClick={removeMinutes}>
          -
        </button>
      </div>
      <div className={timerButtonContainer}>
        {countdownStarted ? (
          <button className={timerButton} onClick={pauseCountdown}>
            PAUSE
          </button>
        ) : (
          <button className={timerButton} onClick={startCountdown}>
            START
          </button>
        )}

        <button className={timerButton} onClick={resetCountdown}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default Timer;
