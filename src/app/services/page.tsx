"use client";

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 3.2, duration: 0.4, ease: "easeIn" },
          }}
        >
          {/* <Servicos /> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
