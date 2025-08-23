"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ChartData {
  skill: string;
  level: number;
  fullMark: number;
}

const chartData: ChartData[] = [
  { skill: "JavaScript", level: 92, fullMark: 100 },
  { skill: "React", level: 87, fullMark: 100 },
  { skill: "Node.js", level: 78, fullMark: 100 },
  { skill: "Next.js", level: 85, fullMark: 100 },
  { skill: "TypeScript", level: 74, fullMark: 100 },
  { skill: "HTML/CSS", level: 91, fullMark: 100 },
  { skill: "MongoDB", level: 69, fullMark: 100 },
  { skill: "PostgreSQL", level: 65, fullMark: 100 },
  { skill: "Git", level: 88, fullMark: 100 },
  { skill: "REST APIs", level: 82, fullMark: 100 },
  { skill: "AWS", level: 61, fullMark: 100 }
];

// Define the props interface for the custom tick component
interface CustomTickProps {
  payload?: {
    value: string;
    coordinate?: number;
  };
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  [key: string]: any;
}

// Custom tick component to properly display skill names
const CustomPolarAngleAxisTick = ({ payload, x, y }: CustomTickProps) => {
  if (!payload || x === undefined || y === undefined) {
    return null;
  }

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={4}
        textAnchor="middle"
        fill="#fff"
        fontSize={12}
        fontWeight={500}
      >
        {payload.value}
      </text>
    </g>
  );
};

export function SkillsRadarChart() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 shadow-xl">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            FULL STACK DEVELOPMENT SKILLS
          </CardTitle>
          <p className="text-gray-300 mt-2">
            Proficiency levels across key technologies
          </p>
        </CardHeader>
        
        <CardContent className="pt-4">
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart
                data={chartData}
                margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
                outerRadius="80%"
              >
                <PolarGrid 
                  stroke="rgba(255, 255, 255, 0.3)" 
                  strokeWidth={0.5}
                  radialLines={true}
                />
                
                <PolarAngleAxis
                  dataKey="skill"
                  tick={(props) => <CustomPolarAngleAxisTick {...props} />}
                  tickLine={false}
                />
                
                <PolarRadiusAxis
                  angle={90}
                  domain={[0, 100]}
                  tickCount={6}
                  tick={{ fill: '#fff', fontSize: 10 }}
                  axisLine={false}
                />
                
                <Radar
                  name="Skill Level"
                  dataKey="level"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.5}
                  strokeWidth={2}
                  dot={{ fill: '#fff', r: 3, strokeWidth: 2 }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
            {chartData.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                <span className="text-sm text-gray-300">
                  {item.skill}: <strong className="text-white">{item.level}%</strong>
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800">
              <div className="w-3 h-3 rounded-full bg-purple-500 mr-2 animate-pulse"></div>
              <span className="text-sm text-gray-300">
                Proficient in both frontend and backend technologies
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
