import { useEffect, useState, useRef } from "react";

function useSlowType(text: string, speed: number, onComplete: () => void) {
  const [outputText, setOutputText] = useState("");
  const typingRef = useRef(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (text === "clear") {
      setOutputText("");
      onComplete();
      typingRef.current = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      return;
    }

    typingRef.current = true;

    const typeText = () => {
      for (let i = 0; i < text.length; i++) {
        if (!typingRef.current) {
          return;
        }
        timeoutRef.current = setTimeout(() => {
          setOutputText((prevText) => prevText + text.charAt(i));

          // onComplete if on last character
          if (i === text.length - 1) {
            onComplete();
          }
        }, i * speed);
      }
      return () => {
        typingRef.current = false;
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    };

    typeText();
  }, [text, speed]);

  const lines = outputText.split("\n");

  return lines;
}

export default useSlowType;
