import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { Eyebrow, Note, Section, Wrap } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "聊聊",
  description: `想聊聊合作？直接寫信給 ${site.shortName}：${site.email}`,
};

const goodFits = [
  "投放成效卡住，想知道問題出在哪一層",
  "要從零建自有電商，不知道該先做什麼",
  "數據散在五個地方，每個月都在手動拼報表",
  "團隊想導入 AI 工具，但不確定該從哪裡開始",
  "想找人幫團隊上一堂能落地的行銷課",
];

export default function Contact() {
  const subject = encodeURIComponent("想聊聊合作");
  const body = encodeURIComponent(
    "Hi Doris，\n\n我是＿＿＿，來自＿＿＿。\n\n我們現在遇到的問題是：\n\n\n希望能約時間聊聊，謝謝！"
  );

  return (
    <>
      <div className="grain veil-fade relative overflow-hidden pb-16 pt-[88px] md:pb-20 md:pt-[112px]">
        <Wrap className="relative z-[2]">
          <Eyebrow>聊聊</Eyebrow>
          <h1 className="mb-6 max-w-[16em] font-serif text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.2] tracking-[-0.02em]">
            從一封信開始就好。
          </h1>
          <p className="max-w-[34em] text-[clamp(1rem,1.6vw,1.12rem)] text-ink-2">
            不用先想清楚要什麼。把現在最困擾的那件事講一遍，我們一起看看那是什麼問題。
          </p>
        </Wrap>
      </div>

      <Section className="!pt-16">
        <Wrap>
          <div className="grid gap-12 md:grid-cols-[1.1fr_1fr]">
            <Reveal>
              <div>
                <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
                  Email
                </div>
                <a
                  href={`mailto:${site.email}?subject=${subject}&body=${body}`}
                  className="inline-block break-all font-serif text-[clamp(1.4rem,3.2vw,2rem)] font-bold tracking-[-0.02em] text-accent transition-colors hover:text-accent-hover"
                >
                  {site.email}
                </a>
                <p className="measure mt-6 text-[15px] leading-[1.85] text-ink-2">
                  點一下會直接開信件視窗，草稿也幫你寫好了 ——
                  你只要把空格填一填、把問題講一遍就可以寄出。
                </p>
                <p className="measure mt-4 text-[15px] leading-[1.85] text-ink-2">
                  我平常上班時間不一定能馬上回，但通常兩個工作天內會回覆。
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-[14px] border border-line bg-surface p-7 shadow-card">
                <h2 className="mb-5 font-serif text-[1.15rem] font-bold tracking-[-0.02em]">
                  這些情況特別適合找我
                </h2>
                <ul className="space-y-3 text-[14px] leading-[1.75] text-ink-2">
                  {goodFits.map((g) => (
                    <li key={g} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="mt-14">
              <Note tone="tide">
                <b className="text-ink">關於保密</b>
                <br />
                網站上的案例都經過去識別化處理。同樣地，如果我們合作，
                你的資料與數字也不會出現在任何對外的內容裡。
              </Note>
            </div>
          </Reveal>
        </Wrap>
      </Section>
    </>
  );
}
