"use client";

import { useEffect, useRef, useState } from "react";
import type { Kpi as KpiType } from "@/content/kpis";

/**
 * 數據卡
 * 粉 = 行銷側、藍 = 技術側
 * count-up 只在整組進入視窗時跑一次
 */
export default function Kpi({ kpi }: { kpi: KpiType }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState<string>(() =>
    kpi.animate && typeof kpi.value === "number" ? "0" : String(kpi.value)
  );

  useEffect(() => {
    if (!kpi.animate || typeof kpi.value !== "number") return;
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(kpi.value.toLocaleString("en-US"));
      return;
    }

    const target = kpi.value;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.unobserve(el);

        const dur = 900;
        const t0 = performance.now();
        const step = (t: number) => {
          const p = Math.min((t - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setShown(Math.round(target * eased).toLocaleString("en-US"));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.6 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [kpi.animate, kpi.value]);

  const isTide = kpi.tone === "tide";
  const isText = typeof kpi.value === "string";

  return (
    <div
      ref={ref}
      className={`rounded-[14px] border border-line px-5 pb-5 pt-6 ${
        isTide ? "wash-tide" : "wash-rose"
      }`}
    >
      <div
        className={`flex items-baseline gap-[3px] leading-[1.05] tracking-[-0.02em] ${
          isTide ? "text-tide" : "text-accent"
        } ${
          isText
            ? "font-serif text-[1.5rem] leading-[1.35] font-bold"
            : "font-mono text-[clamp(1.9rem,3.6vw,2.5rem)] font-bold tnum"
        }`}
      >
        <span>{shown}</span>
        {kpi.unit ? <span className="text-[0.48em] font-medium">{kpi.unit}</span> : null}
      </div>

      <div className="mt-3 text-[13px] leading-[1.5] text-ink-2">{kpi.label}</div>
      {kpi.sub ? (
        <div className="mt-1.5 font-mono text-[10.5px] tracking-[0.06em] text-ink-3">
          {kpi.sub}
        </div>
      ) : null}
    </div>
  );
}
