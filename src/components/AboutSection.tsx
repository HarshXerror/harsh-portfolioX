import { motion } from "framer-motion";
import { Brain, Code, Rocket } from "lucide-react";

const highlights = [
  { icon: Brain, title: "AI/ML Passion", desc: "Exploring deep learning, NLP, and computer vision to solve real-world problems." },
  { icon: Code, title: "Full Stack Skills", desc: "Building end-to-end applications with Python, JavaScript, and modern frameworks." },
  { icon: Rocket, title: "Always Learning", desc: "Constantly pushing boundaries through research papers, courses, and hands-on projects." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">// about me</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed text-center"
          >
            I'm <span className="text-foreground font-medium">Harsh Singh</span>, a BCA student with a deep passion for
            Artificial Intelligence and Machine Learning. My journey began with curiosity about how machines learn
            and evolved into building real projects using Python, TensorFlow, and scikit-learn.
            I believe in learning by doing and am constantly working on projects that push the boundaries
            of what AI can achieve.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-xl p-6 text-center group"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:glow-primary transition-all">
                <h.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{h.title}</h3>
              <p className="text-sm text-muted-foreground">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
