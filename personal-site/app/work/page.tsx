import type { Metadata } from "next";
import CaseCard from "@/components/CaseCard";
import Reveal from "@/components/Reveal";
import { Eyebrow, Note, Section, Wrap } from "@/components/ui";
import { cases } from "@/content/cases";

export const metadata: Metadata = {
  title: "案例",
  description:
    "潛客名單成本優化、自有電商從零起盤、行銷數據自動化後台 —— 去識別化的實際案例與成果數字。",
};

export default function Work() {
  return (
    <>
      <div className="grain veil-fade relative overflow-hidden pb-16 pt-[88px] md:pb-20 md:pt-[112px]">
        <Wrap className="relative z-[2]">
          <Eyebrow>案例</Eyebrow>
          <h1 className="mb-6 max-w-[16em] font-serif text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.2] tracking-[-0.02em]">
            做過的事。
          </h1>
          <p className="max-w-[34em] text-[clamp(1rem,1.6vw,1.12rem)] text-ink-2">
            為尊重前東家與客戶，品牌名一律以類別呈現，數字則完全保留。
          </p>
        </Wrap>
      </div>

      <Section className="!pt-16">
        <Wrap>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((c, i) => (
              <Reveal key={c.slug} delay={i * 70}>
                <CaseCard item={c} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={240}>
            <div className="mt-12">
              <Note>
                <b className="text-ink">想看更完整的內容？</b>
                <br />
                部分專案含客戶未公開的資料，不方便放在網站上。
                如果你想了解某個案子的細節，寫信給我，我們可以直接聊。
              </Note>
            </div>
          </Reveal>
        </Wrap>
      </Section>
    </>
  );
}
