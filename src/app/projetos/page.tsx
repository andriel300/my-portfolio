"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Projetos } from "@/data";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import FramerWrapper from "@/components/FramerWrapper";

const Trabalho = () => {
  const [projeto, setProjeto] = useState(Projetos[0]);

  const handleSlideChange = (swiper: { activeIndex: any }) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProjeto(Projetos[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex min-h-[80vh] flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="order-2 flex w-full flex-col xl:order-none xl:h-[460px] xl:w-[50%] xl:justify-between">
            <div className="flex h-[50%] flex-col gap-[30px]">
              {/* outline num */}
              <FramerWrapper
                key={projeto.num}
                className="text-outline text-8xl font-extrabold leading-none text-transparent"
              >
                {projeto.num}
              </FramerWrapper>
              {/* categoria de projetos */}
              <FramerWrapper key={projeto.category}>
                <h2 className="text-[42px] font-bold capitalize leading-none text-white transition-all duration-500 group-hover:text-accent">
                  {projeto.category} projeto
                </h2>
                {/* projeto descrição */}
                <p className="text-white/60">{projeto.description}</p>
              </FramerWrapper>
              {/* stack */}
              <ul>
                {projeto.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent2">
                      {item.name}
                      {/* remover a ultima virgula (comma) da letra */}
                      {index !== projeto.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* bordas */}
              <div className="border border-white/20"></div>
              {/* butões */}
              <div className="flex items-center gap-4">
                {/* live projeto button */}
                <Link href={projeto.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="group flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/5">
                        <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Acessar</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github projeto button */}
                <Link href={projeto.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="group flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/5">
                        <BsGithub className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repositório</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* SLIDER DAS FOTOS */}
          <div className="relative w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12 xl:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {Projetos.map((projeto, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="group relative flex h-[460px] items-center justify-center bg-pink-50/20">
                    {/* overlay, sobreposição */}
                    <div className="absolute bottom-0 top-0 z-10 h-full w-full bg-black/10"></div>
                    {/* imagem  */}
                    <div className="relative h-full w-full">
                      <Image
                        src={projeto.image}
                        alt=""
                        fill
                        className="object-contain"
                        loading="lazy"
                        quality={100}
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* Slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-1/2 transform translate-y-1/2 xl:bottom-0 xl:translate-y-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent2 hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconsStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Trabalho;
