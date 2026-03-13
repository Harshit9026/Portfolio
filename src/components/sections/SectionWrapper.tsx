import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { ReactNode, forwardRef } from "react";

interface SectionWrapperProps {
  title: string;
  onBack: () => void;
  children: ReactNode;
}

const SectionWrapper = forwardRef<HTMLDivElement, SectionWrapperProps>(
  ({ title, onBack, children }, ref) => (
    <motion.div
      ref={ref}
      className="crt-effect min-h-screen w-full grid-bg px-4 pb-8 pt-16 md:px-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
    >
      <div className="scanlines pointer-events-none absolute inset-0 z-10" />
      <div className="relative z-20 mx-auto max-w-5xl">
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 font-pixel text-[10px] text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft size={14} /> ◀ BACK TO MAP
        </button>
        <h2 className="mb-8 font-pixel text-base text-primary text-glow-primary md:text-xl">
          {title}
        </h2>
        {children}
      </div>
    </motion.div>
  )
);

SectionWrapper.displayName = "SectionWrapper";

export default SectionWrapper;
