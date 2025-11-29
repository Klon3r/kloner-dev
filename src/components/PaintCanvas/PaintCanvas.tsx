import { useEffect, useRef, useState } from "react";
import PaintToolSelectors from "./Components/PaintToolSelectors/PaintToolSelectors";
import PaintCanvasAndColors from "./Components/PaintCanvasAndColors/PaintCanvasAndColors";

type PaintCanvasType = {
  height: number;
  width: number;
};

const PaintCanvas = ({ height, width }: PaintCanvasType) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  const [currentColor, setCurrentColor] = useState("#000101");
  const [cursorSize, setCursorSize] = useState([50]);
  const [shapeSelected, setShapeSelected] = useState("pencil");

  // TODO: Remove
  console.log(cursorSize);
  // const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas!.getContext("2d");
    if (!context) return;

    contextRef.current = context;

    // Background Color
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  return (
    <div>
      <div className="flex flex-row justify-center py-5 m-auto">
        <div className="flex justify-center items-center">
          <PaintToolSelectors
            shapeSelected={shapeSelected}
            setShapeSelected={setShapeSelected}
            setCursorSize={setCursorSize}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <PaintCanvasAndColors
            height={height}
            width={width}
            setCurrentColor={setCurrentColor}
            canvasRef={canvasRef}
            currentColor={currentColor}
          />
        </div>
      </div>
    </div>
  );
};

export default PaintCanvas;
