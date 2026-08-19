import Link from "next/link";
import type { ReactNode } from "react";

/* ============================================================
   容器與版面
   ============================================================ */

export function Wrap({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-[1120px] px-6 ${className}`}>{children}</div>;
}

export function Section({
  children,
  alt = false,
  className = "",
  id,
}: {
  children: ReactNode;
  alt?: boolean;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`py-[72px] md:py-[104px] ${alt ? "bg-bg-alt" : ""} ${className}`}
    >
      {children}
    </section>
  );
}

/** 區塊之間的柔紗漸層帶 —— 代替圖片的呼吸節奏 */
export function Band({ tone = "rose" }: { tone?: "rose" | "tide" }) {
  return (
    <div
      aria-hidden
      className={`grain h-[110px] md:h-[148px] ${tone === "tide" ? "veil-tide" : "veil-flat"}`}
    />
  );
}

/* ============================================================
   標題
   ============================================================ */

export function SectionHead({
  no,
  title,
  lede,
  className = "",
}: {
  no?: string;
  title: string;
  lede?: string;
  className?: string;
}) {
  return (
    <div className={`mb-10 md:mb-[52px] ${className}`}>
      {no ? (
        <span className="mb-3.5 block font-mono text-[11px] tracking-[0.2em] text-accent">
          {no}
        </span>
      ) : null}
      <h2 className="font-serif text-[clamp(1.7rem,3.4vw,2.5rem)] font-bold leading-[1.25] tracking-[-0.02em]">
        {title}
      </h2>
      {lede ? <p className="measure mt-3.5 text-[15.5px] text-ink-2">{lede}</p> : null}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3 font-mono text-[11.5px] font-medium uppercase tracking-[0.22em] text-ink-2">
      <span aria-hidden className="h-px w-7 bg-accent" />
      {children}
    </div>
  );
}

/* ============================================================
   按鈕與連結
   ============================================================ */

const btnBase =
  "inline-flex items-center gap-2 rounded-full border px-6 py-3 text-[14.5px] font-medium transition-all duration-200";

export function BtnPrimary({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className={`${btnBase} border-transparent bg-accent text-accent-ink hover:-translate-y-px hover:bg-accent-hover`}
    >
      {children}
    </Link>
  );
}

export function BtnGhost({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className={`${btnBase} border-line-strong text-ink hover:border-accent hover:text-accent`}
    >
      {children}
    </Link>
  );
}

export function InlineLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const cls =
    "border-b border-accent/40 text-accent transition-colors hover:border-accent";
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/* ============================================================
   標籤
   ============================================================ */

export function Pill({
  children,
  tone = "rose",
}: {
  children: ReactNode;
  tone?: "rose" | "tide";
}) {
  return (
    <span
      className={`rounded-full border border-line px-3.5 py-1.5 text-[12.5px] ${
        tone === "tide" ? "wash-tide text-tide" : "wash-rose text-ink-2"
      }`}
    >
      {children}
    </span>
  );
}

/* ============================================================
   註解框
   ============================================================ */

export function Note({
  children,
  tone = "rose",
}: {
  children: ReactNode;
  tone?: "rose" | "tide";
}) {
  return (
    <div
      className={`measure rounded-r-lg border-l-2 px-5 py-4 text-[14px] text-ink-2 ${
        tone === "tide" ? "wash-tide border-tide" : "wash-rose border-accent"
      }`}
    >
      {children}
    </div>
  );
}
