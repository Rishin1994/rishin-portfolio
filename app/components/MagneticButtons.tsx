"use client";

import { useEffect } from "react";

export function MagneticButtons() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(".magnetic"));

    const onMove = (event: MouseEvent) => {
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        const distance = Math.hypot(x, y);
        const radius = Math.max(rect.width, rect.height) * 0.9;

        if (distance < radius) {
          const strength = 0.18;
          element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        } else {
          element.style.transform = "";
        }
      });
    };

    const onLeave = () => {
      elements.forEach((element) => {
        element.style.transform = "";
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return null;
}
