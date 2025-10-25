import { useEffect, useRef, useState } from "react";
import PaintColorSelect from "./PaintColor/PaintColorSelect";

type PaintCanvasType = {
  height: number;
  width: number;
};

const PaintCanvas = ({ height, width }: PaintCanvasType) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [currentColor, setCurrentColor] = useState("#ff0000");

  const drawCircle = (event: React.MouseEvent) => {
    const canvas = canvasRef.current;
    const context = contextRef.current;
    if (!canvas || !context) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    context.beginPath();
    context.arc(x, y, 20, 0, 2 * Math.PI);
    console.log(currentColor, "COLOR");
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
    <div>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        onMouseDown={(e) => drawCircle(e)}
        className="hover:cursor-crosshair"
      />
      <PaintColorSelect setCurrentColor={setCurrentColor} />
    </div>
  );
};

export default PaintCanvas;
