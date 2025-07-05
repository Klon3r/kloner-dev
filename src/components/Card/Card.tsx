import clsx from "clsx";
import { divStyle, hoverImageStyle, imageStyle } from "./Style";

type CardType = {
  imageSrc: string;
  onClick: () => void;
};

const Card = ({ imageSrc, onClick }: CardType) => {
  return (
    <div className={divStyle}>
      <img
        src={imageSrc}
        className={clsx(imageStyle, hoverImageStyle)}
        alt="image card"
        onClick={onClick}
      />
    </div>
  );
};

export default Card;
