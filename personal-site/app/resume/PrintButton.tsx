"use client";

/** 列印 / 另存 PDF —— 走瀏覽器原生列印，樣式見 globals.css 的 @media print */
export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-[13.5px] font-medium text-ink transition-all duration-200 hover:border-accent hover:text-accent"
    >
      列印 ／ 存成 PDF
    </button>
  );
}
