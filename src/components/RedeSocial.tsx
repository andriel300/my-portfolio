import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import React from "react";

const redeSocial = [
  { icon: <FaGithub />, path: "https://github.com/yourusername" }, // Update with your actual GitHub URL
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/yourusername" }, // Update with your actual LinkedIn URL
];

// Update the Props interface
interface Props {
  containerStyles?: string;
  iconStyles?: string;
}

const RedeSocial: React.FC<Props> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {redeSocial.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default RedeSocial;
