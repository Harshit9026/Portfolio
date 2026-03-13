import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

interface Props { onBack: () => void }

const statPlaceholders = [
  { label: "Projects", value: "37", icon: "🗂️" },
  { label: "Years Exp", value: "0-1", icon: "⏳" },
  { label: "Contributions", value: "150", icon: "💾" },
  { label: "Coffees", value: "∞", icon: "☕" },
];

const timelinePlaceholders = [
  { year: "2019", title: "[10th]", desc: "[St. Don Bosco Senior Secondary School]", icon: "🎓" },
  { year: "2021", title: "[12th]", desc: "[St. Don Bosco Senior Secondary School]", icon: "🎓" },
  { year: "2022-2026", title: "[Bachelors Degree]", desc: "[National Institute of Technology, Durgapur]", icon: "📚" },
];

const AboutSection = ({ onBack }: Props) => (
  <SectionWrapper title="📖 ABOUT ME" onBack={onBack}>
    {/* Character Card */}
    <motion.div
      className="pixel-border mb-6 rounded bg-card p-6"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="h-16 w-16 shrink-0 rounded border border-border bg-muted flex items-center justify-center font-pixel text-[7px] text-muted-foreground animate-float">
          AVATAR
        </div>
        <div>
          <h3 className="font-pixel text-xs text-primary mb-1">[Harshit Shukla]</h3>
          <p className="font-pixel text-[7px] text-secondary">CLASS: [Software Developer]</p>
          <p className="font-pixel text-[7px] text-accent">RANK: [Fresher]</p>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-foreground">
        [I’m a passionate software developer who enjoys building scalable and impactful digital products. With a strong foundation in full-stack development and problem solving, I love turning complex ideas into clean, efficient solutions. I’m driven by curiosity, continuous learning, and the challenge of creating technology that makes a real difference.]
      </p>
    </motion.div>

    {/* Stats Grid */}
    <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
      {statPlaceholders.map((s, i) => (
        <motion.div
          key={s.label}
          className="pixel-border flex flex-col items-center rounded bg-card p-4"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.1 * i, type: "spring" }}
          whileHover={{ scale: 1.08, rotate: 2 }}
        >
          <span className="text-xl mb-1">{s.icon}</span>
          <motion.span
            className="font-pixel text-lg text-accent text-glow-accent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + 0.1 * i }}
          >
            {s.value}
          </motion.span>
          <span className="mt-1 font-pixel text-[7px] text-muted-foreground">{s.label}</span>
        </motion.div>
      ))}
    </div>

    {/* Education */}
    <h3 className="mb-4 font-pixel text-sm text-secondary text-glow-secondary">🎓 EDUCATION</h3>
    <div className="space-y-4">
      {timelinePlaceholders.map((item, i) => (
        <motion.div
          key={i}
          className="pixel-border flex gap-4 rounded bg-card p-4"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 + 0.2 * i, type: "spring" }}
          whileHover={{ x: 4 }}
        >
          <span className="text-2xl">{item.icon}</span>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-pixel text-[9px] text-accent">{item.year}</span>
            </div>
            <p className="font-pixel text-[10px] text-foreground">{item.title}</p>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default AboutSection;
