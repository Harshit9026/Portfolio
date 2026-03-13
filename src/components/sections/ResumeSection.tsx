import { motion } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

interface Props { onBack: () => void }

const ResumeSection = ({ onBack }: Props) => (
  <SectionWrapper title="📜 RESUME SCROLL" onBack={onBack}>
    <div className="flex flex-col items-center gap-8">
      {/* Scroll decoration */}
      <motion.div
        className="pixel-border relative w-full max-w-lg rounded bg-card p-8 text-center"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        style={{ transformOrigin: "top" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <FileText className="mx-auto mb-4 text-primary" size={48} />
          <h3 className="mb-2 font-pixel text-sm text-primary text-glow-primary">
            ANCIENT SCROLL OF RESUME
          </h3>
          <p className="mb-6 text-sm text-muted-foreground">
            [ A seasoned full-stack developer skilled in React, Node.js, and modern web
  technologies — with real-world experience from internships, freelance projects,
  and open-source contributions. Download the scroll to uncover the full quest log..]
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <motion.a
              href="https://drive.google.com/file/d/13idQMbTn4t1tH391GLqz9piftK1Wki8e/view?usp=sharing"
              className="pixel-border flex items-center gap-3 rounded bg-muted px-6 py-3 font-pixel text-[10px] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={16} />
              DOWNLOAD PDF
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/13idQMbTn4t1tH391GLqz9piftK1Wki8e/view?usp=sharing"
              className="pixel-border flex items-center gap-3 rounded bg-muted px-6 py-3 font-pixel text-[10px] text-secondary transition-all hover:bg-secondary hover:text-secondary-foreground"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye size={16} />
              VIEW ONLINE
            </motion.a>
          </div>
        </motion.div>

        {/* Decorative corners */}
        <div className="absolute left-2 top-2 font-pixel text-[10px] text-primary/30">╔</div>
        <div className="absolute right-2 top-2 font-pixel text-[10px] text-primary/30">╗</div>
        <div className="absolute bottom-2 left-2 font-pixel text-[10px] text-primary/30">╚</div>
        <div className="absolute bottom-2 right-2 font-pixel text-[10px] text-primary/30">╝</div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default ResumeSection;
