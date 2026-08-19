import Link from "next/link";
import Kpi from "@/components/Kpi";
import CaseCard from "@/components/CaseCard";
import Reveal from "@/components/Reveal";
import {
  Band,
  BtnGhost,
  BtnPrimary,
  Eyebrow,
  Pill,
  Section,
  SectionHead,
  Wrap,
} from "@/components/ui";
import { site } from "@/content/site";
import { kpis } from "@/content/kpis";
import { angles, services } from "@/content/services";
import { featuredCases } from "@/content/cases";
import { brands } from "@/content/profile";
import { featuredExperiences } from "@/content/experience";

export default function Home() {
  return (
    <>
      {/* ============ 1. Hero ============ */}
      <div className="grain veil-fade relative overflow-hidden pb-[88px] pt-[104px] md:pb-[108px] md:pt-[132px]">
        <Wrap className="relative z-[2]">
          <Eyebrow>{site.role}</Eyebrow>
          <h1 className="mb-7 max-w-[15em] font-serif text-[clamp(2.2rem,6.2vw,4.4rem)] font-bold leading-[1.18] tracking-[-0.02em]">
            把投放做成系統，
            <br />
            而不是每個月重來一次。
          </h1>
          <p className="mb-10 max-w-[34em] text-[clamp(1rem,1.6vw,1.18rem)] text-ink-2">
            {site.lede}
          </p>
          <div className="flex flex-wrap gap-3.5">
            <BtnPrimary href="/contact/">聊聊合作 →</BtnPrimary>
            <BtnGhost href="/work/">看我做過什麼</BtnGhost>
          </div>
        </Wrap>
      </div>

      {/* ============ 2. 數據證明條 ============ */}
      <Section className="!pt-[64px]">
        <Wrap>
          <Reveal>
            <div className="mb-8 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
              成果數據 — 粉色講行銷，藍色講技術
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {kpis.map((k) => (
                <Kpi key={k.label} kpi={k} />
              ))}
            </div>
          </Reveal>
        </Wrap>
      </Section>

      {/* ============ 3. 我能幫你什麼 ============ */}
      <Section alt>
        <Wrap>
          <Reveal>
            <SectionHead
              no="01 / 合作方式"
              title="我能幫你什麼"
              lede="成長不是靠某一次爆紅，是靠一組會持續運轉的結構。以下三件事，通常會一起發生。"
            />
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.no} delay={i * 80}>
                <div className="flex h-full flex-col rounded-[14px] border border-line bg-surface p-7 shadow-card">
                  <span
                    className={`mb-4 font-mono text-[11px] tracking-[0.2em] ${
                      s.tone === "tide" ? "text-tide" : "text-accent"
                    }`}
                  >
                    {s.no}
                  </span>
                  <h3 className="mb-3 font-serif text-[1.25rem] font-bold leading-[1.35] tracking-[-0.02em]">
                    {s.title}
                  </h3>
                  <p className="mb-5 text-[14px] leading-[1.75] text-ink-2">{s.lede}</p>
                  <ul className="mt-auto space-y-2 border-t border-line pt-4 text-[13.5px] text-ink-2">
                    {s.points.slice(0, 4).map((p) => (
                      <li key={p} className="flex gap-2.5">
                        <span
                          aria-hidden
                          className={`mt-[9px] h-1 w-1 shrink-0 rounded-full ${
                            s.tone === "tide" ? "bg-tide" : "bg-accent"
                          }`}
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={240}>
            <div className="mt-8">
              <Link
                href="/services/"
                className="border-b border-accent/40 text-[14px] text-accent transition-colors hover:border-accent"
              >
                看完整的合作方式 →
              </Link>
            </div>
          </Reveal>
        </Wrap>
      </Section>

      {/* ============ 4. 為什麼是我 ============ */}
      <Section>
        <Wrap>
          <Reveal>
            <SectionHead
              no="02 / 視角"
              title="代理商 × 品牌方 × 媒體 × 技術"
              lede="這四個位置我都待過。疊起來的結果是：看一個行銷問題時，能同時想到「這樣投有沒有效」「品牌端敢不敢做」「內容端做不做得出來」，以及「這件事能不能自動化」。"
            />
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-[14px] border border-line bg-line sm:grid-cols-2">
            {angles.map((a, i) => (
              <Reveal key={a.label} delay={i * 70}>
                <div className="h-full bg-bg p-7">
                  <span
                    className={`mb-3.5 inline-block rounded-full px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.14em] ${
                      a.tone === "tide" ? "wash-tide text-tide" : "wash-rose text-accent"
                    }`}
                  >
                    {a.label}
                  </span>
                  <h3 className="mb-2.5 font-serif text-[1.15rem] font-bold tracking-[-0.02em]">
                    {a.title}
                  </h3>
                  <p className="text-[14px] leading-[1.75] text-ink-2">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Wrap>
      </Section>

      <Band tone="rose" />

      {/* ============ 5. 精選案例 ============ */}
      <Section alt>
        <Wrap>
          <Reveal>
            <SectionHead
              no="03 / 案例"
              title="做過的事"
              lede="為尊重前東家與客戶，品牌名一律以類別呈現，數字則完全保留。"
            />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredCases.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80}>
                <CaseCard item={c} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={240}>
            <div className="mt-8">
              <Link
                href="/work/"
                className="border-b border-accent/40 text-[14px] text-accent transition-colors hover:border-accent"
              >
                看全部案例 →
              </Link>
            </div>
          </Reveal>
        </Wrap>
      </Section>

      {/* ============ 6. 品牌牆 ============ */}
      <Section>
        <Wrap>
          <Reveal>
            <SectionHead no="04 / 合作過的品牌" title="服務過的品牌" />
            <p className="max-w-[920px] font-serif text-[clamp(1.05rem,2.3vw,1.55rem)] leading-[2.1] text-ink-2">
              {brands.map((b, i) => (
                <span key={b}>
                  <b className="font-semibold text-ink">{b}</b>
                  {i < brands.length - 1 ? (
                    <span className="mx-[0.45em] text-[color:var(--slate)]">·</span>
                  ) : null}
                </span>
              ))}
            </p>

            <div className="mt-10 flex flex-wrap gap-2.5">
              <Pill>品牌成長策略</Pill>
              <Pill>成效型廣告優化</Pill>
              <Pill>電商營運</Pill>
              <Pill>社群經營</Pill>
              <Pill>數據分析</Pill>
              <Pill>企業內訓</Pill>
              <Pill tone="tide">AI 工作流開發</Pill>
              <Pill tone="tide">行銷數據自動化</Pill>
              <Pill tone="tide">儀表板開發</Pill>
            </div>
          </Reveal>
        </Wrap>
      </Section>

      {/* ============ 7. 經歷時間軸 ============ */}
      <Section alt>
        <Wrap>
          <Reveal>
            <SectionHead no="05 / 經歷" title="一路走過來" />
          </Reveal>

          <ol className="measure border-l border-line pl-8">
            {featuredExperiences.map((e, i) => (
              <Reveal key={e.period} as="li" delay={i * 60} className="relative pb-10 last:pb-0">
                <span
                  aria-hidden
                  className={`absolute -left-[35px] top-2 h-[9px] w-[9px] rounded-full border-[1.5px] ${
                    e.current
                      ? "border-accent bg-accent"
                      : "border-[color:var(--slate)] bg-bg"
                  }`}
                />
                <div className="font-mono text-[11.5px] tracking-[0.06em] text-ink-3">
                  {e.period}
                </div>
                <h3 className="mb-0.5 mt-1.5 font-serif text-[1.12rem] font-bold tracking-[-0.02em]">
                  {e.role}
                </h3>
                <div className="text-[13.5px] text-ink-2">{e.org}</div>
                <p className="mt-2 text-[13.5px] leading-[1.75] text-ink-2">{e.summary}</p>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={200}>
            <div className="mt-9">
              <Link
                href="/resume/"
                className="border-b border-accent/40 text-[14px] text-accent transition-colors hover:border-accent"
              >
                看完整履歷 →
              </Link>
            </div>
          </Reveal>
        </Wrap>
      </Section>

      <Band tone="tide" />

      {/* ============ 8. CTA ============ */}
      <Section>
        <Wrap>
          <Reveal>
            <div className="measure">
              <h2 className="mb-5 font-serif text-[clamp(1.7rem,3.4vw,2.5rem)] font-bold leading-[1.25] tracking-[-0.02em]">
                有想解的問題？
              </h2>
              <p className="mb-8 text-[15.5px] text-ink-2">
                不管是投放怎麼調、電商怎麼起盤，還是想把某段手工流程做成系統 ——
                都歡迎直接寫信給我，聊聊看能做什麼。
              </p>
              <div className="flex flex-wrap gap-3.5">
                <BtnPrimary href="/contact/">寫信給我 →</BtnPrimary>
                <BtnGhost href="/about/">先認識一下</BtnGhost>
              </div>
            </div>
          </Reveal>
        </Wrap>
      </Section>
    </>
  );
}
