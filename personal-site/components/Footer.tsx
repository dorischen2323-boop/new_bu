import Link from "next/link";
import { nav, site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="no-print border-t border-line py-11">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-serif text-[15px] font-bold">
            {site.name}
            <span className="text-accent">.</span>
          </div>
          <div className="mt-1 text-[13px] text-ink-3">{site.role}</div>
        </div>

        <nav aria-label="頁尾選單" className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-ink-2">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="transition-colors hover:text-accent">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="font-mono text-[11.5px] tracking-[0.06em] text-ink-3">
          © {site.domain}
        </div>
      </div>
    </footer>
  );
}
