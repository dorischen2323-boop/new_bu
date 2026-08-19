import { BtnGhost, BtnPrimary, Wrap } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="grain veil-fade relative flex min-h-[60vh] items-center overflow-hidden py-24">
      <Wrap className="relative z-[2]">
        <div className="mb-5 font-mono text-[11.5px] uppercase tracking-[0.22em] text-ink-2">
          404
        </div>
        <h1 className="mb-5 font-serif text-[clamp(1.9rem,4.6vw,3rem)] font-bold leading-[1.2] tracking-[-0.02em]">
          這一頁不在這裡。
        </h1>
        <p className="measure mb-9 text-[15.5px] text-ink-2">
          可能是網址打錯了，或這個頁面已經搬走。從首頁重新看看吧。
        </p>
        <div className="flex flex-wrap gap-3.5">
          <BtnPrimary href="/">回首頁</BtnPrimary>
          <BtnGhost href="/work/">看案例</BtnGhost>
        </div>
      </Wrap>
    </div>
  );
}
