"use client";

import {
  useRef,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";

type SpotlightSurfaceProps = {
  children: ReactNode;
  className?: string;
  accent?: string;
  active?: boolean;
  onClick?: () => void;
  as?: "div" | "button" | "article";
  tilt?: boolean;
  style?: CSSProperties;
};

export function SpotlightSurface({
  children,
  className = "",
  accent = "#c9ff3d",
  active = false,
  onClick,
  as: Tag = "div",
  tilt = true,
  style,
}: SpotlightSurfaceProps) {
  const ref = useRef<HTMLDivElement & HTMLButtonElement & HTMLElement>(null);

  const handleMove = (event: MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);

    if (tilt) {
      const rotateY = ((x / rect.width) - 0.5) * 10;
      const rotateX = ((y / rect.height) - 0.5) * -10;
      el.style.setProperty("--tilt-x", `${rotateX}deg`);
      el.style.setProperty("--tilt-y", `${rotateY}deg`);
    }
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  };

  const props = {
    ref,
    className: `spotlight-surface ${active ? "is-active" : ""} ${className}`.trim(),
    style: { "--accent": accent, ...style } as CSSProperties,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    onClick,
  };

  if (Tag === "button") {
    return (
      <button type="button" {...props}>
        <span className="spotlight-surface-ring" aria-hidden="true" />
        <span className="spotlight-surface-glow" aria-hidden="true" />
        <span className="spotlight-surface-content">{children}</span>
      </button>
    );
  }

  if (Tag === "article") {
    return (
      <article {...props}>
        <span className="spotlight-surface-ring" aria-hidden="true" />
        <span className="spotlight-surface-glow" aria-hidden="true" />
        <span className="spotlight-surface-content">{children}</span>
      </article>
    );
  }

  return (
    <div {...props}>
      <span className="spotlight-surface-ring" aria-hidden="true" />
      <span className="spotlight-surface-glow" aria-hidden="true" />
      <span className="spotlight-surface-content">{children}</span>
    </div>
  );
}
