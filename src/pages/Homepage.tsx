import Card from "../components/Card/Card";
import timer from "../assets/cards/timer.png";
import { navigateTo } from "../utils/navigate";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { containerDiv, mobileContainerDiv } from "./Style";

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
    <div className={clsx(containerDiv, isMobile ? mobileContainerDiv : "")}>
      <Card
        imageSrc={timer}
        onClick={() => navigateTo("timer")}
        isMobile={isMobile}
      />
    </div>
  );
};

export default Homepage;
