import { RefObject, SetStateAction } from "react";
import PaintColorSelect from "./PaintColorSelect";

type PaintCanvasAndColorsType = {
  canvasRef: RefObject<HTMLCanvasElement | null>;
  width: number;
  height: number;
  setCurrentColor: React.Dispatch<SetStateAction<string>>;
  currentColor: string;
  mouseDown: (event: React.MouseEvent<HTMLCanvasElement>) => void;
  mouseUp: (event: React.MouseEvent<HTMLCanvasElement>) => void;
  mouseMove: (event: React.MouseEvent<HTMLCanvasElement>) => void;
};

const PaintCanvasAndColors = ({
  canvasRef,
  width,
  height,
  setCurrentColor,
  currentColor,
  mouseDown,
  mouseUp,
  mouseMove,
}: PaintCanvasAndColorsType) => {
  return (
    <div>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="hover:cursor-crosshair rounded-2xl border-2 border-black"
        onMouseDown={(e) => mouseDown(e)}
        onMouseUp={(e) => mouseUp(e)}
        onMouseMove={(e) => mouseMove(e)}
      />
      <PaintColorSelect
        setCurrentColor={setCurrentColor}
        currentColor={currentColor}
      />
    </div>
  );
};

export default PaintCanvasAndColors;
