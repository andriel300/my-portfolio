"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Design from "./Design";

type Props = {};

const DesignTransition = (props: Props) => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div
            className="h-screen w-screen fixed top-0
          left-0 right-0 pointer-events-none z-40 flex"
          >
            <Design />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default DesignTransition;
