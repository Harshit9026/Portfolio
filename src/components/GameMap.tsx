// import { motion } from "framer-motion";
// import {
//   Home, User, Zap, FolderOpen, Briefcase, Trophy, FileText, Mail,
// } from "lucide-react";

// export type SectionId =
//   | "home"
//   | "about"
//   | "skills"
//   | "projects"
//   | "experience"
//   | "achievements"
//   | "resume"
//   | "contact";

// interface MapLocation {
//   id: SectionId;
//   label: string;
//   icon: React.ReactNode;
//   x: string;
//   y: string;
//   color: string;
//   emoji: string;
// }

// const locations: MapLocation[] = [
//   { id: "home", label: "Home", icon: <Home size={25} />, x: "50%", y: "12%", color: "text-primary", emoji: "🏠" },
//   { id: "about", label: "About", icon: <User size={25} />, x: "22%", y: "28%", color: "text-neon-cyan", emoji: "📖" },
//   { id: "skills", label: "Skills", icon: <Zap size={25} />, x: "78%", y: "28%", color: "text-neon-yellow", emoji: "⚡" },
//   { id: "projects", label: "Projects", icon: <FolderOpen size={25} />, x: "15%", y: "50%", color: "text-secondary", emoji: "🗂️" },
//   { id: "experience", label: "Experience", icon: <Briefcase size={25} />, x: "85%", y: "50%", color: "text-neon-pink", emoji: "💼" },
//   { id: "achievements", label: "Trophies", icon: <Trophy size={25} />, x: "30%", y: "72%", color: "text-accent", emoji: "🏆" },
//   { id: "resume", label: "Resume", icon: <FileText size={25} />, x: "70%", y: "72%", color: "text-primary", emoji: "📜" },
//   { id: "contact", label: "Contact", icon: <Mail size={25} />, x: "50%", y: "90%", color: "text-neon-cyan", emoji: "📡" },
// ];

// const paths: [string, string, string, string][] = [
//   ["50%", "12%", "22%", "28%"],
//   ["50%", "12%", "78%", "28%"],
//   ["22%", "28%", "15%", "50%"],
//   ["78%", "28%", "85%", "50%"],
//   ["15%", "50%", "30%", "72%"],
//   ["85%", "50%", "70%", "72%"],
//   ["30%", "72%", "50%", "90%"],
//   ["70%", "72%", "50%", "90%"],
//   // Cross paths for visual interest
//   ["22%", "28%", "78%", "28%"],
//   ["15%", "50%", "85%", "50%"],
// ];

// interface GameMapProps {
//   onSelectSection: (id: SectionId) => void;
//   activeSection: SectionId | null;
//   visitedSections: Set<SectionId>;
// }

// const GameMap = ({ onSelectSection, visitedSections }: GameMapProps) => {
//   return (
//     <motion.div
//       className="crt-effect relative min-h-screen w-full grid-bg pt-12"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <div className="scanlines pointer-events-none absolute inset-0 z-10" />

//       <motion.h2
//         className="relative z-20 pt-4 text-center font-pixel text-sm text-primary text-glow-primary md:text-lg"
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//       >
//         🗺️ SELECT YOUR DESTINATION
//       </motion.h2>

//       <motion.p
//         className="relative z-20 mt-2 text-center text-xs text-muted-foreground"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3 }}
//       >
//         {visitedSections.size}/{locations.length} locations explored
//       </motion.p>

//       {/* Path lines */}
//       <svg className="absolute inset-0 h-full w-full" style={{ zIndex: 1 }}>
//         {paths.map((p, i) => (
//           <motion.line
//             key={i}
//             x1={p[0]} y1={p[1]} x2={p[2]} y2={p[3]}
//             stroke="hsl(160 100% 50% / 0.12)"
//             strokeWidth="2"
//             strokeDasharray="6 4"
//             initial={{ pathLength: 0, opacity: 0 }}
//             animate={{ pathLength: 1, opacity: 1 }}
//             transition={{ delay: 0.5 + 0.05 * i, duration: 0.8 }}
//           />
//         ))}
//       </svg>

