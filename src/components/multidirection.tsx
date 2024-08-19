import { motion } from 'framer-motion';
import React from 'react';

const MultiDirectionSlide = () => {
  const MULTIDIRECTION_SLIDE_VARIANTS = {
    hidden: { opacity: 0, x: '-25vw' },
    visible: { opacity: 1, x: 0 },
    right: { opacity: 0, x: '25vw' },
  };

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: 5.4, type: 'spring', duration: 4, bounce: 0 },
        opacity: { delay: 5.4, duration: 3 },
      },
    },
  };

  return (
    <div className="">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
        transition={{ delay: 2.4, duration: 1 }}
        className="h1 font-playfair relative z-10 mb-6"
      >
        Olá, eu sou
      </motion.h1>
      <motion.h1
        initial="right"
        animate="visible"
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
        transition={{ delay: 3.4, duration: 1 }}
        style={{ left: 0 }}
        className="h1 font-playfair text-shadow-lg relative z-10 mb-6 border-accent text-accent2"
      >
        ANDRIEL JOSÉ
      </motion.h1>
      <div>
        <motion.svg
          aria-hidden="true"
          viewBox="0 0 418 42"
          className="static left-0 right-0 top-1/3 z-0 fill-teal-500 md:top-1/3"
          preserveAspectRatio="xMidYMid meet"
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203"
            variants={draw}
            strokeWidth="1"
            fill="none"
            stroke="#7f5af0"
          />
        </motion.svg>
      </div>
    </div>
  );
};

export default MultiDirectionSlide;
