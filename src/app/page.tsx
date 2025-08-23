"use client";

import AnimatedText from "@/components/AnimatedText";
import DownLoadCVBtn from "@/components/DownLoadCVBtn";
import FramerWrapper from "@/components/FramerWrapper";
import MultiDirectionSlide from "@/components/MultiDirection";
import Photo from "@/components/Photo";
import RedeSocial from "@/components/RedeSocial";
import Stats from "@/components/Stats";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pb-24 xl:pt-8">
          {/* text */}
          <div className="order-2 text-center xl:order-none xl:text-left">
            <TypeAnimation
              sequence={[
               "I'm a Full Stack Developer",
                1000,
                "I'm a Frontend Specialist",
                1000,
                "I'm a Backend Engineer",
                1000,
                "I'm a Tech Enthusiast",
                1000,             ]}
              wrapper="span"
              speed={50}
              className="text-xl text-white"
              repeat={Infinity}
            />
            <MultiDirectionSlide />
            <AnimatedText
              className="relative z-10 mb-9 max-w-[500px] text-white/80"
             text="I'm a passionate full stack developer with expertise in both frontend and backend technologies. I thrive on building responsive, scalable web applications with clean code and intuitive user experiences."/>

            {/* botôes e sociais */}
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <FramerWrapper delay={5.4}>
                <DownLoadCVBtn />
              </FramerWrapper>
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
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
