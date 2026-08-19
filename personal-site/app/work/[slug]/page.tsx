import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { Band, BtnPrimary, Section, Wrap } from "@/components/ui";
import { cases, getCase } from "@/content/cases";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) return { title: "找不到這個案例" };
  return { title: item.title, description: item.excerpt };
}

function Block({
  no,
  title,
  items,
  tone,
}: {
  no: string;
  title: string;
  items: string[];
  tone: "rose" | "tide";
}) {
  return (
    <Reveal>
      <div className="measure">
        <span
          className={`mb-3 block font-mono text-[11px] tracking-[0.2em] ${
            tone === "tide" ? "text-tide" : "text-accent"
          }`}
        >
          {no}
        </span>
        <h2 className="mb-5 font-serif text-[1.5rem] font-bold leading-[1.3] tracking-[-0.02em]">
          {title}
        </h2>
        <div className="space-y-4 text-[15.5px] leading-[1.9] text-ink-2">
          {items.map((t, i) => (
            <p key={i}>{t}</p>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) notFound();

  const isTide = item.tone === "tide";

  return (
    <>
      <div
        className={`grain relative overflow-hidden pb-16 pt-[88px] md:pb-20 md:pt-[112px] ${
          isTide ? "veil-tide" : "veil-fade"
        }`}
      >
        <Wrap className="relative z-[2]">
          <div className="mb-6 flex items-center gap-3 font-mono text-[11.5px] uppercase tracking-[0.18em] text-ink-2">
            <Link href="/work/" className="transition-colors hover:text-accent">
              案例
            </Link>
            <span aria-hidden>/</span>
            <span>{item.tag}</span>
          </div>

          <h1 className="mb-5 max-w-[16em] font-serif text-[clamp(1.9rem,4.6vw,3.1rem)] font-bold leading-[1.22] tracking-[-0.02em]">
            {item.title}
          </h1>
          <p className="mb-6 max-w-[34em] text-[clamp(1rem,1.6vw,1.12rem)] text-ink-2">
            {item.excerpt}
          </p>
          <div className="font-mono text-[11.5px] tracking-[0.08em] text-ink-3">{item.period}</div>
        </Wrap>
      </div>

      {/* 成果數據 */}
      <Section className="!py-14">
        <Wrap>
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {item.outcomes.map((o) => (
                <div
                  key={o.label}
                  className={`rounded-[14px] border border-line px-6 py-7 ${
                    isTide ? "wash-tide" : "wash-rose"
                  }`}
                >
                  <div
                    className={`font-mono text-[clamp(1.8rem,3.4vw,2.4rem)] font-bold leading-[1.05] tracking-[-0.02em] tnum ${
                      isTide ? "text-tide" : "text-accent"
                    }`}
                  >
                    {o.value}
                  </div>
                  <div className="mt-3 text-[13.5px] text-ink-2">{o.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </Wrap>
      </Section>

      <Section alt className="!py-16">
        <Wrap>
          <div className="space-y-14">
            <Block no="01 / 挑戰" title="問題是什麼" items={item.challenge} tone={item.tone} />
            <Block no="02 / 做法" title="我怎麼做" items={item.approach} tone={item.tone} />
            <Block no="03 / 角色" title="我在裡面做什麼" items={item.role} tone={item.tone} />
          </div>
        </Wrap>
      </Section>

      <Band tone={item.tone} />

      <Section>
        <Wrap>
          <Reveal>
            <div className="measure">
              <h2 className="mb-5 font-serif text-[clamp(1.6rem,3.2vw,2.2rem)] font-bold leading-[1.25] tracking-[-0.02em]">
                有類似的問題？
              </h2>
              <p className="mb-8 text-[15.5px] text-ink-2">
                每個案子的條件都不一樣，但思考的方式是可以搬的。想聊聊的話，寫信給我。
              </p>
              <div className="flex flex-wrap gap-3.5">
                <BtnPrimary href="/contact/">寫信給我 →</BtnPrimary>
                <Link
                  href="/work/"
                  className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-[14.5px] font-medium transition-all duration-200 hover:border-accent hover:text-accent"
                >
                  ← 回到案例列表
                </Link>
              </div>
            </div>
          </Reveal>
        </Wrap>
      </Section>
    </>
  );
}
