"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { skill: "Python", level: 87 },
  { skill: "Pandas", level: 78 },
  { skill: "Excel", level: 61 },
  { skill: "SQL", level: 69 },
  { skill: "Numpy", level: 65 },
  { skill: "Nextjs", level: 74 },
  { skill: "Matplotlib", level: 65 },
  { skill: "Javascript", level: 92 },
  { skill: "Scikit-Learn", level: 54 },
  { skill: "PowerBI", level: 85 },
  { skill: "Tableau", level: 49 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function SkillsRadarChart() {
  return (
    <Card className="bg-primary">
      <CardHeader className="items-center">
        <CardTitle className="text-accent">
          Níveis de habilidade em programação
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[350px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="skill" />
            <PolarGrid />
            <Radar
              dataKey="level"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
