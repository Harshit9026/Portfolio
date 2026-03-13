// import { motion } from "framer-motion";
// import { Github, ExternalLink, Eye } from "lucide-react";
// import { useState } from "react";
// import SectionWrapper from "./SectionWrapper";

// interface Props { onBack: () => void }

// const projects = Array.from({ length: 6 }, (_, i) => ({
//   id: i,
//   title: `[Project ${i + 1} Title]`,
//   description: "[Short project description goes here. Explain what it does and why it matters.]",
//   techStack: ["[Tech 1]", "[Tech 2]", "[Tech 3]"],
//   difficulty: ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐"][Math.floor(Math.random() * 4)],
//   status: ["COMPLETED", "IN PROGRESS", "LEGENDARY"][i % 3],
// }));

// const ProjectsSection = ({ onBack }: Props) => {
//   const [hoveredId, setHoveredId] = useState<number | null>(null);

//   return (
//     <SectionWrapper title="🗂️ PROJECT QUESTS" onBack={onBack}>
//       <p className="mb-6 text-xs text-muted-foreground">
//         Each project is a quest completed. Hover to reveal details.
//       </p>
//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {projects.map((p, i) => (
//           <motion.div
//             key={p.id}
//             className="pixel-border group relative overflow-hidden rounded bg-card transition-all"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.08 * i }}
//             whileHover={{ y: -6 }}
//             onHoverStart={() => setHoveredId(p.id)}
//             onHoverEnd={() => setHoveredId(null)}
//           >
//             {/* Status badge */}
//             <div className={`absolute right-2 top-2 z-10 rounded px-2 py-0.5 font-pixel text-[6px] ${
//               p.status === "LEGENDARY" 
//                 ? "bg-accent/20 text-accent" 
//                 : p.status === "IN PROGRESS" 
//                 ? "bg-secondary/20 text-secondary" 
//                 : "bg-primary/20 text-primary"
//             }`}>
//               {p.status}
//             </div>

//             {/* Screenshot placeholder */}
//             <div className="relative flex h-36 items-center justify-center bg-muted font-pixel text-xs text-muted-foreground overflow-hidden">
//               [Screenshot]
//               {/* Hover overlay */}
//               <motion.div
//                 className="absolute inset-0 flex items-center justify-center bg-background/80"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: hoveredId === p.id ? 1 : 0 }}
//               >
//                 <Eye className="text-primary" size={28} />
//               </motion.div>
//               {/* Scan line effect on hover */}
//               {hoveredId === p.id && (
//                 <motion.div
//                   className="absolute left-0 h-0.5 w-full bg-primary/50"
//                   initial={{ top: 0 }}
//                   animate={{ top: "100%" }}
//                   transition={{ duration: 1, repeat: Infinity }}
//                 />
//               )}
//             </div>

//             <div className="p-4">
//               <div className="mb-1 flex items-center justify-between">
//                 <h3 className="font-pixel text-[10px] text-primary">{p.title}</h3>
//                 <span className="text-[10px]">{p.difficulty}</span>
//               </div>
//               <p className="mb-3 text-[11px] leading-relaxed text-muted-foreground">{p.description}</p>
//               <div className="mb-3 flex flex-wrap gap-1.5">
//                 {p.techStack.map((t) => (
//                   <span key={t} className="rounded bg-muted px-1.5 py-0.5 font-pixel text-[6px] text-accent">
//                     {t}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex gap-3 border-t border-border pt-3">
//                 <a href="#" className="flex items-center gap-1 text-[11px] text-muted-foreground transition-colors hover:text-primary">
//                   <Github size={12} /> Code
//                 </a>
//                 <a href="#" className="flex items-center gap-1 text-[11px] text-muted-foreground transition-colors hover:text-neon-cyan">
//                   <ExternalLink size={12} /> Demo
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </SectionWrapper>
//   );
// };

// export default ProjectsSection;

import { motion } from "framer-motion";
import { Github, ExternalLink, Eye } from "lucide-react";
import { useState } from "react";
import SectionWrapper from "./SectionWrapper";

interface Props { onBack: () => void }

