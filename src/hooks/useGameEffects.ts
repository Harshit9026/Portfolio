import { useEffect, useState } from "react";

export const useTypingEffect = (text: string, speed = 50, startDelay = 0) => {
  const [displayed, setDisplayed] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setIsDone(false);
    let i = 0;

    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          setIsDone(true);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, startDelay]);

  return { displayed, isDone };
};

export const useKonamiCode = (callback: () => void) => {
  useEffect(() => {
    const code = [
      "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
      "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
      "b", "a",
    ];
    let index = 0;

    const handler = (e: KeyboardEvent) => {
      if (e.key === code[index]) {
        index++;
        if (index === code.length) {
          callback();
          index = 0;
        }
      } else {
        index = 0;
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [callback]);
};

export const useMouseTrail = () => {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);
  let nextId = 0;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const id = nextId++;
      setParticles((prev) => [...prev.slice(-8), { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== id));
      }, 500);
    };

    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return particles;
};
