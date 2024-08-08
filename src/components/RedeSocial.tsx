import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import React from "react";
import { motion } from "framer-motion";

const social = [
  { icon: <FaGithub />, path: "https://github.com/andriel300" }, // Update with your actual GitHub URL
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/andrieljose/" }, // Update with your actual LinkedIn URL
];

// Update the Props interface
interface Props {
  containerStyles?: string;
  iconStyles?: string;
}

const RedeSocial: React.FC<Props> = ({ containerStyles, iconStyles }) => {
  return (
    <motion.div
      className={containerStyles}
      whileHover={{
        scale: 1.2,
        // rotate: 360,
        transition: { duration: 0.5 },
      }}
    >
      {social.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </motion.div>
  );
};

export default RedeSocial;
