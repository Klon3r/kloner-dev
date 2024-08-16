import React, { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  speed?: number; // Delay in milliseconds
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed); //delay

    return () => clearInterval(interval);
  }, [text, speed]);

  return <div id="typewriter">{displayedText}</div>;
};

export default Typewriter;
