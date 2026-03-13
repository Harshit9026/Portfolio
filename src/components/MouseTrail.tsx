import { motion } from "framer-motion";
import { useMouseTrail } from "@/hooks/useGameEffects";

const MouseTrail = () => {
  const particles = useMouseTrail();

  return (
    <div className="pointer-events-none fixed inset-0 z-[999]">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute h-1.5 w-1.5 rounded-full bg-primary"
          style={{ left: p.x, top: p.y }}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </div>
  );
};

export default MouseTrail;
