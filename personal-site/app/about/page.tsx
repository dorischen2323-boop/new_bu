import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { Band, BtnPrimary, Eyebrow, Pill, Section, SectionHead, Wrap } from "@/components/ui";
import { aboutLede, aboutParagraphs, skillGroups } from "@/content/profile";
import { angles } from "@/content/services";

export const metadata: Metadata = {
  title: "關於我",
  description: aboutLede,
};

export default function About() {
  return (
    <>
      <div className="grain veil-fade relative overflow-hidden pb-16 pt-[88px] md:pb-20 md:pt-[112px]">
        <Wrap className="relative z-[2]">
          <Eyebrow>關於我</Eyebrow>
          <h1 className="mb-6 max-w-[16em] font-serif text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.2] tracking-[-0.02em]">
            三個視角，
            <br />
            加上一雙自己動手的手。
          </h1>
          <p className="max-w-[34em] text-[clamp(1rem,1.6vw,1.12rem)] text-ink-2">{aboutLede}</p>
        </Wrap>
      </div>

      {/* 敘事 */}
      <Section className="!pt-16">
        <Wrap>
          <div className="measure space-y-6 text-[16px] leading-[1.9]">
            {aboutParagraphs.map((p, i) => (
              <Reveal key={i} delay={i * 40}>
                <p className={i === 3 ? "font-serif text-[1.25rem] font-bold leading-[1.6]" : ""}>
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </Wrap>
      </Section>

      <Band tone="rose" />

      {/* 四個視角 */}
      <Section alt>
        <Wrap>
          <Reveal>
            <SectionHead no="01 / 視角" title="我站過的四個位置" />
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-[14px] border border-line bg-line sm:grid-cols-2">
            {angles.map((a, i) => (
              <Reveal key={a.label} delay={i * 70}>
                <div className="h-full bg-bg-alt p-7">
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

      {/* 技能 */}
      <Section>
        <Wrap>
          <Reveal>
            <SectionHead
              no="02 / 技能"
              title="我會的事"
              lede="粉色是行銷側，藍色是技術側 —— 這兩件事在我這裡是同一件事。"
            />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {skillGroups.map((g, i) => (
              <Reveal key={g.title} delay={i * 70}>
                <div className="h-full rounded-[14px] border border-line bg-surface p-7 shadow-card">
                  <h3
                    className={`mb-4 font-serif text-[1.1rem] font-bold tracking-[-0.02em] ${
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

      <Section alt>
        <Wrap>
          <Reveal>
            <div className="measure">
              <h2 className="mb-5 font-serif text-[clamp(1.6rem,3.2vw,2.2rem)] font-bold leading-[1.25] tracking-[-0.02em]">
                想聊聊嗎？
              </h2>
              <p className="mb-8 text-[15.5px] text-ink-2">
                如果你手上剛好有個卡住的問題，或只是想知道某件事能不能自動化 —— 寫信給我就好。
              </p>
              <BtnPrimary href="/contact/">寫信給我 →</BtnPrimary>
            </div>
          </Reveal>
        </Wrap>
      </Section>
    </>
  );
}
