'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
  return (
    <div className="relative z-10 h-full w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' },
          }}
          className="xl:h- [498px] absolute h-[298px] w-[298px] mix-blend-lighten transition duration-500 hover:saturate-150 hover:filter xl:w-[498px]"
        >
          <Image
            src="/assets/profile-image.png"
            priority
            quality={100}
            fill
            sizes="(max-width: 600px) 298px, (max-width: 1200px) 498px, 498px"
            alt=""
            className="object-contain"
          />
        </motion.div>

        {/* circle */}

        <motion.svg
          className="hl:h-[506px] h-[300px] w-[300px] xl:w-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2008/svg"
        >
          <motion.path
            d="M 3 3 H 498 V 498 H 3 Z"
            stroke="#2caf86"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: '24 10 00' }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
