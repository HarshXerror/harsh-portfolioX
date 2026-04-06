import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Image Classifier",
    description: "Deep learning model that classifies images into 100+ categories using CNN and transfer learning with TensorFlow.",
    tags: ["Python", "TensorFlow", "CNN"],
    github: "https://github.com/harshsingh",
    demo: "#",
  },
  {
    title: "Stock Price Predictor",
    description: "LSTM-based neural network that predicts stock market trends using historical data and technical indicators.",
    tags: ["Python", "LSTM", "Pandas"],
    github: "https://github.com/harshsingh",
    demo: null,
  },
  {
    title: "Sentiment Analyzer",
    description: "NLP project that analyzes social media sentiment in real-time using BERT and custom tokenizers.",
    tags: ["NLP", "BERT", "Flask"],
    github: "https://github.com/harshsingh",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description: "Modern 3D portfolio website built with React, Tailwind CSS, and Framer Motion with glassmorphism design.",
    tags: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/harshsingh",
    demo: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">// projects</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            My <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -8, rotateY: 3, rotateX: -2 }}
              style={{ transformStyle: "preserve-3d" }}
              className="glass rounded-xl p-6 group"
            >
              {/* Gradient top bar */}
              <div className="h-1 w-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent mb-5 opacity-50 group-hover:opacity-100 transition-opacity" />

              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={16} /> Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
