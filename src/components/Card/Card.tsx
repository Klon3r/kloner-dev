import clsx from "clsx";
import {
  divStyle,
  hoverImageStyle,
  imageStyle,
  mobileImageStyle,
} from "./Style";

type CardType = {
  imageSrc: string;
  onClick: () => void;
  isMobile: boolean;
};

const Card = ({ imageSrc, onClick, isMobile }: CardType) => {
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
