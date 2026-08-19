"use client";

import { useEffect, useState } from "react";

type Mode = "light" | "dark";

export default function ThemeToggle() {
  const [mode, setMode] = useState<Mode | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Mode | null;
    if (saved) {
      setMode(saved);
      return;
    }
    setMode(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }, []);

  function toggle() {
    const next: Mode = mode === "dark" ? "light" : "dark";
    setMode(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={mode === "dark" ? "切換為亮色模式" : "切換為暗色模式"}
      className="rounded-full border border-line-strong px-3 py-1.5 font-mono text-[11px] tracking-[0.08em] text-ink-2 transition-colors hover:border-accent hover:text-accent"
    >
      {mode === "dark" ? "亮色" : "暗色"}
    </button>
  );
}
