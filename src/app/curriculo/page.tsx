"use client";

import {
  FaHtml5,
  FaCss3,
  FaPython,
  FaJs,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiPowerbi,
  SiJupyter,
  SiTypescript,
  SiArchlinux,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";
import { Sobre, Experiencia, Education } from "@/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { SkillsRadarChart } from "@/components/SkillsRadarChart";
import FramerWrapper from "@/components/FramerWrapper";

// Skills data
const skills = {
  title: "Minhas Habilidades",
  description: `
Tenho uma vasta gama de habilidades técnicas adquiridas ao longo dos anos, abrangendo várias áreas da ciência da computação e desenvolvimento de software. Minha experiência inclui tanto o frontend quanto o backend, bem como ferramentas de design e análise de dados.
  `,
  skillList: [
    { icon: <FaHtml5 />, name: "html 5" },
    { icon: <FaCss3 />, name: "css 3" },
    { icon: <FaJs />, name: "javascript" },
    { icon: <FaReact />, name: "react.js" },
    { icon: <SiNextdotjs />, name: "next.js" },
    { icon: <SiTailwindcss />, name: "tailwind.css" },
    { icon: <FaNodeJs />, name: "node.js" },
    { icon: <FaFigma />, name: "figma" },
    { icon: <FaPython />, name: "python" },
    { icon: <FaDatabase />, name: "banco de dados" },
    { icon: <SiArchlinux />, name: "i use arch linux btw" },
    { icon: <SiTypescript />, name: "typescript" },
    { icon: <SiPowerbi />, name: "power bi" },
    { icon: <SiJupyter />, name: "jupyter notebook" },
    { icon: <BiLogoPostgresql />, name: "postgresql" },
  ],
};

interface projectcardprops {
  value: any;
  num: number;
}

const Curriculo: React.FC<projectcardprops> = ({ value, num }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experiencia"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experiencia">Experiência</TabsTrigger>
            <TabsTrigger value="education">Educação</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="sobre">Sobre min</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experiencia" className="w-full">
              <FramerWrapper>
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{Experiencia.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {Experiencia.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {Experiencia.items.map((item, index) => (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent2">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </FramerWrapper>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <FramerWrapper y={0} scale={0.8} delay={num / 4} duration={0.15}>
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{Education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 whitespace-pre-line">
                    {Education.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {Education.items.map((item, index) => (
                        <li
                          key={index}
                          className="bg-[#232329] h-[260px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent2">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </FramerWrapper>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <FramerWrapper>
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 whitespace-pre-line">
                      {skills.description}
                      <SkillsRadarChart />
                    </p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4 mb-4">
                    {skills.skillList.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </div>
              </FramerWrapper>
            </TabsContent>

            {/* Sobre */}
            <TabsContent
              value="sobre"
              className="w-full text-center xl:text-left"
            >
              <FramerWrapper>
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{Sobre.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {Sobre.description}
                  </p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] gap-6 mx-auto xl:mx-0">
                    {Sobre.info.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FramerWrapper>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Curriculo;
