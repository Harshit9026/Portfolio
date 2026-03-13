// import { motion } from "framer-motion";
// import SectionWrapper from "./SectionWrapper";

// interface Props { onBack: () => void }

// const experiences = [
//   { company: "[Company 1]", role: "[Role Title]", duration: "20XX - Present", desc: "[Describe your responsibilities and achievements here.]", xp: "+500 XP", icon: "🏢" },
//   { company: "[Company 2]", role: "[Role Title]", duration: "20XX - 20XX", desc: "[Describe your responsibilities and achievements here.]", xp: "+350 XP", icon: "🚀" },
//   { company: "[Company 3]", role: "[Role Title]", duration: "20XX - 20XX", desc: "[Describe your responsibilities and achievements here.]", xp: "+200 XP", icon: "💡" },
// ];

// const ExperienceSection = ({ onBack }: Props) => (
//   <SectionWrapper title="💼 EXPERIENCE LOG" onBack={onBack}>
//     <p className="mb-6 text-xs text-muted-foreground">
//       Battle log of professional quests completed.
//     </p>
//     <div className="relative ml-6 border-l-2 border-primary/30 pl-8 space-y-8">
//       {experiences.map((exp, i) => (
//         <motion.div
//           key={i}
//           className="pixel-border relative rounded bg-card p-5 group"
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.2 * i, type: "spring" }}
//           whileHover={{ x: 4, scale: 1.01 }}
//         >
//           {/* Timeline dot with pulse */}
//           <motion.div
//             className="absolute -left-[2.85rem] top-5 flex items-center justify-center"
//             animate={{ scale: [1, 1.2, 1] }}
//             transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
//           >
//             <div className="h-5 w-5 rounded-full border-2 border-primary bg-background flex items-center justify-center text-[8px]">
//               {exp.icon}
//             </div>
//           </motion.div>

//           <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
//             <h3 className="font-pixel text-xs text-primary">{exp.company}</h3>
//             <div className="flex items-center gap-2">
//               <span className="font-pixel text-[8px] text-accent">{exp.duration}</span>
//               <span className="rounded bg-primary/10 px-2 py-0.5 font-pixel text-[7px] text-primary opacity-0 transition-opacity group-hover:opacity-100">
//                 {exp.xp}
//               </span>
//             </div>
//           </div>
//           <p className="mb-2 font-pixel text-[9px] text-secondary">{exp.role}</p>
//           <p className="text-xs leading-relaxed text-muted-foreground">{exp.desc}</p>
//         </motion.div>
//       ))}

//       {/* End marker */}
//       <motion.div
//         className="absolute -left-[0.45rem] bottom-0 h-3 w-3 rounded-full bg-primary"
//         animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
//         transition={{ duration: 2, repeat: Infinity }}
//       />
//     </div>
//   </SectionWrapper>
// );

// export default ExperienceSection;


import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

interface Props { onBack: () => void }

const experiences = [
  {
    company: "Freelance Web Developer",
    role: "Full Stack Developer — BagASoil & Bharat Hyper Mart",
    duration: "Oct 2025 – Feb 2026",
    desc: "Engineered scalable full-stack e-commerce platforms with dynamic product listings, cart management, and real-time order tracking. Designed secure RESTful APIs with JWT authentication and integrated Razorpay payment gateway with fault-tolerant transaction handling, reducing page load times by 30%.",
    xp: "+750 XP",
    icon: "💻",
  },
  {
    company: "Hacktoberfest",
    role: "Open Source Contributor",
    duration: "Oct 2025",
    desc: "Contributed to open-source JavaScript and Node.js repositories by submitting 8+ high-quality pull requests, all successfully merged. Gained hands-on experience with Git workflows, issue tracking, and collaborative code reviews across global repositories.",
    xp: "+400 XP",
    icon: "🌍",
  },
  {
    company: "SStruence Innovations Pvt. Ltd.",
    role: "Software Developer Intern — React.js, Tailwind, REST APIs",
    duration: "Mar 2024 – May 2024",
    desc: "Improved UI architecture and optimized layout workflows, increasing user engagement by 20%. Implemented performant animations with cross-device compatibility, contributing to a 15% rise in mobile traffic and 25% reduction in bounce rate. Collaborated with backend teams to integrate REST APIs and enhance application responsiveness.",
    xp: "+500 XP",
    icon: "🚀",
  },
  {
    company: "SAE India — NIT Durgapur",
    role: "Senior Web Developer",
    duration: "2022 – 2026",
    desc: "Led the web development initiatives for the SAE India collegiate chapter at NIT Durgapur, designing and maintaining the club's official web presence. Mentored junior developers, conducted workshops on modern frontend practices, and coordinated with cross-functional teams to deliver event platforms and registration portals for national-level competitions.",
    xp: "+350 XP",
    icon: "🏛️",
  },
];

const ExperienceSection = ({ onBack }: Props) => (
  <SectionWrapper title="💼 EXPERIENCE LOG" onBack={onBack}>
    <p className="mb-6 text-xs text-muted-foreground">
      Battle log of professional quests completed.
    </p>
    <div className="relative ml-6 border-l-2 border-primary/30 pl-8 space-y-8">
      {experiences.map((exp, i) => (
        <motion.div
          key={i}
          className="pixel-border relative rounded bg-card p-5 group"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 * i, type: "spring" }}
          whileHover={{ x: 4, scale: 1.01 }}
        >
          {/* Timeline dot with pulse */}
          <motion.div
            className="absolute -left-[2.85rem] top-5 flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
          >
            <div className="h-5 w-5 rounded-full border-2 border-primary bg-background flex items-center justify-center text-[8px]">
              {exp.icon}
            </div>
          </motion.div>

          <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-pixel text-xs text-primary">{exp.company}</h3>
            <div className="flex items-center gap-2">
              <span className="font-pixel text-[8px] text-accent">{exp.duration}</span>
              <span className="rounded bg-primary/10 px-2 py-0.5 font-pixel text-[7px] text-primary opacity-0 transition-opacity group-hover:opacity-100">
                {exp.xp}
              </span>
            </div>
          </div>
          <p className="mb-2 font-pixel text-[9px] text-secondary">{exp.role}</p>
          <p className="text-xs leading-relaxed text-muted-foreground">{exp.desc}</p>
        </motion.div>
      ))}

      {/* End marker */}
      <motion.div
        className="absolute -left-[0.45rem] bottom-0 h-3 w-3 rounded-full bg-primary"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </div>
  </SectionWrapper>
);

export default ExperienceSection;
