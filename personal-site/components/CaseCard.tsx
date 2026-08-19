import Link from "next/link";
import type { CaseStudy } from "@/content/cases";

/**
 * 案例卡
 * 縮圖第一期用柔紗漸層（沒有照片也撐得起來）；
 * 之後換成脫敏過的 Dashboard 截圖或數據圖表即可。
 */
export default function CaseCard({ item }: { item: CaseStudy }) {
  const isTide = item.tone === "tide";

  return (
    <Link
      href={`/work/${item.slug}/`}
      className="group flex flex-col overflow-hidden rounded-[14px] border border-line bg-surface shadow-card transition-all duration-200 hover:-translate-y-[3px] hover:shadow-lift"
    >
      <div
        className={`grain flex h-[168px] items-end p-5 ${isTide ? "veil-tide" : "veil-rose"}`}
      >
        <span className="relative z-[2] rounded-full bg-white/85 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#26282C]">
          {item.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-[22px]">
        <h3 className="mb-2.5 font-serif text-[1.18rem] font-bold leading-[1.35] tracking-[-0.02em]">
          {item.title}
        </h3>
        <p className="mb-4 flex-1 text-[14px] leading-[1.7] text-ink-2">{item.excerpt}</p>

        <div className="flex items-baseline gap-2 border-t border-line pt-[15px]">
          <span
            className={`font-mono text-[1.35rem] font-bold tnum ${
              isTide ? "text-tide" : "text-accent"
            }`}
          >
            {item.result.value}
          </span>
          <span className="text-[12.5px] text-ink-3">{item.result.note}</span>
        </div>
      </div>
    </Link>
  );
}
