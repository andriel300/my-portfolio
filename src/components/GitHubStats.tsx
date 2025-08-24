"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { fetchGitHubStats } from "../utils/githubStats";

interface StatItem {
  num: number;
  text: string;
}

export default function GitHubStats() {
  const [stats, setStats] = useState<StatItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const gitHubStats = await fetchGitHubStats("andriel300");

        setStats([
          { num: gitHubStats.yearsOfExperience, text: "Years of experience" },
          { num: gitHubStats.completedProjects, text: "Completed projects" },
          { num: gitHubStats.masteredTechnologies, text: "Mastered technologies" },
          { num: gitHubStats.totalContributions, text: "Total contributions (Code commits)" },
        ]);
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        // Fallback to default stats
        setStats([
          { num: 3, text: "Years of experience" },
          { num: 15, text: "Completed projects" },
          { num: 20, text: "Mastered technologies" },
          { num: 599, text: "Total contributions (Code commits)" }
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  if (loading) {
    return (
      <section className="pb-12 pt-4 xl:pb-0 xl:pt-0">
        <div className="container mx-auto">
          <div className="mx-auto flex max-w-[80vw] flex-wrap gap-6 xl:max-w-none">
            {[1, 2, 3, 4].map((item) => (
              <div
                className="flex flex-1 items-center justify-center gap-4 xl:justify-start"
                key={item}
              >
                <div className="text-4xl font-extrabold xl:text-6xl h-12 bg-gray-700 rounded animate-pulse w-16"></div>
                <div className="h-6 bg-gray-700 rounded animate-pulse w-24"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pb-12 pt-4 xl:pb-0 xl:pt-0">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-[80vw] flex-wrap gap-6 xl:max-w-none">
          {stats.map((item, index) => (
            <div
              className="flex flex-1 items-center justify-center gap-4 xl:justify-start"
              key={index}
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl font-extrabold xl:text-6xl"
              />
              <p
                className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
