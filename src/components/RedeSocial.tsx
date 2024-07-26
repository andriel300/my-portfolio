import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import React from "react";

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
    <div className={containerStyles}>
      {social.map((item, index) => {
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
