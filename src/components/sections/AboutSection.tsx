import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

interface Props { onBack: () => void }

const statPlaceholders = [
  { label: "Projects",      value: "8+",  icon: "🗂️" },
  { label: "Years Exp",     value: "0-1", icon: "⏳" },
  { label: "Contributions", value: "8+",  icon: "💾" },
  { label: "Coffees",       value: "∞",   icon: "☕" },
];

const timelinePlaceholders = [
  { year: "2019",      title: "10th Grade",       desc: "St. Don Bosco Senior Secondary School", icon: "🎓" },
  { year: "2021",      title: "12th Grade",       desc: "St. Don Bosco Senior Secondary School", icon: "🎓" },
  { year: "2022–2026", title: "Bachelor of Technology", desc: "National Institute of Technology, Durgapur", icon: "📚" },
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

        {/* Profile photo */}
        <motion.div
          className="relative h-20 w-20 shrink-0 overflow-hidden rounded border-2 border-primary"
          whileHover={{ scale: 1.05, boxShadow: "0 0 16px hsl(160 100% 50% / 0.5)" }}
        >
          <img
            src="/Harshit_profile_pic.jpg"
            alt="Harshit Shukla"
            className="h-full w-full object-cover object-top"
            style={{ transform: "scale(1.1)", transformOrigin: "top center" }}
          />
          {/* Scanline overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,136,0.04) 3px,rgba(0,255,136,0.04) 4px)",
            }}
          />
          {/* Pixel corners */}
          <div className="absolute left-0 top-0 h-1.5 w-1.5 bg-primary" />
          <div className="absolute right-0 top-0 h-1.5 w-1.5 bg-primary" />
          <div className="absolute bottom-0 left-0 h-1.5 w-1.5 bg-primary" />
          <div className="absolute bottom-0 right-0 h-1.5 w-1.5 bg-primary" />
        </motion.div>

        {/* Name / class / rank */}
        <div>
          <h3 className="font-pixel text-xs text-primary mb-2">Harshit Shukla</h3>
          <p className="font-pixel text-[7px] text-secondary mb-1">CLASS: Full-Stack Developer</p>
          <p className="font-pixel text-[7px] text-accent mb-1">RANK: Fresher</p>
          <p className="font-pixel text-[7px] text-muted-foreground">GUILD: NIT Durgapur</p>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-foreground">
        I'm a passionate software developer who enjoys building scalable and impactful
        digital products. With a strong foundation in full-stack development and
        problem solving, I love turning complex ideas into clean, efficient solutions.
        Driven by curiosity, continuous learning, and the challenge of creating
        technology that makes a real difference.
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

    {/* Education Timeline */}
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
            <p className="font-pixel text-[10px] text-foreground mb-0.5">{item.title}</p>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>

  </SectionWrapper>
);

export default AboutSection;