"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = {
  id: number;
  content: React.ReactNode; // Now focused only on image content
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 5; // Adjusted for better visual on responsive design
  const SCALE_FACTOR = scaleFactor || 0.05; // Slightly adjusted for responsiveness
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval); // Moved clearInterval to useEffect cleanup
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-full w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute inset-0 h-full w-full rounded-lg shadow-lg border border-gray-200 overflow-hidden"
          style={{
            transformOrigin: "center",
            scale: 1 - index * SCALE_FACTOR,
          }}
          animate={{
            y: index * -CARD_OFFSET,
            zIndex: cards.length - index,
          }}
        >
          {card.content}
        </motion.div>
      ))}
    </div>
  );
};
