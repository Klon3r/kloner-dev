import { boxSize } from "./PaintColorSelect";

type PaintColorBoxType = {
  colorHex: string;
  colorName: string;
  setCurrentColor: React.Dispatch<React.SetStateAction<string>>;
};

const PaintColorBox = ({
  colorHex,
  colorName,
  setCurrentColor,
}: PaintColorBoxType) => {
  const handleClick = (colorHex: string) => {
    setCurrentColor(colorHex);
  };

  return (
    <div
      id={colorName}
      style={{ backgroundColor: colorHex, width: boxSize, height: boxSize }}
      className="hover:cursor-pointer"
      onClick={() => handleClick(colorHex)}
    />
  );
};

export default PaintColorBox;
