import { useEffect, useRef, useState } from "react";
import PaintColorSelect from "./PaintColor/PaintColorSelect";
import PaintSizeSlider from "./PaintColor/PaintSizeSlider";

type PaintCanvasType = {
  height: number;
  width: number;
};

const PaintCanvas = ({ height, width }: PaintCanvasType) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [currentColor, setCurrentColor] = useState("#ff0000");

  const [cursorSize, setCursorSize] = useState([20]);
  const drawCircle = (event: React.MouseEvent) => {
    const canvas = canvasRef.current;
    const context = contextRef.current;
    if (!canvas || !context) return;

    const rect = canvas.getBoundingClientRect();

    const y = event.clientY - rect.top;
    const x = event.clientX - rect.left;

    context.beginPath();
    context.arc(x, y, cursorSize[0], 0, 2 * Math.PI);
    context.fillStyle = currentColor;
    context.fill();
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
    <div className="flex flex-row justify-center">
      <div className="flex-flex-col">
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          onMouseDown={(e) => drawCircle(e)}
          className="hover:cursor-crosshair"
        />
        <PaintColorSelect setCurrentColor={setCurrentColor} />
      </div>
      <div className="px-5 bg-white rounded-2xl mx-5 py-5">
        <PaintSizeSlider defaultValue={[20]} onChange={setCursorSize} />
      </div>
    </div>
  );
};

export default PaintCanvas;
