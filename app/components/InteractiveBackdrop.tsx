"use client";

import { useEffect } from "react";

export function InteractiveBackdrop() {
  useEffect(() => {
    const root = document.documentElement;

    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      root.style.setProperty("--spot-x", `${x}%`);
      root.style.setProperty("--spot-y", `${y}%`);
      root.style.setProperty("--spot-x-px", `${event.clientX}px`);
      root.style.setProperty("--spot-y-px", `${event.clientY}px`);
    };

    onMove({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 3 } as MouseEvent);
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="site-backdrop" aria-hidden="true">
      <div className="backdrop-spotlight" />
      <div className="aurora-blob aurora-blob-1" />
      <div className="aurora-blob aurora-blob-2" />
      <div className="aurora-blob aurora-blob-3" />
      <div className="backdrop-grid" />
    </div>
  );
}
