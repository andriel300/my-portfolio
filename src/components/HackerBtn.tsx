"use client";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";

const HackerBtn = ({ label }: { label: string }) => {
  const [displayText, setDisplayText] = useState(label);
  const charset = "abcdefghijklmnopqrstuvwxyz";

  const randomChars = (length: number) => {
    return Array.from(
      { length },
      () => charset[Math.floor(Math.random() * charset.length)],
    ).join("");
  };

  const scramble = async (input: string) => {
    let prefix = "";
    for (let index = 0; index < input.length; index++) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      prefix += input.charAt(index);
      setDisplayText(prefix + randomChars(input.length - prefix.length));
    }
  };

  const startScrambling = () => {
    scramble(label);
    setTimeout(() => console.log("Submitted"), label.length * 50);
  };

  useEffect(() => {
    setDisplayText(label);
  }, [label]);

  return (
    // <Button size={'lg'} className='text-base px-5 py-6'       onMouseEnter={startScrambling}
    // >   <Download className="mx-1" />
    //     {displayText}
    // </Button>
    <div>
      <a href="/assets/resume.pdf" download="resume.pdf">
        <Button
          variant="outline"
          size="lg"
          className="flex items-center gap-2 uppercase"
          onMouseEnter={startScrambling}
        >
          {displayText}
          <FiDownload className="text-xl" />
        </Button>
      </a>
    </div>
  );
};

export default HackerBtn;
