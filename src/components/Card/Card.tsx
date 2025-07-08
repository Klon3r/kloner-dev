import clsx from "clsx";
import {
  divStyle,
  hoverImageStyle,
  imageStyle,
  mobileImageStyle,
} from "./Style";
import { useEffect, useState } from "react";

type CardType = {
  imageSrc: string;
  onClick: () => void;
};

const Card = ({ imageSrc, onClick }: CardType) => {
  const [isMobile, setIsMobile] = useState(false);

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
    <div className={divStyle}>
      <img
        src={imageSrc}
        className={clsx(
          isMobile ? mobileImageStyle : imageStyle,
          hoverImageStyle
        )}
        alt="image card"
        onClick={onClick}
      />
    </div>
  );
};

export default Card;
