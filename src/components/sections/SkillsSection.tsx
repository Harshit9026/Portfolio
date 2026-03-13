import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

interface Props { onBack: () => void }

interface SkillCategory {
  title: string;
  color: string;
  glowClass: string;
  skills: { name: string; level: number }[];
}

const categories: SkillCategory[] = [
  {
    title: "⚔️ LANGUAGES",
    color: "bg-primary",
    glowClass: "glow-primary",
    skills: [
      { name: "[C]", level: 80 },
      { name: "[C++]", level: 65 },
      { name: "[Python]", level: 50 },
      { name: "[Sql]", level: 40 },
    ],
  },
  {
    title: "🛡️ FRONTEND",
    color: "bg-neon-cyan",
    glowClass: "glow-primary",
    skills: [
      { name: "[Javascript]", level: 80 },
      { name: "[TypeScript]", level: 60 },
      { name: "[React.js]", level: 60 },
      { name: "[Next.js]", level: 55 },
    ],
  },
  {
    title: "🔮 BACKEND AND DATABASES",
    color: "bg-secondary",
    glowClass: "glow-secondary",
    skills: [
      { name: "[Node.js]", level: 75 },
      { name: "[Django]", level: 55 },
      { name: "[MongoDB]", level: 65 },
      { name: "[PostgresSql]", level: 45 },
    ],
  },
  {
    title: "🔧 TOOLS",
    color: "bg-accent",
    glowClass: "glow-accent",
    skills: [
      { name: "[Git and Github]", level: 85 },
      { name: "[PostMan]", level: 70 },
      { name: "[Docker]", level: 60 },
      { name: "[Figma]", level: 50 },
    ],
  },
];

const getLevelTitle = (level: number) => {
  if (level >= 80) return "MASTER";
  if (level >= 60) return "ADEPT";
  if (level >= 40) return "APPRENTICE";
  return "NOVICE";
};

const SkillsSection = ({ onBack }: Props) => (
  <SectionWrapper title="⚡ SKILL TREE" onBack={onBack}>
    <p className="mb-6 text-xs text-muted-foreground">
      Each skill has been leveled through quests and battles. Hover for details.
    </p>
    <div className="grid gap-6 md:grid-cols-2">
      {categories.map((cat, ci) => (
        <motion.div
          key={cat.title}
          className="pixel-border rounded bg-card p-5"
          initial={{ opacity: 0, y: 20, rotateX: 15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.15 * ci }}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="mb-4 font-pixel text-xs text-accent">{cat.title}</h3>
          <div className="space-y-4">
            {cat.skills.map((skill, si) => (
              <motion.div
                key={si}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 * ci + 0.08 * si }}
              >
                <div className="mb-1 flex justify-between items-center">
                  <span className="text-xs text-foreground">{skill.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-pixel text-[7px] text-muted-foreground">
                      {getLevelTitle(skill.level)}
                    </span>
                    <span className="font-pixel text-[8px] text-accent">
                      LV{Math.round(skill.level / 10)}
                    </span>
                  </div>
                </div>
                <div className="relative h-4 w-full overflow-hidden rounded-sm bg-muted border border-border">
                  <motion.div
                    className={`h-full ${cat.color} relative`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: 0.15 * ci + 0.1 * si, duration: 1, ease: "easeOut" }}
                  >
                    <div className="shimmer absolute inset-0" />
                  </motion.div>
                  {/* XP markers */}
                  {[25, 50, 75].map((mark) => (
                    <div
                      key={mark}
                      className="absolute top-0 h-full w-px bg-border"
                      style={{ left: `${mark}%` }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          {/* Total XP */}
          <div className="mt-3 flex justify-end">
            <span className="font-pixel text-[7px] text-muted-foreground">
              TOTAL XP: {cat.skills.reduce((a, s) => a + s.level * 10, 0)}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
