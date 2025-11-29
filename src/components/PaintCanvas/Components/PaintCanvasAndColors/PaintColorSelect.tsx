import PaintColorBox from "./PaintColorBox";

export const boxSize = 32;

type PaintColorSelectType = {
  setCurrentColor: React.Dispatch<React.SetStateAction<string>>;
  currentColor: string;
};

const PaintColorSelect = ({
  setCurrentColor,
  currentColor,
}: PaintColorSelectType) => {
  const paintRowOne = [
    "black #000101",
    "dark-gray #91918e",
    "dark-red #800101",
    "dark-yellow #808000",
    "dark-green #008000",
    "dark-cyan #018180",
    "dark-blue #010180",
    "dark-magenta #810081",
    "dark-lime-yellow #818140",
    "olive #004040",
    "dark-teal #0180fe",
    "blue-gray #014081",
    "dark-purple #8101ff",
    "brown #814100",
  ];

  const paintRowTwo = [
    "white #fefffe",
    "gray #c1c1c0",
    "red #ff0000",
    "yellow #fffe01",
    "green #00ff00",
    "cyan #00fefe",
    "blue #0101ff",
    "magenta #fe00fe",
    "lime-yellow #feff81",
    "blue-green #00ff80",
    "teal #81feff",
    "purple #8282fd",
    "pink #fe0180",
    "terracotta #ff8141",
  ];

  return (
    <div className="flex flex-col py-1 gap-1">
      <div className="flex flex-row justify-around">
        {paintRowOne.map((paintRowValue) => {
          const paintRowSplit = paintRowValue.split(" ");
          const name = paintRowSplit[0];
          const hex = paintRowSplit[1];
          return (
            <PaintColorBox
              key={name}
              colorHex={hex}
              colorName={name}
              setCurrentColor={setCurrentColor}
              currentColor={currentColor}
            />
          );
        })}
      </div>
      <div className="flex flex-row justify-around">
        {paintRowTwo.map((paintRowValue) => {
          const paintRowSplit = paintRowValue.split(" ");
          const name = paintRowSplit[0];
          const hex = paintRowSplit[1];
          return (
            <PaintColorBox
              key={name}
              colorHex={hex}
              colorName={name}
              setCurrentColor={setCurrentColor}
              currentColor={currentColor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PaintColorSelect;
