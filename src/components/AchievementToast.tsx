import { motion, AnimatePresence } from "framer-motion";
import { Trophy } from "lucide-react";
import { useEffect, useState } from "react";

interface ToastNotification {
  id: number;
  title: string;
  description: string;
}

let addToast: (title: string, description: string) => void;

export const showAchievementToast = (title: string, description: string) => {
  addToast?.(title, description);
};

const AchievementToast = () => {
  const [toasts, setToasts] = useState<ToastNotification[]>([]);
  let nextId = 0;

  addToast = (title: string, description: string) => {
    const id = nextId++;
    setToasts((prev) => [...prev, { id, title, description }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-[200] flex flex-col gap-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            className="pointer-events-auto pixel-border flex items-center gap-3 rounded bg-card p-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-accent/20 text-accent">
              <Trophy size={20} />
            </div>
            <div>
              <p className="font-pixel text-[8px] text-accent">ACHIEVEMENT UNLOCKED!</p>
              <p className="font-pixel text-[9px] text-foreground">{toast.title}</p>
              <p className="text-[10px] text-muted-foreground">{toast.description}</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default AchievementToast;