//       {/* Terrain decorations */}
//       {Array.from({ length: 12 }).map((_, i) => (
//         <motion.div
//           key={`tree-${i}`}
//           className="absolute z-[1] text-lg opacity-20 select-none"
//           style={{
//             left: `${5 + Math.random() * 90}%`,
//             top: `${10 + Math.random() * 80}%`,
//           }}
//           animate={{ y: [0, -3, 0] }}
//           transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
//         >
//           {["🌲", "🌳", "🪨", "🌿", "⛰️"][Math.floor(Math.random() * 5)]}
//         </motion.div>
//       ))}

//       {/* Location nodes */}
//       {locations.map((loc, i) => {
//         const visited = visitedSections.has(loc.id);
//         return (
//           <motion.button
//             key={loc.id}
//             className="absolute z-20 flex flex-col items-center gap-1.5"
//             style={{
//               left: loc.x,
//               top: loc.y,
//               transform: "translate(-50%, -50%)",
//             }}
//             initial={{ scale: 0, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ delay: 0.1 * i, type: "spring" }}
//             onClick={() => onSelectSection(loc.id)}
//             whileHover={{ scale: 1.2, y: -5 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             {/* Emoji label */}
//             <motion.span
//               className="text-lg"
//               animate={{ y: [0, -4, 0] }}
//               transition={{ duration: 2, repeat: Infinity, delay: 0.2 * i }}
//             >
//               {loc.emoji}
//             </motion.span>
//             <div
//               className={`pixel-border relative flex h-11 w-11 items-center justify-center rounded bg-card transition-all ${loc.color} ${
//                 visited ? "glow-primary" : ""
//               }`}
//             >
//               {loc.icon}
//               {visited && (
//                 <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-accent text-[6px] font-bold leading-3 text-accent-foreground flex items-center justify-center">
//                   ✓
//                 </div>
//               )}
//             </div>
//             <span className="font-pixel text-[7px] text-foreground md:text-[9px]">
//               {loc.label}
//             </span>
//           </motion.button>
//         );
//       })}
//     </motion.div>
//   );
// };

// export default GameMap;

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import {
  Home, User, Zap, FolderOpen, Briefcase, Trophy, FileText, Mail,
} from "lucide-react";

export type SectionId =
  | "home" | "about" | "skills" | "projects"
  | "experience" | "achievements" | "resume" | "contact";

interface MapLocation {
  id: SectionId;
  label: string;
  icon: React.ReactNode;
  x: string;
  y: string;
  color: string;
  emoji: string;
}

const locations: MapLocation[] = [
  { id: "home",         label: "Home",       icon: <Home size={22} />,      x: "50%", y: "12%", color: "text-primary",     emoji: "🏠" },
  { id: "about",        label: "About",      icon: <User size={22} />,       x: "22%", y: "28%", color: "text-neon-cyan",   emoji: "📖" },
  { id: "skills",       label: "Skills",     icon: <Zap size={22} />,        x: "78%", y: "28%", color: "text-neon-yellow", emoji: "⚡" },
  { id: "projects",     label: "Projects",   icon: <FolderOpen size={22} />, x: "15%", y: "50%", color: "text-secondary",   emoji: "🗂️" },
  { id: "experience",   label: "Experience", icon: <Briefcase size={22} />,  x: "85%", y: "50%", color: "text-neon-pink",   emoji: "💼" },
  { id: "achievements", label: "Trophies",   icon: <Trophy size={22} />,     x: "30%", y: "72%", color: "text-accent",      emoji: "🏆" },
  { id: "resume",       label: "Resume",     icon: <FileText size={22} />,   x: "70%", y: "72%", color: "text-primary",     emoji: "📜" },
  { id: "contact",      label: "Contact",    icon: <Mail size={22} />,       x: "50%", y: "90%", color: "text-neon-cyan",   emoji: "📡" },
];

const paths: [string, string, string, string][] = [
  ["50%","12%","22%","28%"],["50%","12%","78%","28%"],
  ["22%","28%","15%","50%"],["78%","28%","85%","50%"],
  ["15%","50%","30%","72%"],["85%","50%","70%","72%"],
  ["30%","72%","50%","90%"],["70%","72%","50%","90%"],
  ["22%","28%","78%","28%"],["15%","50%","85%","50%"],
];

