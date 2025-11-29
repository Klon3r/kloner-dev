import { RefObject, SetStateAction } from "react";
import PaintColorSelect from "./PaintColorSelect";

type PaintCanvasAndColorsType = {
  canvasRef: RefObject<HTMLCanvasElement | null>;
  width: number;
  height: number;
  setCurrentColor: React.Dispatch<SetStateAction<string>>;
  currentColor: string;
};

const PaintCanvasAndColors = ({
  canvasRef,
  width,
  height,
  setCurrentColor,
  currentColor,
}: PaintCanvasAndColorsType) => {
  return (
    <div>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="hover:cursor-crosshair rounded-2xl border-2 border-black"
      />
      <PaintColorSelect
        setCurrentColor={setCurrentColor}
        currentColor={currentColor}
      />
    </div>
  );
};

export default PaintCanvasAndColors;
