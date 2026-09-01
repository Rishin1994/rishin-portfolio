"use client";

import { useEffect, useRef, useState } from "react";

type UseCountUpOptions = {
  end: number;
  duration?: number;
  decimals?: number;
  active?: boolean;
};

/** Count-up enhancement — SSR/first paint show `end`; never flash 0. */
export function useCountUp({
  end,
  duration = 1800,
  decimals = 0,
  active = false,
}: UseCountUpOptions) {
  const format = (n: number) =>
    decimals > 0 ? n.toFixed(decimals) : Math.round(n).toString();

  const minNonZero = decimals > 0 ? Number(`0.${"0".repeat(Math.max(decimals - 1, 0))}1`) : 1;
  const [value, setValue] = useState(() => format(end));
  const [hasAnimated, setHasAnimated] = useState(false);
  const previousRef = useRef(end);
  const countingRef = useRef(false);

  useEffect(() => {
    if (!active || hasAnimated) return;

    let frame = 0;
    const start = performance.now();
    previousRef.current = end;
    countingRef.current = false;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);

      // Hold the final number through the first frames so eased=0 never paints.
      if (progress < 0.05) {
        const held = format(end);
        if (held !== "0" && held !== "0.0") {
          previousRef.current = end;
          setValue(held);
        }
      } else {
        const remapped = (progress - 0.05) / 0.95;
        const eased = 1 - Math.pow(1 - remapped, 3);
        const raw = end * eased;

        if (raw <= 0) {
          setValue(format(end));
        } else {
          const next = Math.max(raw, minNonZero);

          if (!countingRef.current) {
            countingRef.current = true;
            previousRef.current = next;
            setValue(format(next));
          } else {
            const committed = Math.max(previousRef.current, next);
            previousRef.current = committed;
            const formatted = format(committed);
            if (formatted !== "0" && formatted !== "0.0") {
              setValue(formatted);
            }
          }
        }
      }

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        previousRef.current = end;
        setValue(format(end));
        setHasAnimated(true);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, duration, end, decimals, hasAnimated]);

  return value;
}
