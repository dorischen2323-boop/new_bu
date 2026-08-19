"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * 進場動畫：fade-up 24px / 320ms
 * prefers-reduced-motion 由 globals.css 關閉
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const t = window.setTimeout(() => el.classList.add("is-in"), delay);
        io.unobserve(el);
        return () => window.clearTimeout(t);
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    // @ts-expect-error — ref 型別隨 Tag 變動，此處為刻意的多型 render
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
