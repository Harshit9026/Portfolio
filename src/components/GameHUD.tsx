import { motion } from "framer-motion";
import { Heart, Zap, Star, MapPin } from "lucide-react";
import { SectionId } from "./GameMap";

interface GameHUDProps {
  currentSection: string;
  sectionsVisited: Set<SectionId>;
}

const sectionNames: Record<string, string> = {
  landing: "TITLE SCREEN",
  map: "WORLD MAP",
  home: "HOME BASE",
  about: "ABOUT ME",
  skills: "SKILL TREE",
  projects: "PROJECT QUESTS",
  experience: "EXP LOG",
  achievements: "TROPHY ROOM",
  resume: "RESUME SCROLL",
  contact: "CONTACT PORTAL",
};

const totalSections = 8;

const GameHUD = ({ currentSection, sectionsVisited }: GameHUDProps) => {
  const progress = Math.round((sectionsVisited.size / totalSections) * 100);
  const level = Math.max(1, sectionsVisited.size);

  if (currentSection === "landing" || currentSection === "boot") return null;

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between gap-4 border-b border-border/50 bg-background/90 px-4 py-2 backdrop-blur-sm md:px-6"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      {/* Left: Level & Location */}
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded border border-accent bg-accent/10 font-pixel text-[10px] text-accent">
          {level}
        </div>
        <div className="hidden md:block">
          <div className="flex items-center gap-1 font-pixel text-[8px] text-muted-foreground">
            <MapPin size={10} />
            {sectionNames[currentSection] || currentSection.toUpperCase()}
          </div>
        </div>
      </div>

      {/* Center: HP & XP Bars */}
      <div className="flex flex-1 max-w-xs flex-col gap-1">
        {/* HP */}
        <div className="flex items-center gap-2">
          <Heart size={10} className="text-destructive" />
          <div className="h-2 flex-1 overflow-hidden rounded-sm border border-destructive/30 bg-muted">
            <motion.div
              className="h-full bg-destructive"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
          <span className="font-pixel text-[7px] text-destructive">100%</span>
        </div>
        {/* XP */}
        <div className="flex items-center gap-2">
          <Star size={10} className="text-accent" />
          <div className="h-2 flex-1 overflow-hidden rounded-sm border border-accent/30 bg-muted">
            <motion.div
              className="h-full bg-accent"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <span className="font-pixel text-[7px] text-accent">{progress}%</span>
        </div>
      </div>

      {/* Right: Stats */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 font-pixel text-[8px] text-primary">
          <Zap size={10} />
          <span>{sectionsVisited.size}/{totalSections}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default GameHUD;
