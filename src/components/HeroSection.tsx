import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Instagram, MessageCircle, Download } from "lucide-react";


const roles = [
  "AI/ML Enthusiast",
  "Python Developer",
  "Future AI Engineer",
  "Building AI Projects",
];

const socials = [
  { icon: Github, href: "https://github.com/HarshXerror", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/harsh-singh-65325a38a", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/i.amharshh_", label: "Instagram" },
  { icon: MessageCircle, href: "https://wa.me/919250973339", label: "WhatsApp" },
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/5 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-primary font-mono text-sm mb-4"
            >
              &lt;Hello World /&gt;
            </motion.p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              Hi, I'm{" "}
              <span className="gradient-text">Harsh</span>
            </h1>

            <div className="h-10 md:h-12 flex items-center justify-center lg:justify-start">
              <span className="text-xl md:text-2xl text-muted-foreground font-mono">
                {displayed}
              </span>
              <span className="ml-1 w-0.5 h-6 bg-primary animate-pulse-glow inline-block" />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground mt-6 max-w-md mx-auto lg:mx-0 leading-relaxed"
            >
              BCA student passionate about Artificial Intelligence & Machine Learning.
              Building the future, one model at a time.
            </motion.p>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 mt-8 justify-center lg:justify-start"
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary hover:scale-110 transition-all duration-300 hover:neon-border"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </motion.div>

            {/* Resume button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 flex justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="glow-btn inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium"
              >
                <Download size={18} />
                Download Resume 📄
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border border-muted-foreground/30 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse-glow" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
