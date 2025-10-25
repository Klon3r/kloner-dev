import PaintColorBox from "./PaintColorBox";

export const boxSize = 35;

type PaintColorSelectType = {
  setCurrentColor: React.Dispatch<React.SetStateAction<string>>;
};

const PaintColorSelect = ({ setCurrentColor }: PaintColorSelectType) => {
  return (
    <div className="flex flex-row">
      <PaintColorBox
        colorHex={"#fefffe"}
        colorName="white"
        setCurrentColor={setCurrentColor}
      />
      <PaintColorBox
        colorHex={"#c1c1c0"}
        colorName="gray"
        setCurrentColor={setCurrentColor}
      />

      <PaintColorBox
        colorHex={"#ff0000"}
        colorName="red"
        setCurrentColor={setCurrentColor}
      />
      <PaintColorBox
        colorHex={"#fffe01"}
        colorName="yellow"
        setCurrentColor={setCurrentColor}
      />
      <PaintColorBox
        colorHex={"#00ff00"}
        colorName="green"
        setCurrentColor={setCurrentColor}
      />
    </div>
  );
};

export default PaintColorSelect;
