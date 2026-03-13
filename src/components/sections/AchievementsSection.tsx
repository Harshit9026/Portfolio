// import { motion } from "framer-motion";
// import { Trophy, Award, Star, Medal, Crown, Gem } from "lucide-react";
// import { useState } from "react";
// import SectionWrapper from "./SectionWrapper";

// interface Props { onBack: () => void }

// const achievements = [
//   { title: "[Achievement 1]", desc: "[Description]", icon: <Trophy size={24} />, rarity: "LEGENDARY", color: "text-accent" },
//   { title: "[Achievement 2]", desc: "[Description]", icon: <Crown size={24} />, rarity: "EPIC", color: "text-secondary" },
//   { title: "[Achievement 3]", desc: "[Description]", icon: <Award size={24} />, rarity: "RARE", color: "text-neon-cyan" },
//   { title: "[Achievement 4]", desc: "[Description]", icon: <Star size={24} />, rarity: "UNCOMMON", color: "text-primary" },
//   { title: "[Achievement 5]", desc: "[Description]", icon: <Medal size={24} />, rarity: "LEGENDARY", color: "text-accent" },
//   { title: "[Achievement 6]", desc: "[Description]", icon: <Gem size={24} />, rarity: "EPIC", color: "text-secondary" },
// ];

// const rarityColors: Record<string, string> = {
//   LEGENDARY: "border-accent bg-accent/5",
//   EPIC: "border-secondary bg-secondary/5",
//   RARE: "border-neon-cyan bg-neon-cyan/5",
//   UNCOMMON: "border-primary bg-primary/5",
// };

// const AchievementsSection = ({ onBack }: Props) => {
//   const [flipped, setFlipped] = useState<Set<number>>(new Set());

//   const toggleFlip = (i: number) => {
//     setFlipped((prev) => {
//       const next = new Set(prev);
//       if (next.has(i)) next.delete(i);
//       else next.add(i);
//       return next;
//     });
//   };

//   return (
//     <SectionWrapper title="🏆 TROPHY ROOM" onBack={onBack}>
//       <p className="mb-6 text-xs text-muted-foreground">
//         Click a trophy to flip it. Collect them all!
//       </p>
//       <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//         {achievements.map((a, i) => (
//           <motion.div
//             key={i}
//             className={`cursor-pointer rounded border-2 p-5 transition-all ${rarityColors[a.rarity]}`}
//             initial={{ scale: 0.8, opacity: 0, rotateY: 180 }}
//             animate={{ scale: 1, opacity: 1, rotateY: flipped.has(i) ? 180 : 0 }}
//             transition={{ delay: 0.1 * i, type: "spring" }}
//             whileHover={{ scale: 1.05, y: -3 }}
//             onClick={() => toggleFlip(i)}
//             style={{ perspective: 1000 }}
//           >
//             {!flipped.has(i) ? (
//               <div className="flex flex-col items-center gap-3 text-center">
//                 <motion.div
//                   className={`${a.color}`}
//                   animate={{ rotate: [0, 5, -5, 0] }}
//                   transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
//                 >
//                   {a.icon}
//                 </motion.div>
//                 <h3 className="font-pixel text-[10px] text-foreground">{a.title}</h3>
//                 <span className={`font-pixel text-[7px] ${a.color}`}>{a.rarity}</span>
//               </div>
//             ) : (
//               <div className="flex flex-col items-center gap-2 text-center" style={{ transform: "rotateY(180deg)" }}>
//                 <p className="text-xs text-muted-foreground">{a.desc}</p>
//                 <span className="font-pixel text-[7px] text-muted-foreground">TAP TO FLIP</span>
//               </div>
//             )}
//           </motion.div>
//         ))}
//       </div>
//     </SectionWrapper>
//   );
// };

// export default AchievementsSection;


import { motion } from "framer-motion";
import { Trophy, Award, Star, Medal, Crown, Gem, Code, Zap, Globe, Flame } from "lucide-react";
import { useState } from "react";
import SectionWrapper from "./SectionWrapper";

interface Props { onBack: () => void }

