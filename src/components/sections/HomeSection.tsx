import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

interface Props { onBack: () => void }

const HomeSection = ({ onBack }: Props) => (
  <SectionWrapper title="🏠 HOME BASE" onBack={onBack}>
    <motion.div
      className="pixel-border rounded bg-card p-6 md:p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Profile row */}
      <div className="mb-6 flex items-center gap-6">

        {/* Photo */}
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

        {/* Name & role */}
        <div>
          <h3 className="font-pixel text-sm text-primary mb-2">Harshit Shukla</h3>
          <p className="font-pixel text-[8px] text-secondary mb-1">Software Developer</p>
          <p className="font-pixel text-[8px] text-accent">Problem Solver</p>
        </div>
      </div>

      {/* Bio */}
      <p className="text-sm leading-relaxed text-foreground">
        I'm a passionate full-stack developer who specializes in building responsive,
        scalable web applications using React, Node.js, and modern web technologies.
        Through hands-on projects, internships, and hackathons, I've developed a strong
        foundation in frontend and backend development, and I'm always eager to learn
        and solve real-world problems.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        When I'm not coding, you'll find me exploring new technologies, contributing to
        open-source projects, or enjoying a good cup of coffee while planning my next
        creative project.
      </p>
    </motion.div>
  </SectionWrapper>
);

export default HomeSection;