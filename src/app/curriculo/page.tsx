'use client';

import { FC } from 'react';
import {
  FaHtml5,
  FaCss3,
  FaPython,
  FaJs,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaFigma,
} from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import {
  SiPowerbi,
  SiJupyter,
  SiTypescript,
  SiArchlinux,
  SiTailwindcss,
  SiNextdotjs,
} from 'react-icons/si';
import { Sobre, Experiencia, Education } from '@/data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';
import { SkillsRadarChart } from '@/components/SkillsRadarChart';
import FramerWrapper from '@/components/FramerWrapper';
import AnimatedBackground from '@/components/core/animated-background';

// Skills Data Type
type Skill = {
  icon: FC;
  name: string;
};

type Skills = {
  title: string;
  description: string;
  skillList: Skill[];
};

// Skills data
const skills: Skills = {
  title: 'Minhas Habilidades',
  description: `
Tenho uma vasta gama de habilidades técnicas adquiridas ao longo dos anos, abrangendo várias áreas da ciência da computação e desenvolvimento de software. Minha experiência inclui tanto o frontend quanto o backend, bem como ferramentas de design e análise de dados.
  `,
  skillList: [
    { icon: FaHtml5, name: 'html 5' },
    { icon: FaCss3, name: 'css 3' },
    { icon: FaJs, name: 'javascript' },
    { icon: FaReact, name: 'react.js' },
    { icon: SiNextdotjs, name: 'next.js' },
    { icon: SiTailwindcss, name: 'tailwind.css' },
    { icon: FaNodeJs, name: 'node.js' },
    { icon: FaFigma, name: 'figma' },
    { icon: FaPython, name: 'python' },
    { icon: FaDatabase, name: 'banco de dados' },
    { icon: SiArchlinux, name: 'i use arch linux btw' },
    { icon: SiTypescript, name: 'typescript' },
    { icon: SiPowerbi, name: 'power bi' },
    { icon: SiJupyter, name: 'jupyter notebook' },
    { icon: BiLogoPostgresql, name: 'postgresql' },
  ],
};

const Curriculo: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="flex min-h-[80vh] items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experiencia"
          className="flex flex-col gap-[60px] xl:flex-row"
        >
          <TabsList className="mx-auto flex w-full max-w-[380px] flex-col gap-6 xl:mx-0">
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
                  <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                    {Experiencia.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                      {Experiencia.items.map((item, index) => (
                        <li
                          key={index}
                          className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                        >
                          <span className="text-accent2">{item.duration}</span>
                          <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
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
              <FramerWrapper>
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{Education.title}</h3>
                  <p className="mx-auto max-w-[600px] whitespace-pre-line text-white/60 xl:mx-0">
                    {Education.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                      {Education.items.map((item, index) => (
                        <li
                          key={index}
                          className="flex h-[260px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                        >
                          <span className="text-accent2">{item.duration}</span>
                          <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
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
            <TabsContent value="skills" className="h-full w-full">
              <FramerWrapper>
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="mx-auto max-w-[600px] whitespace-pre-line text-white/60 xl:mx-0">
                      {skills.description}
                      <SkillsRadarChart />
                    </p>
                  </div>
                  <ul className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                    <AnimatedBackground
                      // defaultValue={skills.skillList}
                      className="rounded-lg bg-zinc-800"
                      transition={{
                        type: 'spring',
                        bounce: 0.2,
                        duration: 0.3,
                      }}
                      enableHover
                    >
                      {skills.skillList.map((skill, index) => (
                        <li
                          key={index}
                          data-id={skill}
                          className="relative flex items-center justify-center"
                        >
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="group flex h-[150px] w-full items-center justify-center rounded-xl">
                                <div className="text-6xl transition-all duration-300 group-hover:text-accent2">
                                  <skill.icon />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      ))}
                    </AnimatedBackground>
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
                  <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                    {Sobre.description}
                  </p>
                  <ul className="mx-auto grid max-w-[620px] grid-cols-1 gap-6 gap-y-6 xl:mx-0 xl:grid-cols-2">
                    {Sobre.info.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-center gap-4 xl:justify-start"
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