const achievements = [
  {
    title: "Codeforces Specialist",
    desc: "Achieved Specialist rank on Codeforces with a max rating of 1573. Secured rank 976 in Codeforces Round 1061 (Div. 3) among 20,000+ global participants.",
    icon: <Crown size={24} />,
    rarity: "LEGENDARY",
    color: "text-accent",
  },
  {
    title: "CodeChef 4-Star",
    desc: "Earned 4-Star rating on CodeChef (max rating 1872) and achieved rank 320 in CodeChef Starter IV (Div. 4) among 3,400+ participants worldwide.",
    icon: <Star size={24} />,
    rarity: "LEGENDARY",
    color: "text-accent",
  },
  {
    title: "900+ LeetCode Solved",
    desc: "Solved 900+ Data Structures & Algorithms problems on LeetCode (max rating 1635) and GeeksForGeeks, demonstrating deep problem-solving expertise.",
    icon: <Code size={24} />,
    rarity: "EPIC",
    color: "text-secondary",
  },
  {
    title: "Meta HackerCup 2025",
    desc: "Participated in Meta HackerCup 2025 and ranked 5146 among 13,000+ global participants — competing on the world stage against elite programmers.",
    icon: <Globe size={24} />,
    rarity: "EPIC",
    color: "text-secondary",
  },
  {
    title: "Hack The Wall — Top 50",
    desc: "Secured a Top 50 position in the Hack The Wall Hackathon in a global competition, showcasing rapid prototyping and full-stack execution under pressure.",
    icon: <Trophy size={24} />,
    rarity: "RARE",
    color: "text-neon-cyan",
  },
  {
    title: "Hacktoberfest Contributor",
    desc: "Submitted 8+ high-quality pull requests across JavaScript and Node.js open-source repos during Hacktoberfest 2025 — all successfully merged by maintainers.",
    icon: <Gem size={24} />,
    rarity: "RARE",
    color: "text-neon-cyan",
  },
  {
    title: "Burn The Brain — 3rd Place",
    desc: "Claimed 3rd place and a ₹3,000 cash prize at the Burn The Brain Hackathon conducted by the CSS Club — forged under fire, built to win.",
    icon: <Flame size={24} />,
    rarity: "EPIC",
    color: "text-secondary",
  },
 
];

const rarityColors: Record<string, string> = {
  LEGENDARY: "border-accent bg-accent/5",
  EPIC:      "border-secondary bg-secondary/5",
  RARE:      "border-neon-cyan bg-neon-cyan/5",
  UNCOMMON:  "border-primary bg-primary/5",
};

const rarityOrder = ["LEGENDARY", "EPIC", "RARE", "UNCOMMON"];

const AchievementsSection = ({ onBack }: Props) => {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());

  const toggleFlip = (i: number) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <SectionWrapper title="🏆 TROPHY ROOM" onBack={onBack}>
      <p className="mb-2 text-xs text-muted-foreground">
        Click a trophy to flip it and reveal the story. Collect them all!
      </p>

      {/* Rarity legend */}
      <div className="mb-6 flex flex-wrap gap-3">
        {rarityOrder.map((r) => (
          <span key={r} className={`rounded border px-2 py-0.5 font-pixel text-[6px] ${rarityColors[r]} ${
            r === "LEGENDARY" ? "text-accent"
            : r === "EPIC"    ? "text-secondary"
            : r === "RARE"    ? "text-neon-cyan"
            : "text-primary"
          }`}>
            {r}
          </span>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            className={`cursor-pointer rounded border-2 p-5 transition-all ${rarityColors[a.rarity]}`}
            initial={{ scale: 0.8, opacity: 0, rotateY: 180 }}
            animate={{ scale: 1, opacity: 1, rotateY: flipped.has(i) ? 180 : 0 }}
            transition={{ delay: 0.07 * i, type: "spring" }}
            whileHover={{ scale: 1.05, y: -3 }}
            onClick={() => toggleFlip(i)}
            style={{ perspective: 1000 }}
          >
            {!flipped.has(i) ? (
              <div className="flex flex-col items-center gap-3 text-center">
                <motion.div
                  className={a.color}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                >
                  {a.icon}
                </motion.div>
                <h3 className="font-pixel text-[10px] text-foreground leading-snug">{a.title}</h3>
                <span className={`font-pixel text-[7px] ${a.color}`}>{a.rarity}</span>
                <span className="font-pixel text-[6px] text-muted-foreground animate-pulse">▶ CLICK TO REVEAL</span>
              </div>
            ) : (
              <div
                className="flex flex-col items-center gap-2 text-center"
                style={{ transform: "rotateY(180deg)" }}
              >
                <p className="text-xs leading-relaxed text-muted-foreground">{a.desc}</p>
                <span className="mt-1 font-pixel text-[7px] text-muted-foreground">▶ TAP TO FLIP BACK</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Completion counter */}
      <motion.p
        className="mt-6 text-center font-pixel text-[8px] text-muted-foreground"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {flipped.size} / {achievements.length} trophies inspected
      </motion.p>
    </SectionWrapper>
  );
};

export default AchievementsSection;