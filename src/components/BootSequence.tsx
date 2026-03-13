import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface BootSequenceProps {
  onComplete: () => void;
}

const bootLines = [
  { text: "BIOS v1.337 - DEVELOPER PORTFOLIO OS", delay: 0 },
  { text: "Checking memory... 16384 MB OK", delay: 400 },
  { text: "Loading pixel shader v4.2...", delay: 800 },
  { text: "Initializing neural interface...", delay: 1200 },
  { text: "Mounting skill tree database...", delay: 1600 },
  { text: "Compiling project archives...", delay: 2000 },
  { text: "Calibrating creativity engine... [████████████] 100%", delay: 2400 },
  { text: "Establishing connection to the matrix...", delay: 2800 },
  { text: "", delay: 3200 },
  { text: "ALL SYSTEMS OPERATIONAL", delay: 3400 },
  { text: "WELCOME, PLAYER.", delay: 3800 },
];

const BootSequence = ({ onComplete }: BootSequenceProps) => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    bootLines.forEach((line, i) => {
      timers.push(
        setTimeout(() => setVisibleLines(i + 1), line.delay)
      );
    });

    timers.push(setTimeout(() => onComplete(), 4800));
    timers.push(setTimeout(() => setShowSkip(true), 600));

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col justify-center bg-background p-8 md:p-16 crt-on"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-2xl font-mono">
        {bootLines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`mb-1 text-xs md:text-sm ${
              i === bootLines.length - 1
                ? "text-primary text-glow-primary font-pixel text-xs mt-2"
                : i === bootLines.length - 2
                ? "text-accent font-bold mt-2"
                : "text-foreground/70"
            }`}
          >
            <span className="text-primary/50 mr-2">{">"}</span>
            {line.text}
            {i === visibleLines - 1 && (
              <span className="animate-blink ml-1 text-primary">█</span>
            )}
          </motion.div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-8 max-w-md">
        <div className="h-2 w-full overflow-hidden rounded-sm border border-border bg-muted">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4.5, ease: "linear" }}
          />
        </div>
      </div>

      <AnimatePresence>
        {showSkip && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute bottom-8 right-8 font-pixel text-[10px] text-muted-foreground transition-colors hover:text-primary"
            onClick={onComplete}
          >
            SKIP ▶
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default BootSequence;
