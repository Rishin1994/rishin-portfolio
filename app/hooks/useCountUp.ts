"use client";

import { useEffect, useState } from "react";

type UseCountUpOptions = {
  end: number;
  duration?: number;
  decimals?: number;
  active?: boolean;
};

/** Count-up enhancement only — never initializes at 0 for display. */
export function useCountUp({
  end,
  duration = 1800,
  decimals = 0,
  active = false,
}: UseCountUpOptions) {
  const format = (n: number) =>
    decimals > 0 ? n.toFixed(decimals) : Math.round(n).toString();

  const [value, setValue] = useState(() => format(end));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!active || hasAnimated) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(format(end * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setHasAnimated(true);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // format is stable for given decimals; eslint intentional
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, duration, end, decimals, hasAnimated]);

  return value;
}
