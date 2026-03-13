// import { motion } from "framer-motion";
// import { Volume2, VolumeX, Gamepad2 } from "lucide-react";
// import { useState } from "react";
// import { useTypingEffect } from "@/hooks/useGameEffects";

// interface GameLandingProps {
//   onStart: () => void;
// }

// const StarField = () => (
//   <div className="absolute inset-0 overflow-hidden">
//     {Array.from({ length: 100 }).map((_, i) => {
//       const size = Math.random() * 3 + 1;
//       const isLarge = size > 2.5;
//       return (
//         <motion.div
//           key={i}
//           className={`absolute rounded-full ${isLarge ? "bg-accent" : "bg-primary"}`}
//           style={{
//             width: size,
//             height: size,
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//           }}
//           animate={{
//             opacity: [0.1, 1, 0.1],
//             scale: isLarge ? [1, 1.5, 1] : [1, 1.2, 1],
//           }}
//           transition={{
//             duration: Math.random() * 3 + 1,
//             repeat: Infinity,
//             delay: Math.random() * 2,
//           }}
//         />
//       );
//     })}
//   </div>
// );

// const FloatingIcons = () => {
//   const icons = ["⚔️", "🛡️", "💎", "⭐", "🔮", "🏆", "🎮", "🚀"];
//   return (
//     <>
//       {icons.map((icon, i) => (
//         <motion.div
//           key={i}
//           className="absolute text-2xl opacity-20"
//           style={{
//             left: `${10 + Math.random() * 80}%`,
//             top: `${10 + Math.random() * 80}%`,
//           }}
//           animate={{
//             y: [0, -20, 0],
//             rotate: [0, 10, -10, 0],
//             opacity: [0.1, 0.3, 0.1],
//           }}
//           transition={{
//             duration: 4 + Math.random() * 3,
//             repeat: Infinity,
//             delay: Math.random() * 3,
//           }}
//         >
//           {icon}
//         </motion.div>
//       ))}
//     </>
//   );
// };

// const GameLanding = ({ onStart }: GameLandingProps) => {
//   const [musicOn, setMusicOn] = useState(false);
//   const { displayed: nameText } = useTypingEffect("[Harshit Shukla]", 80, 500);
//   const { displayed: tagText, isDone } = useTypingEffect("[Software Developer]", 50, 1800);
  

//   return (
//     <motion.div
//       className="crt-effect relative flex min-h-screen flex-col items-center justify-center overflow-hidden grid-bg"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0, scale: 0.95 }}
//       transition={{ duration: 0.5 }}
//     >
//       <StarField />
//       <FloatingIcons />
//       <div className="scanlines pointer-events-none absolute inset-0 z-10" />

//       {/* Corner decorations */}
//       <div className="absolute left-4 top-4 z-20 font-pixel text-[7px] text-muted-foreground">
//         <span className="text-primary">HP</span> ████████████ 100%
//       </div>
//       <div className="absolute right-16 top-4 z-20 font-pixel text-[7px] text-muted-foreground">
//         <span className="text-accent">LV</span> 01
//       </div>

//       {/* Music Toggle */}
//       <button
//         onClick={() => setMusicOn(!musicOn)}
//         className="absolute right-6 top-4 z-20 rounded border border-border p-1.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
//       >
//         {musicOn ? <Volume2 size={14} /> : <VolumeX size={14} />}
//       </button>

//       {/* Gamepad icon */}
//       <motion.div
//         className="relative z-20 mb-4"
//         initial={{ scale: 0, rotate: -180 }}
//         animate={{ scale: 1, rotate: 0 }}
//         transition={{ type: "spring", delay: 0.2 }}
//       >
//         <Gamepad2 size={40} className="text-primary/30" />
//       </motion.div>

//       {/* Avatar */}
//       <motion.div
//         className="relative z-20 mb-8 h-32 w-32 overflow-hidden rounded-lg border-2 border-primary bg-muted animate-float"
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ type: "spring", delay: 0.3 }}
//         whileHover={{ 
//           scale: 1.1,
//           boxShadow: "0 0 30px hsl(160 100% 50% / 0.5)",
//         }}
//       >
//         <div className="flex h-full w-full items-center justify-center font-pixel text-xs text-muted-foreground">
//           AVATAR
//         </div>
//         {/* Pixel decoration corners */}
//         <div className="absolute left-0 top-0 h-2 w-2 bg-primary" />
//         <div className="absolute right-0 top-0 h-2 w-2 bg-primary" />
//         <div className="absolute bottom-0 left-0 h-2 w-2 bg-primary" />
//         <div className="absolute bottom-0 right-0 h-2 w-2 bg-primary" />
//       </motion.div>

//       {/* Title with glitch on hover */}
//       <motion.div
//         className="group relative z-20 mb-4"
//         initial={{ y: -30, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.5 }}
//       >
//         <h1
//           className="glitch-text text-center font-pixel text-2xl leading-relaxed text-primary text-glow-primary group-hover:animate-none md:text-4xl"
//           data-text={nameText}
//         >
//           {nameText}
//           <span className="animate-blink text-accent">_</span>
//         </h1>
//       </motion.div>

//       <motion.p
//         className="relative z-20 mb-12 font-pixel text-xs text-accent text-glow-accent md:text-sm"
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.8 }}
//       >
//         {tagText}
//         {!isDone && <span className="animate-blink ml-1">▌</span>}
//       </motion.p>

