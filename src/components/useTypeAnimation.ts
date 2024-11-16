import { useEffect, useState, useCallback } from "react";

export const useTypingAnimation = (text: string, delay: number) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  const resetAnimation = useCallback(() => {
    setDisplayedText("");
    setCurrentIndex(0);
  }, []);

  return { displayedText, resetAnimation };
};
