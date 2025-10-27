import PaintColorBox from "./PaintColorBox";

export const boxSize = 32;

type PaintColorSelectType = {
  setCurrentColor: React.Dispatch<React.SetStateAction<string>>;
};

const PaintColorSelect = ({ setCurrentColor }: PaintColorSelectType) => {
  const paintRow = [
    "white #fefffe",
    "gray #c1c1c0",
    "red #ff0000",
    "yellow #fffe01",
    "green #00ff00",
    "teal #00fefe",
    "blue #0101ff",
    "magenta #fe00fe",
    "light-yellow #feff81",
    "light-green #00ff80",
    "light-blue #81feff",
    "purple #8282fd",
    "pink #fe0180",
    "terracotta #ff8141",
  ];

  return (
    <div className="flex flex-row">
      {paintRow.map((paintRowValue) => {
        const paintRowSplit = paintRowValue.split(" ");
        const name = paintRowSplit[0];
        const hex = paintRowSplit[1];
        return (
          <PaintColorBox
            key={name}
            colorHex={hex}
            colorName={name}
            setCurrentColor={setCurrentColor}
          />
        );
      })}
    </div>
  );
};

export default PaintColorSelect;
