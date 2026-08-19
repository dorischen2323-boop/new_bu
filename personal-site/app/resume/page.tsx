import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { Eyebrow, Pill, Section, Wrap } from "@/components/ui";
import PrintButton from "./PrintButton";
import { site } from "@/content/site";
import { experiences } from "@/content/experience";
import { brands, skillGroups } from "@/content/profile";
import { kpis } from "@/content/kpis";

export const metadata: Metadata = {
  title: "履歷",
  description: `${site.name} 完整經歷、技能與合作品牌。`,
};

export default function Resume() {
  return (
    <>
      <div className="grain veil-fade relative overflow-hidden pb-14 pt-[88px] md:pb-16 md:pt-[112px]">
        <Wrap className="relative z-[2]">
          <Eyebrow>履歷</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h1 className="mb-3 font-serif text-[clamp(2rem,5vw,3.2rem)] font-bold leading-[1.2] tracking-[-0.02em]">
                {site.name}
              </h1>
              <p className="text-[clamp(1rem,1.6vw,1.12rem)] text-ink-2">{site.role}</p>
              <p className="mt-2 font-mono text-[13px] tracking-[0.04em] text-ink-2">
                {site.email}
              </p>
            </div>
            <PrintButton />
          </div>
        </Wrap>
      </div>

      {/* 摘要數據 */}
      <Section className="!py-12">
        <Wrap>
          <Reveal>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
              {kpis.map((k) => (
                <div
                  key={k.label}
                  className={`rounded-[12px] border border-line px-4 py-5 ${
                    k.tone === "tide" ? "wash-tide" : "wash-rose"
                  }`}
                >
                  <div
                    className={`leading-[1.1] tracking-[-0.02em] ${
                      typeof k.value === "string"
                        ? "font-serif text-[1.05rem] font-bold leading-[1.4]"
                        : "font-mono text-[1.6rem] font-bold tnum"
                    } ${k.tone === "tide" ? "text-tide" : "text-accent"}`}
                  >
                    {typeof k.value === "number" ? k.value.toLocaleString("en-US") : k.value}
                    {k.unit ? <span className="text-[0.5em] font-medium">{k.unit}</span> : null}
                  </div>
                  <div className="mt-2 text-[12px] leading-[1.5] text-ink-2">{k.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </Wrap>
      </Section>

      {/* 完整經歷 */}
      <Section alt className="!pt-14">
        <Wrap>
          <Reveal>
            <h2 className="mb-9 font-serif text-[1.6rem] font-bold tracking-[-0.02em]">工作經歷</h2>
          </Reveal>

          <ol className="space-y-8">
            {experiences.map((e, i) => (
              <Reveal key={e.period} as="li" delay={i * 50}>
                <article className="rounded-[14px] border border-line bg-surface p-7 shadow-card">
                  <div className="mb-4 flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-4">
                    <div>
                      <h3 className="font-serif text-[1.2rem] font-bold tracking-[-0.02em]">
                        {e.role}
                        {e.current ? (
                          <span className="ml-3 rounded-full wash-rose px-2.5 py-1 align-middle font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                            現職
                          </span>
                        ) : null}
                      </h3>
                      <div className="mt-1 text-[14px] text-ink-2">
                        {e.org}
                        {e.site ? (
                          <span className="ml-2 font-mono text-[12px] text-ink-3">{e.site}</span>
                        ) : null}
                      </div>
                    </div>
                    <div className="font-mono text-[12px] tracking-[0.06em] text-ink-3">
                      {e.period}
                    </div>
                  </div>

                  <ul className="space-y-2 text-[14.5px] leading-[1.8] text-ink-2">
                    {e.details.map((d) => (
                      <li key={d} className="flex gap-3">
                        <span
                          aria-hidden
                          className={`mt-[11px] h-1 w-1 shrink-0 rounded-full ${
                            e.tone === "tide" ? "bg-tide" : "bg-accent"
                          }`}
                        />
                        {d}
                      </li>
                    ))}
                  </ul>

                  {e.brands?.length ? (
                    <div className="mt-5 border-t border-line pt-4 text-[13px] text-ink-3">
                      <span className="font-mono text-[10.5px] uppercase tracking-[0.14em]">
                        合作品牌
                      </span>
                      <span className="ml-3 text-ink-2">{e.brands.join("、")}</span>
                    </div>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </ol>
        </Wrap>
      </Section>

      {/* 技能 */}
      <Section>
        <Wrap>
          <Reveal>
            <h2 className="mb-9 font-serif text-[1.6rem] font-bold tracking-[-0.02em]">工作技能</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {skillGroups.map((g, i) => (
              <Reveal key={g.title} delay={i * 60}>
                <div className="h-full rounded-[14px] border border-line p-7">
                  <h3
                    className={`mb-4 font-serif text-[1.05rem] font-bold tracking-[-0.02em] ${
                      g.tone === "tide" ? "text-tide" : ""
                    }`}
                  >
                    {g.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((it) => (
                      <Pill key={it} tone={g.tone}>
                        {it}
                      </Pill>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Wrap>
      </Section>

      {/* 品牌 */}
      <Section alt>
        <Wrap>
          <Reveal>
            <h2 className="mb-7 font-serif text-[1.6rem] font-bold tracking-[-0.02em]">
              服務過的品牌
            </h2>
            <p className="max-w-[920px] font-serif text-[clamp(1rem,2vw,1.35rem)] leading-[2.1] text-ink-2">
              {brands.map((b, i) => (
                <span key={b}>
                  <b className="font-semibold text-ink">{b}</b>
                  {i < brands.length - 1 ? (
                    <span className="mx-[0.45em] text-[color:var(--slate)]">·</span>
                  ) : null}
                </span>
              ))}
            </p>
          </Reveal>
        </Wrap>
      </Section>
    </>
  );
}
