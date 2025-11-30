import PaintShapeSelector from "./PaintShapeSelector";
import PaintSizeSlider from "./PaintSizeSlider";

import paintIcon from "../../../../assets/icons/pencil.png";
import { SetStateAction } from "react";

type PaintToolSelectorsType = {
  shapeSelected: string;
  setShapeSelected: React.Dispatch<SetStateAction<string>>;
  setCursorSize: React.Dispatch<SetStateAction<number[]>>;
  cursorSize: number[];
};

const PaintToolSelectors = ({
  shapeSelected,
  setShapeSelected,
  setCursorSize,
  cursorSize,
}: PaintToolSelectorsType) => {
  return (
    <div className="justify-center flex flex-col pr-5 gap-5">
      <div>
        <h1 className="text-black font-bold underline underline-offset-2 ml-0.5">
          Tool
        </h1>
        <PaintShapeSelector
          srcImg={paintIcon}
          shape="pencil"
          selected={shapeSelected}
          setSelected={setShapeSelected}
        />
      </div>
      <div>
        <h1 className="text-black font-bold underline underline-offset-2 ml-0.5">
          Size
        </h1>
        <PaintSizeSlider defaultValue={cursorSize} onChange={setCursorSize} />
      </div>
    </div>
  );
};

export default PaintToolSelectors;
