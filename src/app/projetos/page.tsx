"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projetos = [
  {
    num: "01",
    category: "dashboard",
    title: "projeto 1",
    description: `People Analytics Setor de RH`,
    stack: [{ name: "Excel" }, { name: "Power Bi" }, { name: "Figma" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "dashboard",
    title: "projeto 2",
    description: `Acompanhamento de Vendas para Setor Financeiro`,
    stack: [{ name: "Excel" }, { name: "Power Bi" }, { name: "Figma" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "projeto 3",
    description: `Portfolio Pessoal`,
    stack: [
      { name: "Next.js" },
      { name: "Javascript" },
      { name: "Typescript" },
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Tailwind.css" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "dashboard",
    title: "projeto 4",
    description: `Acompanhamento Financeiro para Setor Financeiro`,
    stack: [{ name: "Excel" }, { name: "Power Bi" }, { name: "Figma" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "dashboard",
    title: "projeto 5",
    description: `Acompanhamento de Vendas para Setor Comercial`,
    stack: [{ name: "Excel" }, { name: "Power Bi" }, { name: "Figma" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "06",
    category: "dashboard",
    title: "projeto 6",
    description: `Acompanhamento de Atendimentos para Setor Atendimento ao Cliente`,
    stack: [{ name: "Excel" }, { name: "Power Bi" }, { name: "Figma" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "07",
    category: "dashboard",
    title: "projeto 7",
    description: `Pesquisa de Satisfação dos Colaboradores para Setor RH`,
    stack: [{ name: "Excel" }, { name: "Power Bi" }, { name: "Figma" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

type Props = {};

const Trabalho = (props: Props) => {
  const [projeto, setProjeto] = useState(projetos[0]);

  const handleSlideChange = (swiper: { activeIndex: any }) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProjeto(projetos[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {projeto.num}
              </div>
              {/* categoria de projetos */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {projeto.category} projeto
              </h2>
              {/* projeto descrição */}
              <p className="text-white/60">{projeto.description}</p>
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
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
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
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
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
          <div className="w-full xl:w-[50%] relative">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projetos.map((projeto, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay, sobreposição */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* imagem  */}
                    <div className="relative w-full h-full">
                      <Image
                        src={projeto.image}
                        fill
                        className="object-cover"
                        alt=""
                        sizes="(max-width: 600px) 298px, (max-width: 1200px) 498px, 498px"
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