// Fixed terrain positions (no Math.random to avoid layout shift)
const TERRAIN = [
  {e:"🌲",l:"6%", t:"17%",d:3.2},{e:"🌳",l:"34%",t:"37%",d:2.8},
  {e:"🪨",l:"61%",t:"18%",d:4.0},{e:"🌿",l:"43%",t:"59%",d:3.5},
  {e:"⛰️",l:"89%",t:"35%",d:2.5},{e:"🌲",l:"4%", t:"64%",d:3.0},
  {e:"🌳",l:"91%",t:"67%",d:2.7},{e:"🪨",l:"56%",t:"80%",d:3.8},
  {e:"🌿",l:"19%",t:"82%",d:3.1},{e:"⛰️",l:"72%",t:"54%",d:2.9},
  {e:"🌲",l:"44%",t:"30%",d:3.3},{e:"🌳",l:"9%", t:"41%",d:2.6},
];

// Center area decorative tiles — fills the empty middle
const CENTER_TILES = [
  // Pixel-art style "ground" elements around center
  {e:"🏔️",l:"46%",t:"42%",sz:28,o:0.12},
  {e:"🌾",l:"38%",t:"47%",sz:18,o:0.18},
  {e:"🌾",l:"54%",t:"44%",sz:18,o:0.18},
  {e:"🌾",l:"42%",t:"52%",sz:18,o:0.15},
  {e:"🌾",l:"58%",t:"50%",sz:18,o:0.15},
  {e:"🍄",l:"35%",t:"54%",sz:14,o:0.20},
  {e:"🍄",l:"63%",t:"46%",sz:14,o:0.20},
  {e:"💎",l:"49%",t:"36%",sz:14,o:0.25},
  {e:"🗡️",l:"40%",t:"40%",sz:16,o:0.18},
  {e:"🛡️",l:"58%",t:"56%",sz:16,o:0.18},
  {e:"🔮",l:"50%",t:"55%",sz:20,o:0.22},
  {e:"⚔️",l:"45%",t:"62%",sz:15,o:0.18},
  {e:"🏺",l:"55%",t:"62%",sz:15,o:0.18},
  {e:"🌊",l:"32%",t:"60%",sz:22,o:0.12},
  {e:"🌊",l:"62%",t:"40%",sz:22,o:0.12},
  {e:"✨",l:"36%",t:"42%",sz:12,o:0.30},
  {e:"✨",l:"62%",t:"60%",sz:12,o:0.30},
  {e:"✨",l:"50%",t:"48%",sz:12,o:0.35},
];

// Floating pixel dust particles
const DUST = Array.from({length: 20}, (_, i) => ({
  l: `${8 + i * 4.5}%`,
  t: `${15 + ((i * 37) % 70)}%`,
  delay: i * 0.4,
  dur: 3 + (i % 4),
}));

const THIEF_SPEED = 0.55;
const ARMY_DELAY  = 900;
const ARMY_SPEED  = 0.72;

type Phase = "idle" | "thief_runs" | "army_chases" | "caught" | "celebrating";
interface Vec2 { x: string; y: string }

interface GameMapProps {
  onSelectSection: (id: SectionId) => void;
  activeSection: SectionId | null;
  visitedSections: Set<SectionId>;
}

