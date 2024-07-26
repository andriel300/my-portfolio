import { motion } from "framer-motion";
import React from "react";

// Define the types for the animations
const quote: Record<string, any> = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    delay: 2.4,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const singleWord: Record<string, any> = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
    },
  },
};

// Define TypeScript interface for component props
interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
}) => {
  return (
    <div>
      <motion.p
        className={`inline-block text-lg ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};

export default AnimatedText;
