import Link from "next/link";
import { nav, site } from "@/content/site";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="no-print sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex h-[60px] w-full max-w-[1120px] items-center justify-between px-6">
        <Link href="/" className="font-serif text-[17px] font-bold tracking-normal">
          {site.shortName}
          <span className="text-accent">.</span>
        </Link>

        <nav aria-label="主選單" className="hidden gap-[22px] text-[13.5px] text-ink-2 md:flex">
          {nav.slice(1).map((n) => (
            <Link key={n.href} href={n.href} className="transition-colors hover:text-accent">
              {n.label}
            </Link>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
