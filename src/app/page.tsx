"use client";

import AnimatedText from "@/components/AnimatedText";
import Photo from "@/components/Photo";
import RedeSocial from "@/components/RedeSocial";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div
          className="flex flex-col xl:flex-row items-center justify-between
        xl:pt-8 xl:pb-24"
        >
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <TypeAnimation
              sequence={[
                "Eu sou Analista de Dados",
                1000,
                "Eu sou Analista de Bi",
                1000,
                "Eu sou um Entusiasta de Tecnologia",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="text-xl text-white"
              repeat={Infinity}
            />
            <h1 className="h1 mb-6 font-playfair">
              Olá, eu sou <span className="text-accent">ANDRIEL</span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 10 }}
                className=" text-primary bg-accent rounded-s-full py-0.5 p-1"
              >
                JOSÉ
              </motion.span>
            </h1>
            <AnimatedText
              className="max-w-[500px] mb-9 text-white/80"
              text="Sou um analista de dados motivado, com sólidas habilidades de resolução de problemas e uma atitude positiva que me capacita a abordar desafios com uma mentalidade analítica e proativa."
            />
            {/* botôes e sociais */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <RedeSocial
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border
                border-accent rounded-full flex justify-center items-center text-accent
                text-base hover:bg-accent hover:text-primary hover:transition-all
                duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
};

export default Home;
