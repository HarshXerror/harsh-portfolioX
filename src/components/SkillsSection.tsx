import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: 90, color: "from-primary to-secondary" },
  { name: "Machine Learning", level: 80, color: "from-secondary to-accent" },
  { name: "Data Science", level: 75, color: "from-accent to-primary" },
  { name: "HTML/CSS", level: 85, color: "from-primary to-accent" },
  { name: "JavaScript", level: 70, color: "from-secondary to-primary" },
  { name: "TensorFlow", level: 65, color: "from-accent to-secondary" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">// skills</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-sm">{skill.name}</span>
                <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16 max-w-3xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={`card-${skill.name}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ rotateY: 10, rotateX: -5, scale: 1.05 }}
              style={{ transformStyle: "preserve-3d" }}
              className="glass rounded-xl p-4 text-center cursor-default"
            >
              <div className="text-2xl mb-2">
                {skill.name === "Python" && "🐍"}
                {skill.name === "Machine Learning" && "🤖"}
                {skill.name === "Data Science" && "📊"}
                {skill.name === "HTML/CSS" && "🎨"}
                {skill.name === "JavaScript" && "⚡"}
                {skill.name === "TensorFlow" && "🧠"}
              </div>
              <p className="text-sm font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
