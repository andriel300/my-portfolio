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
        { num: gitHubStats.totalContributions, text: "Total contributions P/Years (Code commits)" },
      ]);
    } catch (error) {
      console.error("Error fetching GitHub stats:", error);
      // Fallback  to default stats
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
    return <div>Loading stats...</div>;
}

return (
    <div className="grid grid-cols-2 gap-8 py-12 xl:py-0 xl:grid-cols-4">
      {stats.map((item, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <div className="text-5xl text-white mb-2">
            <CountUp end={item.num} duration={5} />
            +
          </div>
          <div className="text-lg text-white/60">{item.text}</div>
        </div>
      ))}
    </div>
  );
}
