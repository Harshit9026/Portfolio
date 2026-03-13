import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import BootSequence from "@/components/BootSequence";
import GameLanding from "@/components/GameLanding";
import GameMap, { SectionId } from "@/components/GameMap";
import GameHUD from "@/components/GameHUD";
import MouseTrail from "@/components/MouseTrail";
import AchievementToast, { showAchievementToast } from "@/components/AchievementToast";
import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ContactSection from "@/components/sections/ContactSection";
import { useKonamiCode } from "@/hooks/useGameEffects";

type Screen = "boot" | "landing" | "map" | SectionId;

const sectionComponents: Record<SectionId, React.FC<{ onBack: () => void }>> = {
  home: HomeSection,
  about: AboutSection,
  skills: SkillsSection,
  projects: ProjectsSection,
  experience: ExperienceSection,
  achievements: AchievementsSection,
  resume: ResumeSection,
  contact: ContactSection,
};

const sectionAchievements: Partial<Record<SectionId, { title: string; desc: string }>> = {
  about: { title: "Self Aware", desc: "You discovered the About section!" },
  skills: { title: "Skill Scout", desc: "You unlocked the Skill Tree!" },
  projects: { title: "Quest Logger", desc: "You found the Project Quests!" },
  experience: { title: "Veteran", desc: "You explored the Experience Log!" },
  achievements: { title: "Trophy Hunter", desc: "You entered the Trophy Room!" },
  contact: { title: "Signal Sent", desc: "You reached the Contact Portal!" },
};

const Index = () => {
  const [screen, setScreen] = useState<Screen>("boot");
  const [visitedSections, setVisitedSections] = useState<Set<SectionId>>(new Set());
  const [konamiTriggered, setKonamiTriggered] = useState(false);

  const handleBootComplete = useCallback(() => setScreen("landing"), []);
  const handleStart = () => setScreen("map");
  
  const handleSelectSection = (id: SectionId) => {
    setScreen(id);
    if (!visitedSections.has(id)) {
      setVisitedSections((prev) => new Set(prev).add(id));
      const achievement = sectionAchievements[id];
      if (achievement) {
        setTimeout(() => showAchievementToast(achievement.title, achievement.desc), 600);
      }
      // Check for completionist
      if (visitedSections.size + 1 >= 8) {
        setTimeout(() => showAchievementToast("Completionist", "You explored every location!"), 1500);
      }
    }
  };

  const handleBack = () => setScreen("map");

  useKonamiCode(
    useCallback(() => {
      if (!konamiTriggered) {
        setKonamiTriggered(true);
        showAchievementToast("Konami Legend", "You entered the secret code! ↑↑↓↓←→←→BA");
      }
    }, [konamiTriggered])
  );

  const SectionComponent =
    screen !== "boot" && screen !== "landing" && screen !== "map"
      ? sectionComponents[screen]
      : null;

  return (
    <div className="min-h-screen bg-background">
      <MouseTrail />
      <AchievementToast />
      <GameHUD currentSection={screen} sectionsVisited={visitedSections} />

      <AnimatePresence mode="wait">
        {screen === "boot" && (
          <BootSequence key="boot" onComplete={handleBootComplete} />
        )}
        {screen === "landing" && (
          <GameLanding key="landing" onStart={handleStart} />
        )}
        {screen === "map" && (
          <GameMap
            key="map"
            onSelectSection={handleSelectSection}
            activeSection={null}
            visitedSections={visitedSections}
          />
        )}
        {SectionComponent && (
          <SectionComponent key={screen} onBack={handleBack} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
