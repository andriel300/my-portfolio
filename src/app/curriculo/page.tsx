"use client";

import { FC } from "react";
import {
  FaHtml5,
  FaCss3,
  FaPython,
  FaJs,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
  FaAws
} from "react-icons/fa";
import { BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import {
  SiPowerbi,
  SiDocker,
  SiJupyter,
  SiExpress,
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
import AnimatedBackground from "@/components/core/animated-background";

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
  title: "My Technical Skills",
  description: `I have a comprehensive skill set spanning frontend, backend, database, and DevOps technologies. Below is a visual representation of my proficiency across key areas of full stack development.`,
   skillList: [
    // Frontend
    { icon: FaHtml5, name: "HTML5", category: "Frontend", proficiency: 95 },
    { icon: FaCss3, name: "CSS3", category: "Frontend", proficiency: 90 },
    { icon: FaJs, name: "JavaScript", category: "Frontend", proficiency: 92 },
    { icon: SiTypescript, name: "TypeScript", category: "Frontend", proficiency: 85 },
    { icon: FaReact, name: "React.js", category: "Frontend", proficiency: 88 },
    { icon: SiNextdotjs, name: "Next.js", category: "Frontend", proficiency: 87 },
    { icon: SiTailwindcss, name: "Tailwind CSS", category: "Frontend", proficiency: 90 },
    
    // Backend
    { icon: FaNodeJs, name: "Node.js", category: "Backend", proficiency: 84 },
    { icon: SiExpress, name: "Express.js", category: "Backend", proficiency: 82 },
    { icon: FaPython, name: "Python", category: "Backend", proficiency: 80 },
    
    // Database
    { icon: BiLogoMongodb, name: "MongoDB", category: "Database", proficiency: 78 },
    { icon: BiLogoPostgresql, name: "PostgreSQL", category: "Database", proficiency: 75 },
    { icon: FaDatabase, name: "SQL", category: "Database", proficiency: 80 },
    
    // Tools & DevOps
    { icon: FaGitAlt, name: "Git", category: "Tools", proficiency: 88 },
    { icon: SiDocker, name: "Docker", category: "DevOps", proficiency: 70 },
    { icon: FaAws, name: "AWS", category: "DevOps", proficiency: 65 },
    { icon: FaFigma, name: "Figma", category: "Design", proficiency: 75 },
    { icon: SiArchlinux, name: "Linux", category: "Tools", proficiency: 85 },
  ],
};

const Curriculo: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex min-h-[80vh] items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experiencia"
          className="flex flex-col gap-[60px] xl:flex-row"
        >
          <TabsList className="mx-auto flex w-full max-w-[380px] flex-col gap-6 xl:mx-0">
            <TabsTrigger value="experiencia">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="sobre">About me</TabsTrigger>
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
                  <ScrollArea className="h-[500px]">
                    <ul className="grid grid-cols-1 gap-[30px]">
                      {Education.items.map((item, index) => (
                        <li
                          key={index}
                          className="flex flex-col rounded-xl bg-[#232329] p-6 transition-all duration-300 hover:bg-[#2a2a32]"
                        >
                          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex-1">
                              <span className="text-accent2 font-medium">{item.duration}</span>
                              {item.status && (
                                <span className="ml-3 rounded-full bg-accent/20 px-2 py-1 text-xs text-accent">
                                  {item.status}
                                </span>
                              )}
                              <h3 className="mt-2 text-xl font-semibold">
                                {item.degree}
                              </h3>
                              <div className="mt-1 flex items-center gap-2">
                                <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                                <p className="text-white/80">{item.institution}</p>
                              </div>
                            </div>
                          </div>
                          
                          {item.highlights && item.highlights.length > 0 && (
                            <div className="mt-4">
                              <h4 className="mb-2 text-sm font-medium text-white/70">Key Focus Areas:</h4>
                              <div className="flex flex-wrap gap-2">
                                {item.highlights.map((highlight, idx) => (
                                  <span 
                                    key={idx}
                                    className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent"
                                  >
                                    {highlight}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
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
                        type: "spring",
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
