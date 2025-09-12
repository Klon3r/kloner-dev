import { useEffect, useState } from "react";
import clsx from "clsx";
import ContentCard from "../components/ContentCard/ContentCard";

import timerImage from "../assets/cards/timer.png";
import gameLogImage from "../assets/cards/game-log.png";

const Homepage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const checkMobileDevice = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", checkMobileDevice);
    return () => {
      window.removeEventListener("resize", checkMobileDevice);
    };
  }, []);

  return (
    <div
      className={clsx(
        "flex justify-center gap-5 items-center mx-10",
        isMobile ? "flex-col" : ""
      )}
    >
      <ContentCard
        title="The Completion Hall"
        cardImage={gameLogImage}
        description="My personal gaming log with completion dates, platforms, and notes"
        url="/games"
        newCard
      />
      <ContentCard
        title="Countdown"
        cardImage={timerImage}
        description="Start a countdown and get notified the moment it finishes"
        url="/timer"
      />
    </div>
  );
};

export default Homepage;
