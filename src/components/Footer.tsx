import { Github, Linkedin, Instagram, MessageCircle } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/harshsingh" },
  { icon: Linkedin, href: "https://linkedin.com/in/harshsingh" },
  { icon: Instagram, href: "https://instagram.com/harshsingh" },
  { icon: MessageCircle, href: "https://wa.me/919999999999" },
];

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="text-foreground">Harsh Singh</span>. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
