import { motion } from 'framer-motion';
import React from 'react';

const MultiDirectionSlide = () => {
  const MULTIDIRECTION_SLIDE_VARIANTS = {
    hidden: { opacity: 0, x: '-25vw' },
    visible: { opacity: 1, x: 0 },
    right: { opacity: 0, x: '25vw' },
  };

  return (
    <div className="overflow-hidden">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
        transition={{ delay: 2.4, duration: 1 }}
        className="h1 font-playfair mb-6"
      >
        Olá, eu sou
      </motion.h1>
      <motion.h1
        initial="right"
        animate="visible"
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
        transition={{ delay: 3.4, duration: 1 }}
        style={{ left: 0 }}
        className="h1 font-playfair mb-6 text-accent2"
      >
        ANDRIEL JOSÉ
      </motion.h1>
    </div>
  );
};

export default MultiDirectionSlide;
