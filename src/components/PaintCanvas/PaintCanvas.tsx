import { useEffect, useRef, useState } from "react";
import PaintToolSelectors from "./Components/PaintToolSelectors/PaintToolSelectors";
import PaintCanvasAndColors from "./Components/PaintCanvasAndColors/PaintCanvasAndColors";

type PaintCanvasType = {
  height: number;
  width: number;
};

type drawInfoType = {
  id: number;
  x: number;
  y: number;
  cursorSize: number[];
  paintColor: string;
};

const PaintCanvas = ({ height, width }: PaintCanvasType) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  const [currentColor, setCurrentColor] = useState("#000101");
  const [cursorSize, setCursorSize] = useState([25]);
  const [shapeSelected, setShapeSelected] = useState("pencil");
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawId, setDrawId] = useState(1);

  // Draw
  const startDrawInfo = useRef<drawInfoType[]>([]);
  const moveDrawInfo = useRef<drawInfoType[]>([]);
  const endDrawInfo = useRef<drawInfoType[]>([]);
  const [lastCursorLocation, setLastCursorLocation] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const circleShapeScale = 1.25;

  const startDrawing = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    const context = contextRef.current;

    if (!canvas || !context) return;

    const rect = canvas.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    setIsDrawing(true);
    startDrawInfo.current.push({
      id: drawId,
      x,
      y,
      cursorSize,
      paintColor: currentColor,
    });
    const shapeSize = cursorSize[0] / circleShapeScale;

    setLastCursorLocation({ x, y });

    // Draw immediately on click
    context.beginPath();
    context.arc(x, y, shapeSize, 0, 2 * Math.PI);
    context.fillStyle = currentColor;
    context.fill();
  };

  const moveDrawing = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    const context = contextRef.current;

    if (!canvas || !context) return;

    const rect = canvas.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    const shapeSize = cursorSize[0] / circleShapeScale;

    if (isDrawing && lastCursorLocation) {
      context.beginPath();
      context.arc(x, y, shapeSize, 0, 2 * Math.PI);
      context.fillStyle = currentColor;
      context.moveTo(lastCursorLocation?.x, lastCursorLocation?.y);
      context.fill();

      moveDrawInfo.current.push({
        id: drawId,
        x,
        y,
        cursorSize,
        paintColor: currentColor,
      });
      setLastCursorLocation({ x, y });
    }
  };

  const stopDrawing = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    const context = contextRef.current;

    if (!canvas || !context) return;

    const rect = canvas.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    setIsDrawing(false);

    endDrawInfo.current.push({
      id: drawId,
      x,
      y,
      cursorSize,
      paintColor: currentColor,
    });

    setDrawId((prev) => prev + 1);
  };

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
            cursorSize={cursorSize}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <PaintCanvasAndColors
            height={height}
            width={width}
            setCurrentColor={setCurrentColor}
            canvasRef={canvasRef}
            currentColor={currentColor}
            mouseDown={(e) => startDrawing(e)}
            mouseUp={(e) => stopDrawing(e)}
            mouseMove={(e) => moveDrawing(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default PaintCanvas;