const GameMap = ({ onSelectSection, visitedSections }: GameMapProps) => {
  const canvasRef     = useRef<HTMLCanvasElement>(null);
  const animRef       = useRef<number>(0);
  const armyTimerRef  = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openTimerRef  = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [thiefPos,    setThiefPos]    = useState<Vec2>({ x: "50%", y: "12%" });
  const [armyPos,     setArmyPos]     = useState<Vec2>({ x: "50%", y: "12%" });
  const [phase,       setPhase]       = useState<Phase>("idle");
  const [thiefFlip,   setThiefFlip]   = useState(false);
  const [armyFlip,    setArmyFlip]    = useState(false);
  const [thiefSpeech, setThiefSpeech] = useState<string | null>(null);
  const [armySpeech,  setArmySpeech]  = useState<string | null>(null);
  const [celebrating, setCelebrating] = useState(false);

  // ── Canvas: layered animated background ──────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Star field — three layers (far, mid, near)
    type Star = { x:number; y:number; s:number; o:number; sp:number; layer:number };
    const stars: Star[] = [];
    for (let i = 0; i < 200; i++) {
      const layer = i < 80 ? 0 : i < 150 ? 1 : 2;
      stars.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        s: layer === 0 ? 0.4 + Math.random() * 0.6
         : layer === 1 ? 0.7 + Math.random() * 0.8
         : 1.0 + Math.random() * 1.2,
        o: Math.random(),
        sp: 0.001 + Math.random() * 0.004,
        layer,
      });
    }

    // Nebula clouds — static coloured blobs drawn once as circles
    type Nebula = { x:number; y:number; r:number; h:number; a:number };
    const nebulae: Nebula[] = [
      { x:20,  y:25,  r:220, h:160, a:0.04 },
      { x:75,  y:60,  r:280, h:200, a:0.035 },
      { x:45,  y:80,  r:180, h:140, a:0.045 },
      { x:10,  y:70,  r:160, h:120, a:0.03  },
      { x:85,  y:20,  r:200, h:160, a:0.04  },
      { x:50,  y:45,  r:300, h:220, a:0.025 },
    ];

    // Shooting stars
    type Shoot = { x:number; y:number; vx:number; vy:number; life:number; maxLife:number; active:boolean };
    const shoots: Shoot[] = Array.from({ length: 4 }, () => ({
      x: 0, y: 0, vx: 0, vy: 0, life: 0, maxLife: 0, active: false,
    }));
    let shootTimer = 0;

    const spawnShoot = (s: Shoot) => {
      s.x = Math.random() * 80 + 10;
      s.y = Math.random() * 30;
      const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.3;
      const speed = 1.2 + Math.random() * 0.8;
      s.vx = Math.cos(angle) * speed;
      s.vy = Math.sin(angle) * speed;
      s.maxLife = 60 + Math.random() * 40;
      s.life = 0;
      s.active = true;
    };

    let t = 0;
    const loop = () => {
      t++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const W = canvas.width, H = canvas.height;

      // Deep space gradient bg
      const bg = ctx.createRadialGradient(W*0.5, H*0.3, 0, W*0.5, H*0.3, W*0.9);
      bg.addColorStop(0,   "#0d1f0f");
      bg.addColorStop(0.4, "#071510");
      bg.addColorStop(0.7, "#050d08");
      bg.addColorStop(1,   "#020805");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // Nebulae
      nebulae.forEach(n => {
        const gx = ctx.createRadialGradient(
          n.x/100*W, n.y/100*H, 0,
          n.x/100*W, n.y/100*H, n.r
        );
        const hue = n.h;
        gx.addColorStop(0,   `hsla(${hue},70%,35%,${n.a})`);
        gx.addColorStop(0.5, `hsla(${hue},60%,25%,${n.a * 0.5})`);
        gx.addColorStop(1,   "transparent");
        ctx.fillStyle = gx;
        ctx.beginPath();
        ctx.arc(n.x/100*W, n.y/100*H, n.r, 0, Math.PI*2);
        ctx.fill();
      });

      // Stars
      stars.forEach(s => {
        s.o += Math.sin(t * s.sp * 6) * 0.008;
        s.o = Math.max(0.05, Math.min(s.layer === 2 ? 0.9 : 0.6, s.o));
        const x = s.x / 100 * W, y = s.y / 100 * H;
        // Near stars get a subtle cross-sparkle
        if (s.layer === 2 && s.o > 0.5) {
          ctx.strokeStyle = `rgba(180,255,220,${s.o * 0.4})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(x - s.s*2, y); ctx.lineTo(x + s.s*2, y);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(x, y - s.s*2); ctx.lineTo(x, y + s.s*2);
          ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(x, y, s.s, 0, Math.PI*2);
        ctx.fillStyle = `rgba(${
          s.layer === 0 ? "160,230,200" :
          s.layer === 1 ? "190,255,220" :
                         "220,255,240"
        },${s.o})`;
        ctx.fill();
      });

      // Shooting stars
      shootTimer++;
      if (shootTimer > 180) {
        shootTimer = 0;
        const idle = shoots.find(s => !s.active);
        if (idle) spawnShoot(idle);
      }
      shoots.forEach(s => {
        if (!s.active) return;
        s.life++;
        if (s.life >= s.maxLife) { s.active = false; return; }
        const progress = s.life / s.maxLife;
        const alpha = progress < 0.2 ? progress / 0.2 : 1 - (progress - 0.2) / 0.8;
        const x = (s.x + s.vx * s.life) / 100 * W;
        const y = (s.y + s.vy * s.life) / 100 * H;
        const tailLen = 60 * alpha;
        const gx2 = ctx.createLinearGradient(
          x - Math.cos(Math.atan2(s.vy,s.vx)) * tailLen,
          y - Math.sin(Math.atan2(s.vy,s.vx)) * tailLen,
          x, y
        );
        gx2.addColorStop(0,   "transparent");
        gx2.addColorStop(1,   `rgba(200,255,230,${alpha * 0.8})`);
        ctx.strokeStyle = gx2;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(
          x - Math.cos(Math.atan2(s.vy,s.vx))*tailLen,
          y - Math.sin(Math.atan2(s.vy,s.vx))*tailLen
        );
        ctx.lineTo(x, y);
        ctx.stroke();
        // Head dot
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI*2);
        ctx.fillStyle = `rgba(220,255,240,${alpha})`;
        ctx.fill();
      });

      // Grid lines — subtle hex-ish grid overlay
      ctx.strokeStyle = "rgba(0,255,136,0.025)";
      ctx.lineWidth = 0.5;
      const gSize = 48;
      for (let gx = 0; gx < W; gx += gSize) {
        ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, H); ctx.stroke();
      }
      for (let gy = 0; gy < H; gy += gSize) {
        ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke();
      }

      // Animated path travelers
      paths.forEach((p, i) => {
        const x1 = parseFloat(p[0])/100*W, y1 = parseFloat(p[1])/100*H;
        const x2 = parseFloat(p[2])/100*W, y2 = parseFloat(p[3])/100*H;
        const prog = ((t * 0.006 + i * 0.13) % 1);
        const px = x1 + (x2-x1)*prog, py = y1 + (y2-y1)*prog;
        // Glow dot
        const rg = ctx.createRadialGradient(px,py,0,px,py,8);
        rg.addColorStop(0,   "rgba(0,255,136,0.7)");
        rg.addColorStop(0.4, "rgba(0,255,136,0.2)");
        rg.addColorStop(1,   "transparent");
        ctx.fillStyle = rg;
        ctx.beginPath(); ctx.arc(px, py, 8, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.arc(px, py, 2, 0, Math.PI*2);
        ctx.fillStyle = "rgba(0,255,136,0.9)"; ctx.fill();
      });

      animRef.current = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const pctToPx = useCallback((pct: string, axis: "x"|"y") =>
    (parseFloat(pct)/100) * (axis==="x" ? window.innerWidth : window.innerHeight),
  []);

  const flash = useCallback((who: "thief"|"army", text: string, ms = 900) => {
    if (who==="thief") { setThiefSpeech(text); setTimeout(()=>setThiefSpeech(null), ms); }
    else               { setArmySpeech(text);  setTimeout(()=>setArmySpeech(null),  ms); }
  }, []);

  const handleNodeClick = useCallback((loc: MapLocation) => {
    if (phase==="army_chases"||phase==="caught"||phase==="celebrating") return;
    const target: Vec2 = { x: loc.x, y: loc.y };
    setThiefFlip(pctToPx(loc.x,"x") < pctToPx(thiefPos.x,"x"));
    setPhase("thief_runs");
    setThiefPos(target);
    flash("thief","hehe~ 🏃");
    if (armyTimerRef.current) clearTimeout(armyTimerRef.current);
    armyTimerRef.current = setTimeout(() => {
      setArmyFlip(pctToPx(loc.x,"x") < pctToPx(armyPos.x,"x"));
      setPhase("army_chases");
      setArmyPos(target);
      flash("army","STOP! 🚨",1000);
      if (openTimerRef.current) clearTimeout(openTimerRef.current);
      openTimerRef.current = setTimeout(() => {
        onSelectSection(loc.id);
        setPhase("idle");
        const newSize = visitedSections.size + (visitedSections.has(loc.id) ? 0 : 1);
        if (newSize === locations.length)
          setTimeout(() => {
            setPhase("caught");
            setArmyPos({ x:`calc(${loc.x} + 22px)`, y:loc.y });
            flash("thief","OH NO!! 😱",2000);
            flash("army","GOT YA! 🎉",2000);
            setTimeout(() => { setPhase("celebrating"); setCelebrating(true); }, 1000);
          }, 400);
      }, ARMY_SPEED*1000+150);
    }, ARMY_DELAY);
  }, [phase, thiefPos, armyPos, visitedSections, onSelectSection, pctToPx, flash]);

  useEffect(() => () => {
    if (armyTimerRef.current) clearTimeout(armyTimerRef.current);
    if (openTimerRef.current) clearTimeout(openTimerRef.current);
  }, []);

  const thiefRunning = phase==="thief_runs";
  const armyRunning  = phase==="army_chases";

  return (
    <div className="relative min-h-screen w-full overflow-hidden" style={{ background: "#020805" }}>

      {/* ── Layered canvas background ── */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }} />

      {/* ── Vignette overlay ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        zIndex: 1,
        background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(2,8,5,0.7) 100%)",
      }} />

      {/* ── Scanlines ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        zIndex: 2,
        backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.08) 3px,rgba(0,0,0,0.08) 4px)",
        opacity: 0.6,
      }} />

      {/* ── CRT corner darkening ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        zIndex: 2,
        background: "radial-gradient(ellipse 120% 120% at 50% 50%, transparent 60%, rgba(0,0,0,0.5) 100%)",
      }} />

      {/* ── Floating dust particles ── */}
      {DUST.map((d, i) => (
        <motion.div key={i}
          className="absolute pointer-events-none"
          style={{ left: d.l, top: d.t, width: 2, height: 2, borderRadius: "50%", background: "rgba(0,255,136,0.4)", zIndex: 3 }}
          animate={{ y: [0, -18, 0], opacity: [0, 0.5, 0] }}
          transition={{ duration: d.dur, repeat: Infinity, delay: d.delay, ease: "easeInOut" }}
        />
      ))}

      {/* ── Center area decorative tiles ── */}
      {CENTER_TILES.map((t, i) => (
        <motion.div key={i}
          className="absolute pointer-events-none select-none"
          style={{ left: t.l, top: t.t, fontSize: t.sz, opacity: t.o, zIndex: 3 }}
          animate={{ y: [0, -3, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 3 + i * 0.3, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
        >
          {t.e}
        </motion.div>
      ))}

      {/* ── Center glowing orb ── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: "50%", top: "50%",
          transform: "translate(-50%, -50%)",
          width: 80, height: 80,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,255,136,0.12) 0%, transparent 70%)",
          zIndex: 3,
        }}
        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute pointer-events-none font-pixel text-center"
        style={{
          left: "50%", top: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 4,
          fontSize: 7,
          color: "rgba(0,255,136,0.35)",
          letterSpacing: 2,
          whiteSpace: "nowrap",
        }}
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        ◈ EXPLORE THE WORLD ◈
      </motion.div>

      {/* ── Terrain decorations ── */}
      {TERRAIN.map((t, i) => (
        <motion.div key={i}
          className="absolute pointer-events-none select-none text-lg"
          style={{ left: t.l, top: t.t, opacity: 0.22, zIndex: 4 }}
          animate={{ y: [0,-3,0] }}
          transition={{ duration: t.d, repeat: Infinity, delay: i*0.2 }}
        >{t.e}</motion.div>
      ))}

      {/* ── Path lines SVG ── */}
      <svg className="absolute inset-0 h-full w-full" style={{ zIndex: 5 }}>
        <defs>
          <filter id="glow-line">
            <feGaussianBlur stdDeviation="1.5" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        {paths.map((p, i) => (
          <motion.line key={i}
            x1={p[0]} y1={p[1]} x2={p[2]} y2={p[3]}
            stroke="hsl(160 100% 50% / 0.18)"
            strokeWidth="1.5"
            strokeDasharray="5 6"
            filter="url(#glow-line)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.5 + 0.06*i, duration: 1 }}
          />
        ))}
      </svg>

      {/* ── Header ── */}
      <motion.div className="relative z-20 pt-16 pb-2 text-center"
        initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <h2 className="font-pixel text-sm text-primary text-glow-primary md:text-lg tracking-widest">
          🗺️ SELECT YOUR DESTINATION
        </h2>
        <motion.p className="mt-2 text-center text-xs text-muted-foreground"
          initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.3 }}>
          {visitedSections.size}/{locations.length} locations explored
          {phase==="thief_runs"  && <span className="ml-2 animate-pulse text-yellow-400"> · 🥷 Thief spotted!</span>}
          {phase==="army_chases" && <span className="ml-2 animate-pulse text-red-400"> · 💂 Army in pursuit!</span>}
          {phase==="celebrating" && <span className="ml-2 animate-pulse text-green-400"> · Thief caught! 🎉</span>}
        </motion.p>
      </motion.div>

      {/* ── THIEF 🥷 ── */}
      <motion.div
        className="absolute pointer-events-none select-none flex flex-col items-center"
        animate={{ left: thiefPos.x, top: thiefPos.y }}
        transition={{ duration: THIEF_SPEED, ease: [0.25,0.46,0.45,0.94] }}
        style={{ transform: "translate(-50%,-150%)", zIndex: 40 }}
      >
        <AnimatePresence>
          {thiefSpeech && (
            <motion.div
              className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-yellow-400 px-2 py-0.5 font-pixel text-[7px] text-black shadow-md"
              initial={{ opacity:0, y:4, scale:0.8 }} animate={{ opacity:1, y:0, scale:1 }} exit={{ opacity:0, y:-4 }}
            >
              {thiefSpeech}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 bg-yellow-400"/>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ scaleX: thiefFlip ? -1 : 1 }}
          animate={
            phase==="caught"||phase==="celebrating" ? { rotate:[0,-20,20,-15,0], scale:[1,0.9,1] }
            : thiefRunning ? { y:[0,-6,0,-4,0] }
            : { y:[0,-2,0] }
          }
          transition={
            phase==="caught"||phase==="celebrating" ? { duration:0.5, repeat:Infinity }
            : thiefRunning ? { duration:0.22, repeat:Infinity }
            : { duration:2, repeat:Infinity }
          }
        >
          <span className="text-2xl" style={{ filter:"drop-shadow(0 0 8px rgba(255,200,0,1))" }}>🥷</span>
        </motion.div>
        <span className="mt-0.5 font-pixel text-[5px] text-yellow-400">THIEF</span>
      </motion.div>

      {/* ── ARMY 💂 ── */}
      <motion.div
        className="absolute pointer-events-none select-none flex flex-col items-center"
        animate={{ left: armyPos.x, top: armyPos.y }}
        transition={{ duration: ARMY_SPEED, ease: [0.25,0.46,0.45,0.94] }}
        style={{ transform: "translate(-50%,-150%)", zIndex: 39 }}
      >
        <AnimatePresence>
          {armySpeech && (
            <motion.div
              className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-red-500 px-2 py-0.5 font-pixel text-[7px] text-white shadow-md"
              initial={{ opacity:0, y:4, scale:0.8 }} animate={{ opacity:1, y:0, scale:1 }} exit={{ opacity:0, y:-4 }}
            >
              {armySpeech}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 bg-red-500"/>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ scaleX: armyFlip ? -1 : 1 }}
          animate={
            phase==="celebrating" ? { rotate:[0,10,-10,10,0], scale:[1,1.15,1] }
            : armyRunning ? { y:[0,-5,0,-3,0] }
            : { y:[0,-2,0] }
          }
          transition={
            phase==="celebrating" ? { duration:0.45, repeat:Infinity }
            : armyRunning ? { duration:0.26, repeat:Infinity }
            : { duration:2.2, repeat:Infinity }
          }
        >
          <span className="text-2xl" style={{ filter:"drop-shadow(0 0 8px rgba(255,80,80,1))" }}>💂</span>
        </motion.div>
        <span className="mt-0.5 font-pixel text-[5px] text-red-400">ARMY</span>
      </motion.div>

      {/* ── CAUGHT overlay ── */}
      <AnimatePresence>
        {celebrating && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm"
            initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            onClick={() => { setCelebrating(false); setPhase("idle"); }}
          >
            <motion.div
              className="pixel-border rounded bg-card px-10 py-8 text-center"
              initial={{ scale:0.4, rotate:-8 }} animate={{ scale:1, rotate:0 }}
              transition={{ type:"spring", stiffness:220, damping:14 }}
            >
              <motion.div className="mb-3 flex items-center justify-center gap-1 text-4xl"
                animate={{ y:[0,-8,0] }} transition={{ duration:0.6, repeat:Infinity }}>
                <span>🥷</span>
                <motion.span animate={{ x:[-2,2,-2] }} transition={{ duration:0.3, repeat:Infinity }}>💂</motion.span>
              </motion.div>
              <h2 className="mb-1 font-pixel text-base text-accent text-glow-primary">THIEF CAUGHT!</h2>
              <p className="font-pixel text-[8px] text-muted-foreground">All {locations.length} sections unlocked</p>
              <p className="mt-1 font-pixel text-[8px] text-primary">The army finally prevailed! 🎉</p>
              <motion.p className="mt-5 font-pixel text-[7px] text-muted-foreground"
                animate={{ opacity:[1,0.3,1] }} transition={{ duration:1, repeat:Infinity }}>
                [ click anywhere to dismiss ]
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Location nodes ── */}
      {locations.map((loc, i) => {
        const visited = visitedSections.has(loc.id);
        return (
          <motion.button key={loc.id}
            className="absolute flex flex-col items-center gap-1.5"
            style={{ left: loc.x, top: loc.y, transform:"translate(-50%,-50%)", zIndex: 20 }}
            initial={{ scale:0, opacity:0 }}
            animate={{ scale:1, opacity:1 }}
            transition={{ delay:0.1*i, type:"spring" }}
            onClick={() => handleNodeClick(loc)}
            whileHover={{ scale:1.2, y:-5 }}
            whileTap={{ scale:0.9 }}
          >
            {/* Ping rings */}
            {!visited && [0,1].map(j => (
              <motion.div key={j}
                className="absolute pointer-events-none rounded-full border border-primary/30"
                style={{ width:52, height:52, left:"50%", top:"50%", transform:"translate(-50%,-65%)" }}
                animate={{ scale:[1,1.7,1], opacity:[0.5,0,0.5] }}
                transition={{ duration:2, repeat:Infinity, delay:j*0.7 + i*0.1 }}
              />
            ))}

            <motion.span className="text-lg"
              animate={{ y:[0,-4,0] }}
              transition={{ duration:2, repeat:Infinity, delay:0.2*i }}>
              {loc.emoji}
            </motion.span>

            <div className={`pixel-border relative flex h-11 w-11 items-center justify-center rounded bg-card transition-all ${loc.color} ${visited?"glow-primary":""}`}
              style={visited ? { boxShadow:"0 0 14px 3px hsl(160 100% 50% / 0.35)" } : {}}>
              {loc.icon}
              {visited && (
                <motion.div
                  className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full bg-accent text-[7px] font-bold text-accent-foreground flex items-center justify-center"
                  initial={{ scale:0 }} animate={{ scale:1 }} transition={{ type:"spring", stiffness:300 }}>
                  ✓
                </motion.div>
              )}
            </div>

            <span className="font-pixel text-[7px] text-foreground md:text-[9px]">{loc.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default GameMap;