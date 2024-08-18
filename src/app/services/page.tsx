"use client";

import Grid from "@/components/Grid";
import Servicos from "@/components/Services";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 3.2, duration: 0.4, ease: "easeIn" },
          }}
        >
          <Grid />
          {/* <Servicos /> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
