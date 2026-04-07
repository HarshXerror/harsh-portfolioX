import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GitFork, Star, BookOpen, Users } from "lucide-react";

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  name: string;
  bio: string;
}

const GITHUB_USERNAME = "HarshXerror";

const GitHubStats = () => {
  const [stats, setStats] = useState<GitHubUser | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.public_repos !== undefined) setStats(data);
      })
      .catch(() => {});
  }, []);

  const statCards = [
    { icon: BookOpen, label: "Repositories", value: stats?.public_repos ?? "—" },
    { icon: Users, label: "Followers", value: stats?.followers ?? "—" },
    { icon: Star, label: "Following", value: stats?.following ?? "—" },
    { icon: GitFork, label: "Open Source", value: "Active" },
  ];

  return (
    <section id="github-stats" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">// github</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            GitHub <span className="gradient-text">Stats</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
          {statCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-xl p-5 text-center"
            >
              <card.icon className="mx-auto mb-2 text-primary" size={22} />
              <p className="text-2xl font-bold">{card.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{card.label}</p>
            </motion.div>
          ))}
        </div>

        {/* GitHub contribution graph images */}
        <div className="flex flex-col items-center gap-6 max-w-3xl mx-auto">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=radical&hide_border=true&bg_color=0d1117&title_color=38bdf8&icon_color=a855f7&text_color=94a3b8`}
            alt="GitHub Stats"
            className="w-full max-w-md rounded-lg"
            loading="lazy"
          />
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=radical&hide_border=true&background=0d1117&ring=38bdf8&fire=a855f7&currStreakLabel=38bdf8`}
            alt="GitHub Streak"
            className="w-full max-w-md rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
