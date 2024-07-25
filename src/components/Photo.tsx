"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const Photo = (props: Props) => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] hover:filter hover:saturate-150 transition duration-500 h-[298px] xl:w-[498px] xl:h-
          [498px] mix-blend-lighten absolute"
        >
          <Image
            src="/assets/profile-image.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
          />
        </motion.div>

        {/* circle */}

        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] hl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2008/svg"
        >
          <motion.path
            // cx="253"
            // cy="253"
            // r="250"
            d="M 3 3 H 498 V 498 H 3 Z"
            stroke="#8B6AF1"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 00" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
