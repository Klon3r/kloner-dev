import { useEffect, useState } from "react";
import clsx from "clsx";
import ContentCard from "../components/ContentCard/ContentCard";

// import timerImage from "../assets/cards/timer.png";
// import gameLogImage from "../assets/cards/game-log.png";
// import terminalImage from "../assets/cards/terminal.png";

const Homepage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isDivHovered, setIsDivHovered] = useState(false);

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
        "flex gap-5 items-center mx-10 flex-wrap justify-center",
        isMobile ? "flex-col" : ""
      )}
      onMouseEnter={() => setIsDivHovered(true)}
      onMouseLeave={() => setIsDivHovered(false)}
    >
      <ContentCard
        title="Terminal Klone"
        // cardImage={terminalImage}
        description="Browser-based terminal with Unix command support and directory navigation"
        url="/terminal"
        isHovered={isDivHovered}
        newCard
      />
      <ContentCard
        title="The Completion Hall"
        // cardImage={gameLogImage}
        description="My personal gaming log with completion dates, platforms, and notes"
        url="/games"
        isHovered={isDivHovered}
      />
      <ContentCard
        title="Countdown"
        // cardImage={timerImage}
        description="Start a countdown and get notified the moment it finishes"
        url="/timer"
        isHovered={isDivHovered}
      />
    </div>
  );
};

export default Homepage;