//       {/* Press Start */}
//       <motion.button
//         onClick={onStart}
//         className="pixel-border animate-pulse-glow relative z-20 rounded bg-card px-8 py-4 font-pixel text-sm text-primary transition-all hover:bg-primary hover:text-primary-foreground"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 2.5 }}
//         whileHover={{ scale: 1.08 }}
//         whileTap={{ scale: 0.92 }}
//       >
//         ▶ PRESS START
//       </motion.button>

//       <motion.div
//         className="relative z-20 mt-8 flex flex-col items-center gap-2"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 3 }}
//       >
//         <p className="font-pixel text-[8px] text-muted-foreground animate-blink">
//           ▼ INSERT COIN ▼
//         </p>
//         <p className="text-[10px] text-muted-foreground/50">
//           ↑↑↓↓←→←→BA for a surprise
//         </p>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default GameLanding;


import { motion } from "framer-motion";
import { Volume2, VolumeX, Gamepad2 } from "lucide-react";
import { useState } from "react";
import { useTypingEffect } from "@/hooks/useGameEffects";

interface GameLandingProps {
  onStart: () => void;
}

const StarField = () => (
  <div className="absolute inset-0 overflow-hidden">
    {Array.from({ length: 100 }).map((_, i) => {
      const size = Math.random() * 3 + 1;
      const isLarge = size > 2.5;
      return (
        <motion.div
          key={i}
          className={`absolute rounded-full ${isLarge ? "bg-accent" : "bg-primary"}`}
          style={{
            width: size,
            height: size,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.1, 1, 0.1],
            scale: isLarge ? [1, 1.5, 1] : [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 1,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      );
    })}
  </div>
);

const FloatingIcons = () => {
  const icons = ["⚔️", "🛡️", "💎", "⭐", "🔮", "🏆", "🎮", "🚀"];
  return (
    <>
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl opacity-20"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          {icon}
        </motion.div>
      ))}
    </>
  );
};

const GameLanding = ({ onStart }: GameLandingProps) => {
  const [musicOn, setMusicOn] = useState(false);
  const { displayed: nameText } = useTypingEffect("Harshit Shukla", 80, 500);
  const { displayed: tagText, isDone } = useTypingEffect("Software Developer", 50, 1800);

  return (
    <motion.div
      className="crt-effect relative flex min-h-screen flex-col items-center justify-center overflow-hidden grid-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <StarField />
      <FloatingIcons />
      <div className="scanlines pointer-events-none absolute inset-0 z-10" />

      {/* Corner decorations */}
      <div className="absolute left-4 top-4 z-20 font-pixel text-[7px] text-muted-foreground">
        <span className="text-primary">HP</span> ████████████ 100%
      </div>
      <div className="absolute right-16 top-4 z-20 font-pixel text-[7px] text-muted-foreground">
        <span className="text-accent">LV</span> 01
      </div>

      {/* Music Toggle */}
      <button
        onClick={() => setMusicOn(!musicOn)}
        className="absolute right-6 top-4 z-20 rounded border border-border p-1.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
      >
        {musicOn ? <Volume2 size={14} /> : <VolumeX size={14} />}
      </button>

      {/* Gamepad icon */}
      <motion.div
        className="relative z-20 mb-4"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", delay: 0.2 }}
      >
        <Gamepad2 size={40} className="text-primary/30" />
      </motion.div>

      {/* Avatar with real profile photo */}
      <motion.div
        className="relative z-20 mb-8 h-32 w-32 overflow-hidden rounded-lg border-2 border-primary bg-muted animate-float"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.3 }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 30px hsl(160 100% 50% / 0.5)",
        }}
      >
        <img
          src="/Harshit_profile_pic.jpg"
          alt="Harshit Shukla"
          className="h-full w-full object-cover object-top"
          style={{ transform: "scale(1.1)", transformOrigin: "top center" }}
        />

        {/* Subtle green scanline overlay for game feel */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,136,0.03) 3px,rgba(0,255,136,0.03) 4px)",
          }}
        />

        {/* Hover green tint */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(0,255,136,0)" }}
          whileHover={{ background: "rgba(0,255,136,0.06)" }}
        />

        {/* Pixel corner decorations */}
        <div className="absolute left-0 top-0 h-2 w-2 bg-primary" />
        <div className="absolute right-0 top-0 h-2 w-2 bg-primary" />
        <div className="absolute bottom-0 left-0 h-2 w-2 bg-primary" />
        <div className="absolute bottom-0 right-0 h-2 w-2 bg-primary" />
      </motion.div>

      {/* Title with glitch on hover */}
      <motion.div
        className="group relative z-20 mb-4"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h1
          className="glitch-text text-center font-pixel text-2xl leading-relaxed text-primary text-glow-primary group-hover:animate-none md:text-4xl"
          data-text={nameText}
        >
          {nameText}
          <span className="animate-blink text-accent">_</span>
        </h1>
      </motion.div>

      <motion.p
        className="relative z-20 mb-12 font-pixel text-xs text-accent text-glow-accent md:text-sm"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {tagText}
        {!isDone && <span className="animate-blink ml-1">▌</span>}
      </motion.p>

      {/* Press Start */}
      <motion.button
        onClick={onStart}
        className="pixel-border animate-pulse-glow relative z-20 rounded bg-card px-8 py-4 font-pixel text-sm text-primary transition-all hover:bg-primary hover:text-primary-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
      >
        ▶ PRESS START
      </motion.button>

      <motion.div
        className="relative z-20 mt-8 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <p className="font-pixel text-[8px] text-muted-foreground animate-blink">
          ▼ INSERT COIN ▼
        </p>
        <p className="text-[10px] text-muted-foreground/50">
          ↑↑↓↓←→←→BA for a surprise
        </p>
      </motion.div>
    </motion.div>
  );
};

export default GameLanding;