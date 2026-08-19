import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { Band, BtnPrimary, Eyebrow, Note, Section, SectionHead, Wrap } from "@/components/ui";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "合作方式",
  description:
    "品牌成長顧問、AI × 行銷工作流導入、顧問諮詢與企業內訓 —— 三種常見的合作方式與實際的進行節奏。",
};

const howItGoes = [
  {
    no: "01",
    title: "先聊一次，不用準備什麼",
    body: "你把現在卡住的地方講一遍就好。通常聊 30–45 分鐘，我會先判斷這件事是不是真的需要外部的人幫忙 —— 有時候答案是不需要，那我會直接說。",
  },
  {
    no: "02",
    title: "我先看數據，再給判斷",
    body: "在提任何做法之前，我會想先看你現有的數字：投放結構、轉換路徑、會員或名單的狀況。沒有數據就開藥方，那是猜。",
  },
  {
    no: "03",
    title: "拆成看得到進度的階段",
    body: "不做那種「三個月後才知道有沒有用」的計畫。每個階段都要有能被檢核的指標，做錯了要能早點發現、早點轉向。",
  },
  {
    no: "04",
    title: "留下能自己跑的東西",
    body: "合作結束後，流程、儀表板、判斷標準要留在你的團隊裡。我的目標是讓你之後不需要我。",
  },
];

export default function Services() {
  return (
    <>
      <div className="grain veil-fade relative overflow-hidden pb-16 pt-[88px] md:pb-20 md:pt-[112px]">
        <Wrap className="relative z-[2]">
          <Eyebrow>合作方式</Eyebrow>
          <h1 className="mb-6 max-w-[16em] font-serif text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.2] tracking-[-0.02em]">
            我怎麼幫人
            <br />
            把成長這件事解開。
          </h1>
          <p className="max-w-[34em] text-[clamp(1rem,1.6vw,1.12rem)] text-ink-2">
            下面三種是最常見的合作型態，實際上它們經常會混在一起 —— 想清楚之後總是要有人去做，
            而做著做著就會發現有些事該被自動化。
          </p>
        </Wrap>
      </div>

      {/* 三種合作 */}
      <Section className="!pt-16">
        <Wrap>
          <div className="space-y-6">
            {services.map((s, i) => (
              <Reveal key={s.no} delay={i * 70}>
                <div className="grid gap-7 rounded-[14px] border border-line bg-surface p-7 shadow-card md:grid-cols-[1fr_1.15fr] md:p-9">
                  <div>
                    <span
                      className={`mb-4 block font-mono text-[11px] tracking-[0.2em] ${
                        s.tone === "tide" ? "text-tide" : "text-accent"
                      }`}
                    >
                      {s.no}
                    </span>
                    <h2 className="mb-3 font-serif text-[1.45rem] font-bold leading-[1.3] tracking-[-0.02em]">
                      {s.title}
                    </h2>
                    <p className="text-[14.5px] leading-[1.8] text-ink-2">{s.lede}</p>
                  </div>

                  <ul className="space-y-2.5 self-center border-t border-line pt-6 text-[14px] text-ink-2 md:border-l md:border-t-0 md:pl-9 md:pt-0">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span
                          aria-hidden
                          className={`mt-[10px] h-1 w-1 shrink-0 rounded-full ${
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
        </Wrap>
      </Section>

      <Band tone="tide" />

      {/* 怎麼進行 */}
      <Section alt>
        <Wrap>
          <Reveal>
            <SectionHead
              no="01 / 節奏"
              title="通常會怎麼進行"
              lede="每個案子不一樣，但這四步大致上跑不掉。"
            />
          </Reveal>

          <ol className="grid gap-6 md:grid-cols-2">
            {howItGoes.map((h, i) => (
              <Reveal key={h.no} as="li" delay={i * 70}>
                <div className="h-full rounded-[14px] border border-line bg-bg-alt p-7">
                  <span className="mb-3 block font-mono text-[11px] tracking-[0.2em] text-accent">
                    {h.no}
                  </span>
                  <h3 className="mb-2.5 font-serif text-[1.12rem] font-bold tracking-[-0.02em]">
                    {h.title}
                  </h3>
                  <p className="text-[14px] leading-[1.8] text-ink-2">{h.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={280}>
            <div className="mt-9">
              <Note>
                <b className="text-ink">關於合作規模與時間</b>
                <br />
                每個案子的範圍差很多，所以我不預設固定方案。先聊一次，看清楚問題長什麼樣子，
                再一起決定用什麼方式進行比較合理。
              </Note>
            </div>
          </Reveal>
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <Reveal>
            <div className="measure">
              <h2 className="mb-5 font-serif text-[clamp(1.6rem,3.2vw,2.2rem)] font-bold leading-[1.25] tracking-[-0.02em]">
                從一封信開始就好
              </h2>
              <p className="mb-8 text-[15.5px] text-ink-2">
                不用先想清楚要什麼。把現在最困擾的那件事講一遍，我們一起看看那是什麼問題。
              </p>
              <BtnPrimary href="/contact/">寫信給我 →</BtnPrimary>
            </div>
          </Reveal>
        </Wrap>
      </Section>
    </>
  );
}
