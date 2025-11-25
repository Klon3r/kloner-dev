import { useEffect, useRef, useState } from "react";
import PaintColorSelect from "./Components/PaintColorSelect";
import PaintSizeSlider from "./Components/PaintSizeSlider";
import PaintShapeSelector from "./Components/PaintShapeSelector";

import circleShape from "../../assets/icons/circle.png";
import squareShape from "../../assets/icons/square.png";
import pencilShape from "../../assets/icons/pencil.png";

type PaintCanvasType = {
  height: number;
  width: number;
};

const PaintCanvas = ({ height, width }: PaintCanvasType) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [currentColor, setCurrentColor] = useState("#ff0000");

  const [isDrawing, setIsDrawing] = useState(false);
  const [lastCursorLocation, setLastCursorLocation] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const [shapeSelected, setShapeSelected] = useState("circle");

  const [cursorSize, setCursorSize] = useState([50]);
  const drawCircle = (event: React.MouseEvent) => {
    const canvas = canvasRef.current;
    const context = contextRef.current;
    if (!canvas || !context) return;

    const rect = canvas.getBoundingClientRect();

    const y = event.clientY - rect.top;
    const x = event.clientX - rect.left;

    const shapeSize = cursorSize[0] / 1.5;

    context.beginPath();
    context.arc(x, y, shapeSize, 0, 2 * Math.PI);
    context.fillStyle = currentColor;
    context.fill();
  };

  const drawSquare = (event: React.MouseEvent) => {
    const canvas = canvasRef.current;
    const context = contextRef.current;
    if (!canvas || !context) return;

    const rect = canvas.getBoundingClientRect();
    const shapeSize = cursorSize[0] * 1.5;

    const y = event.clientY - rect.top - shapeSize / 2;
    const x = event.clientX - rect.left - shapeSize / 2;

    context.beginPath();
    context.fillRect(x, y, shapeSize, shapeSize);
    context.fillStyle = currentColor;
    context.fill();
  };

  const drawPencil = (event: React.MouseEvent) => {
    const canvas = canvasRef.current;
    const context = contextRef.current;
    if (!canvas || !context) return;

    const rect = canvas.getBoundingClientRect();

    let y = event.clientY - rect.top;
    let x = event.clientX - rect.left;

    setIsDrawing(true);
    setLastCursorLocation({ x, y });

    if (isDrawing && lastCursorLocation) {
      context.beginPath();
      context.moveTo(lastCursorLocation?.x, lastCursorLocation?.y);
      context.lineTo(x, y);
      context.stroke();
      setLastCursorLocation({ x, y });
    }
  };

  const draw = (event: React.MouseEvent) => {
    // Draw function mapper
    const drawFunctions = {
      circle: drawCircle,
      square: drawSquare,
      pencil: drawPencil,
    };

    const drawFunction =
      drawFunctions[shapeSelected as keyof typeof drawFunctions];

    if (isDrawing) {
      drawFunction?.(event);
    }
  };

  const startDraw = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    const context = contextRef.current;
    if (!canvas || !context) return;

    const rect = canvas.getBoundingClientRect();

    let y = e.clientY - rect.top;
    let x = e.clientX - rect.left;

    setIsDrawing(true);
    setLastCursorLocation({ x, y });

    drawFunction(e);
  };

  const stopDraw = () => {
    setIsDrawing(false);
  };

  const drawFunction = (e: React.MouseEvent) => {
    const drawFunctions = {
      circle: drawCircle,
      square: drawSquare,
      pencil: drawPencil,
    };

    const drawFunction =
      drawFunctions[shapeSelected as keyof typeof drawFunctions];
    drawFunction?.(e);
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
    <div className="flex flex-row justify-center py-5 px-5 bg-violet-200 w-170 m-auto">
      <div className="m-1">
        <PaintShapeSelector
          srcImg={circleShape}
          setSelected={setShapeSelected}
          selected={shapeSelected}
          shape="circle"
        />
        <PaintShapeSelector
          srcImg={squareShape}
          setSelected={setShapeSelected}
          selected={shapeSelected}
          shape="square"
        />
        <PaintShapeSelector
          srcImg={pencilShape}
          setSelected={setShapeSelected}
          selected={shapeSelected}
          shape="pencil"
        />
      </div>
      <div className="flex-flex-col">
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          onMouseDown={(e) => startDraw(e)}
          onMouseMove={(e) => draw(e)}
          onMouseUp={stopDraw}
          className="hover:cursor-crosshair"
        />
        <PaintColorSelect setCurrentColor={setCurrentColor} />
      </div>
      <div className="px-5 bg-white rounded-2xl mx-5 py-5">
        <PaintSizeSlider defaultValue={cursorSize} onChange={setCursorSize} />
      </div>
    </div>
  );
};

export default PaintCanvas;
