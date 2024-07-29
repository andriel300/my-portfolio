"use client";

import { BentoGrid, BentoGridItem } from "./BentoGrid";
import { GridItems } from "@/data";
import FramerWrapper from "./FramerWrapper";

const Grid = () => {
  return (
    <section id="about">
      <FramerWrapper delay={2.4}>
        <BentoGrid className="w-full py-20">
          {GridItems.map((item, index) => (
            <BentoGridItem
              id={item.id}
              key={index}
              title={item.title}
              description={item.description}
              className={item.className}
              img={item.img}
              imgClassName={item.imgClassName}
              titleClassName={item.titleClassName}
              spareImg={item.spareImg}
            />
          ))}
        </BentoGrid>
      </FramerWrapper>
    </section>
  );
};

export default Grid;
