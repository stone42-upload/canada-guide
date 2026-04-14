'use client';

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useReducedMotion,
} from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const APPLE_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function AnimatedScore({
  target,
  delay = 0,
}: {
  target: number;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const prefersReduced = useReducedMotion();
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));

  useEffect(() => {
    if (!isInView) return;
    if (prefersReduced) {
      motionVal.set(target);
      return;
    }
    const t = setTimeout(() => {
      animate(motionVal, target, { duration: 1.5, ease: APPLE_EASE });
    }, delay * 1000);
    return () => clearTimeout(t);
  }, [isInView, target, delay, motionVal, prefersReduced]);

  useEffect(() => {
    const unsub = rounded.on('change', (v) => {
      if (ref.current) ref.current.textContent = `${v}%`;
    });
    return unsub;
  }, [rounded]);

  return (
    <span
      ref={ref}
      className="font-display text-[2.75rem] leading-none font-extrabold tabular-nums text-maple dark:text-maple-dark"
      aria-label={`Score: ${target}%`}
    >
      {prefersReduced ? `${target}%` : '0%'}
    </span>
  );
}
