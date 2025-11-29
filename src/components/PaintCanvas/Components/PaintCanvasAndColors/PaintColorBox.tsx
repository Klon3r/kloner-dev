import { useEffect, useState } from "react";
import { boxSize } from "./PaintColorSelect";
import clsx from "clsx";

type PaintColorBoxType = {
  colorHex: string;
  colorName: string;
  setCurrentColor: React.Dispatch<React.SetStateAction<string>>;
  currentColor: string;
};

const PaintColorBox = ({
  colorHex,
  colorName,
  setCurrentColor,
  currentColor,
}: PaintColorBoxType) => {
  const [selected, setSelected] = useState(false);

  const handleClick = (colorHex: string) => {
    setCurrentColor(colorHex);
  };

  useEffect(() => {
    setSelected(colorHex === currentColor ? true : false);
  }, [colorHex, currentColor]);

  return (
    <div
      id={colorName}
      date-testid={`${colorName}-paint-color-box`}
      style={{ backgroundColor: colorHex, width: boxSize, height: boxSize }}
      className={clsx(
        "hover:cursor-pointer border-2 border-black rounded-2xl",
        selected ? "opacity-100 rounded-[5px]" : "opacity-50 hover:opacity-100"
      )}
      onClick={() => handleClick(colorHex)}
    />
  );
};

export default PaintColorBox;
