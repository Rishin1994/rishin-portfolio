"use client";

import { useEffect, useState } from "react";

type UseCountUpOptions = {
  end: number;
  duration?: number;
  decimals?: number;
  active?: boolean;
};

export function useCountUp({
  end,
  duration = 1800,
  decimals = 0,
  active = false,
}: UseCountUpOptions) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(end * eased);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, duration, end]);

  return decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
}
