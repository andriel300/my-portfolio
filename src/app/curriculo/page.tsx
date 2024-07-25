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

// sobre min data
const sobre = {
  title: "Sobre min",
  description: `Sou um profissional apaixonado por usar dados para resolver problemas e tomar decisões inteligentes, sempre transformando desafios em oportunidades. Como um INFP Mediador e Cânceriano, trago empatia e intuição para entender as necessidades dos meus colegas e stakeholders. Valorizo a comunicação clara e a colaboração harmoniosa, dedicando-me à excelência e ao aprimoramento contínuo. Estou sempre em busca de novos desafios e tecnologias, transformando números em insights valiosos para decisões estratégicas e sustentáveis.`,
  info: [
    {
      fieldName: "Nome",
      fieldValue: "Andriel José",
    },
    {
      fieldName: "Celular",
      fieldValue: "+55 (18) 99819-0820",
    },
    {
      fieldName: "Experiência",
      fieldValue: "3+ Anos",
    },
    {
      fieldName: "Nacionalidade",
      fieldValue: "Brasileiro",
    },
    {
      fieldName: "Email",
      fieldValue: "andrieldata@proton.me",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Disponível",
    },
    {
      fieldName: "Idiomas",
      fieldValue: "Inglês, Português Brasil",
    },
  ],
};

// experiencia data
const experiencia = {
  icon: "/assets/resume/badge.svg",
  title: "Minha Experiência",
  description: `Devido à minha sólida carreira na análise de dados, tenho vasta experiência na identificação e solução de problemas complexos trabalhando em parceria com as áreas de negócios. Trabalhei com a priorização de tarefas apoiada por metodologias ágeis, como Scrum, bem como criei protótipos altamente eficientes com programas como Figma e Excel. Sou profissional no mapeamento de dados e no processo de ETL; executei essas tarefas com Pentaho, SSIS e SQL, e garanti a integração e transformação exatas de formulários de informações. No desenvolvimento de dashboards interativos e informativos, trabalho de forma especializada usando Power BI, Tableau e Data Studio.

Através da minha especialização no desenvolvimento e controle de KPIs e OKRs, assegurando a medição eficaz dos objetivos organizacionais. Minha experiência inclui também a homologação de sistemas, documentação detalhada e a elaboração de manuais de usabilidade de dashboards, contribuindo para a conformidade com a LGPD e a implementação de estratégias de gamificação para engajamento.
 Com uma mentalidade analítica e entendimento da comunicação eficaz, resolvo todos os desafios proativamente, sempre procurando excelência e inovação.`,
  items: [
    {
      company: "Data Mundo",
      position: "Analista de Dados",
      duration: "2023 - Atual",
    },
  ],
};

// Educação
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Formação",
  description: `Atualmente cursando Bacharelado em Ciências da Computação pelo Centro Universitário Internacional (UNINTER) (2024 - 2028), adquiri uma base sólida em conceitos teóricos e práticos da computação. Desde 2023, atuo como Analista de Dados na Data Mundo, onde aplico meus conhecimentos em análise de dados e ferramentas tecnológicas para resolver problemas de negócios.

Em 2022, obtive o Certificado em Desenvolvimento Web Full Stack pela Zero To Mastery, expandindo minhas habilidades em desenvolvimento web e programação. Entre 2020 e 2023, participei de diversos cursos online focados em programação, bancos de dados, SQL, Excel e Power BI, fortalecendo minhas competências técnicas e minha capacidade de análise e visualização de dados.`,
  items: [
    {
      institution: "Centro Universitário Internacional (UNINTER)",
      degree: "Cursando Bacharelado em Ciências da Computação",
      duration: "2024 - 2028",
    },
    {
      institution: "Data Mundo",
      degree: "Analista de Dados",
      duration: "2023 - 2024",
    },
    {
      institution: "Zero To Mastery",
      degree: "Certificado em Desenvolvedor web full stack",
      duration: "2022",
    },
    {
      institution: "Cursos online",
      degree: "Cursos de programação, Banco de dados, Sql, Excel e Power Bi.",
      duration: "2020 - 2023",
    },
  ],
};

// skills data
const skills = {
  title: "Minhas Habilidades",
  description: "computer sciencee e blablablá",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <FaDatabase />,
      name: "banco de dados",
    },
    {
      icon: <SiArchlinux />,
      name: "i use arch linux btw",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <SiPowerbi />,
      name: "power bi",
    },
    {
      icon: <SiJupyter />,
      name: "jupyter notebook",
    },
    {
      icon: <BiLogoPostgresql />,
      name: "postgresql",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { experimental_useEffectEvent } from "react";

type Props = {};

// Interface for Info Items
interface InfoItem {
  fieldName: string;
  fieldValue: string;
}

// Interface for Sobre
interface Sobre {
  title: string;
  description: string;
  info: InfoItem[];
}

// Interface for Experience Items
interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
}

// Interface for Experience
interface Experience {
  icon: string;
  title: string;
  description: string;
  items: ExperienceItem[];
}

// Interface for Education Items
interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
}

// Interface for Education
interface Education {
  icon: string;
  title: string;
  description: string;
  items: EducationItem[];
}

// Interface for Skill Items
interface SkillItem {
  icon: JSX.Element;
  name: string;
}

// Interface for Skills
interface Skills {
  title: string;
  description: string;
  skillList: SkillItem[];
}

const curriculo = (props: Props) => {
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

          {/* content */}

          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experiencia" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experiencia.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experiencia.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experiencia.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent2">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[260px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent2">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
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
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="sobre"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{sobre.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {sobre.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] gap-6 mx-auto xl:mx-0">
                  {sobre.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default curriculo;
