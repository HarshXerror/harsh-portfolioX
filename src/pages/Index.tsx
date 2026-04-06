import { useState, useCallback } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import GitHubStats from "@/components/GitHubStats";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ProfileCanvas from "@/components/ProfileCanvas";
import { useLenis } from "@/hooks/useLenis";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const handleLoadingComplete = useCallback(() => setLoading(false), []);

  useLenis();

  return (
    <>
      <ProfileCanvas />
      <CustomCursor />
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <GitHubStats />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
