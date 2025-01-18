'use client';

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface TrueFocusProps {
  sentence?: string;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
}

const TrueFocus: React.FC<TrueFocusProps> = ({
  sentence = "True Focus",
  blurAmount = 1,
  borderColor = "orange",
  glowColor = "rgba(0, 255, 0, 0.6)",
  animationDuration = 0.5,
}) => {
  const words = sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  // Automatically cycle through words
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, animationDuration * 1000);
      return () => clearInterval(interval);
    }
  }, [isPaused, animationDuration, words.length]);

  // Update the focus rectangle when the current word changes
  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect =
      wordRefs.current[currentIndex]?.getBoundingClientRect();

    if (activeRect) {
      setFocusRect({
        x: activeRect.left - parentRect.left,
        y: activeRect.top - parentRect.top,
        width: activeRect.width,
        height: activeRect.height,
      });
    }
  }, [currentIndex, words.length]);

  const handleMouseEnter = (index: number) => {
    setIsPaused(true); // Pause the auto animation
    setCurrentIndex(index); // Focus on the hovered word
  };

  const handleMouseLeave = () => {
    setIsPaused(false); // Resume the auto animation
  };

  return (
    <div
      className="relative flex gap-4 justify-start items-center flex-wrap"
      ref={containerRef}
    >
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={(el) => (wordRefs.current[index] = el)}
            className="relative md:text-md text-xs font-bold cursor-pointer"
            style={{
              filter: isActive ? `blur(0px)` : `blur(${blurAmount}px)`,
              "--border-color": borderColor,
              "--glow-color": glowColor,
              transition: `filter ${animationDuration}s ease`,
            } as React.CSSProperties}

            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      <motion.div
        className="absolute top-0 left-0 pointer-events-none box-border border-0"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0,
        }}
        transition={{
          duration: animationDuration,
        }}
        style={{
          "--border-color": borderColor,
          "--glow-color": glowColor,
        } as React.CSSProperties}

      >
        <span
          className="absolute w-6 h-6 border-[4px] rounded-[4px] top-[-12px] left-[-12px] border-r-0 border-b-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 6px var(--border-color))",
          }}
        ></span>
        <span
          className="absolute w-6 h-6 border-[4px] rounded-[4px] top-[-12px] right-[-12px] border-l-0 border-b-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 6px var(--border-color))",
          }}
        ></span>
        <span
          className="absolute w-6 h-6 border-[4px] rounded-[4px] bottom-[-12px] left-[-12px] border-r-0 border-t-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 6px var(--border-color))",
          }}
        ></span>
        <span
          className="absolute w-6 h-6 border-[4px] rounded-[4px] bottom-[-12px] right-[-12px] border-l-0 border-t-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 6px var(--border-color))",
          }}
        ></span>
      </motion.div>
    </div>
  );
};

export default TrueFocus;
