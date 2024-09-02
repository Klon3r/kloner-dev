import { useEffect, useState } from "react";

function useSlowType(text: string, speed: number) {
  const [outputText, setOutputText] = useState("");

  useEffect(() => {
    const typeText = () => {
      if (text === "clear") {
        setOutputText("");
        return "";
      }

      let timeoutId: NodeJS.Timeout;
      for (let i = 0; i < text.length; i++) {
        timeoutId = setTimeout(() => {
          setOutputText((prevText) => prevText + text.charAt(i));
        }, i * speed);
      }
      return () => clearTimeout(timeoutId);
    };

    typeText();
  }, [text, speed]);

  const lines = outputText.split("\n");

  return lines;
}

export default useSlowType;