const projects = [
  {
    id: 0,
    title: "Fleet Monitoring Dashboard",
    description:
      "Real-time telemetry dashboard using React.js & WebSockets for 10+ autonomous robotic units. Scalable FastAPI backend with RESTful and WebSocket APIs for seamless bidirectional communication.",
    image: "https://th.bing.com/th/id/OIP.qiO9rGEk0snF4B1M_5yIswHaFB?r=0&rs=1&pid=ImgDetMain",
    techStack: ["React", "FastAPI", "WebSockets", "Node.js", "MongoDB"],
    difficulty: "⭐⭐⭐⭐",
    status: "COMPLETED",
    category: "Full Stack",
    githubUrl: "#",
    liveUrl: null,
    date: "2024",
  },
  {
    id: 1,
    title: "Online Book Store",
    description:
      "Full-stack MERN e-commerce app with secure JWT auth, dynamic inventory management, and a feature-rich admin panel for book listing and operational control.",
    image: "https://i.pinimg.com/originals/1d/18/b8/1d18b8bd3ac726dd772a17fbbf4dd01e.jpg",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    difficulty: "⭐⭐⭐",
    status: "COMPLETED",
    category: "Full Stack",
    githubUrl: "#",
    liveUrl: null,
    date: "2024",
  },
  {
    id: 2,
    title: "Food Ordering App",
    description:
      "Food ordering app with JWT auth, shopping cart, and real-time order tracking. Integrated Stripe API for secure payments and dynamic order status updates.",
    image: "https://i.pinimg.com/originals/80/7e/51/807e51d4b964d37bc9861caf91d8b896.jpg",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    difficulty: "⭐⭐⭐",
    status: "COMPLETED",
    category: "Full Stack",
    githubUrl: "#",
    liveUrl: "#",
    date: "2024",
  },
  {
    id: 3,
    title: "Modern Business App",
    description:
      "A clean, responsive business landing page designed and implemented with modern UI/UX principles and component-driven architecture.",
    image: "https://th.bing.com/th/id/OIP.Q7w0u3uboyvAP4nSqntj_gHaED?r=0&rs=1&pid=ImgDetMain",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    difficulty: "⭐⭐",
    status: "COMPLETED",
    category: "Frontend",
    githubUrl: "#",
    liveUrl: null,
    date: "2023",
  },
  {
    id: 4,
    title: "Travel App",
    description:
      "Interactive travel web application with rich visual UI, destination browsing, and responsive layouts built with vanilla web technologies and React.",
    image: "https://th.bing.com/th/id/OIP.B2XaCqJM_nphDCKLVMF8lAHaET?r=0&rs=1&pid=ImgDetMain",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    difficulty: "⭐⭐",
    status: "COMPLETED",
    category: "Frontend",
    githubUrl: "#",
    liveUrl: null,
    date: "2023",
  },
  {
    id: 5,
    title: "Real-Time Chat App",
    description:
      "Full-stack chat application with Socket.io for real-time messaging, user authentication, and persistent message history via MongoDB.",
    image: "https://th.bing.com/th/id/OIP.mrTTZ-_NEDPPGbXVM3F6XgHaFj?r=0&rs=1&pid=ImgDetMain",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    difficulty: "⭐⭐⭐",
    status: "COMPLETED",
    category: "Full Stack",
    githubUrl: "#",
    liveUrl: null,
    date: "2024",
  },
  {
    id: 6,
    title: "AI Code Viewer",
    description:
      "AI-powered code review tool using the OpenAI API. Analyzes and explains code snippets, suggests improvements, and helps developers learn faster.",
    image: "https://th.bing.com/th/id/OIP.3sCNQMza0Ai-NaRgE_f-IQHaEc?r=0&rs=1&pid=ImgDetMain",
    techStack: ["React", "Node.js", "OpenAI"],
    difficulty: "⭐⭐⭐",
    status: "LEGENDARY",
    category: "AI/ML",
    githubUrl: "#",
    liveUrl: null,
    date: "2025",
  },
  {
    id: 7,
    title: "AI SaaS Application",
    description:
      "Multi-feature AI SaaS platform: generate articles, remove backgrounds, remove objects from images, and review resumes — all powered by OpenAI.",
    image: "https://utfs.io/f/08857d36-2392-4182-9f6f-5fb93a8e8543-2ytnxz.jpg",
    techStack: ["Next.js", "Express", "PostgreSQL", "Neon", "Node.js", "OpenAI"],
    difficulty: "⭐⭐⭐⭐",
    status: "LEGENDARY",
    category: "AI/ML",
    githubUrl: "#",
    liveUrl: null,
    date: "2025",
  },
];

const categories = ["All", "Full Stack", "AI/ML", "Frontend"] as const;

const statusStyles: Record<string, string> = {
  LEGENDARY:    "bg-accent/20 text-accent",
  "IN PROGRESS":"bg-secondary/20 text-secondary",
  COMPLETED:    "bg-primary/20 text-primary",
};

const ProjectsSection = ({ onBack }: Props) => {
  const [hoveredId,      setHoveredId]      = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <SectionWrapper title="🗂️ PROJECT QUESTS" onBack={onBack}>
      <p className="mb-4 text-xs text-muted-foreground">
        Each project is a quest completed. Hover to reveal details.
      </p>

      {/* Category filter */}
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded px-3 py-1 font-pixel text-[8px] transition-all ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <motion.div
            key={p.id}
            className="pixel-border group relative overflow-hidden rounded bg-card transition-all"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * i }}
            whileHover={{ y: -6 }}
            onHoverStart={() => setHoveredId(p.id)}
            onHoverEnd={() => setHoveredId(null)}
          >
            {/* Status badge */}
            <div className={`absolute right-2 top-2 z-10 rounded px-2 py-0.5 font-pixel text-[6px] ${statusStyles[p.status]}`}>
              {p.status}
            </div>

            {/* Project image */}
            <div className="relative h-36 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-background/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === p.id ? 1 : 0 }}
              >
                <Eye className="text-primary" size={28} />
              </motion.div>
              {/* Scan line */}
              {hoveredId === p.id && (
                <motion.div
                  className="absolute left-0 h-0.5 w-full bg-primary/50"
                  initial={{ top: 0 }}
                  animate={{ top: "100%" }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
              {/* Date badge */}
              <span className="absolute bottom-2 left-2 rounded bg-background/70 px-1.5 py-0.5 font-pixel text-[6px] text-muted-foreground backdrop-blur-sm">
                {p.date}
              </span>
            </div>

            <div className="p-4">
              <div className="mb-1 flex items-center justify-between">
                <h3 className="font-pixel text-[10px] text-primary leading-tight">{p.title}</h3>
                <span className="ml-2 shrink-0 text-[10px]">{p.difficulty}</span>
              </div>
              <p className="mb-3 text-[11px] leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <div className="mb-3 flex flex-wrap gap-1.5">
                {p.techStack.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-muted px-1.5 py-0.5 font-pixel text-[6px] text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 border-t border-border pt-3">
                <a
                  href={p.githubUrl}
                  className="flex items-center gap-1 text-[11px] text-muted-foreground transition-colors hover:text-primary"
                >
                  <Github size={12} /> Code
                </a>
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    className="flex items-center gap-1 text-[11px] text-muted-foreground transition-colors hover:text-neon-cyan"
                  >
                    <ExternalLink size={12} /> Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;