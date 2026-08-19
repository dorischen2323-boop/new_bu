/**
 * 首頁數據證明條
 * tone: "rose" = 行銷側（深玫瑰）｜"tide" = 技術側（深潮藍）
 * ⚠️ TODO 水球球（2025/06 迄今）的成績數字尚未提供，補到後請優先換掉 placeholder 項
 */

export type Kpi = {
  value: number | string;
  unit?: string;
  label: string;
  sub?: string;
  tone: "rose" | "tide";
  /** 數字要不要跑 count-up（字串型如「金投賞金獎」設 false） */
  animate?: boolean;
};

export const kpis: Kpi[] = [
  {
    value: 15,
    unit: "+ 年",
    label: "數位行銷資歷",
    sub: "2009 – NOW",
    tone: "rose",
    animate: true,
  },
  {
    value: 10000,
    unit: "+",
    label: "單案潛在名單",
    sub: "CPA < 3,000",
    tone: "rose",
    animate: true,
  },
  {
    value: 35,
    unit: "%",
    label: "電商業績月成長",
    sub: "MoM 25–35%",
    tone: "rose",
    animate: true,
  },
  {
    value: 12,
    label: "自建儀表板頁面",
    sub: "NEXT.JS · SUPABASE",
    tone: "tide",
    animate: true,
  },
  {
    value: 14,
    label: "每日自動化資料管線",
    sub: "PYTHON · DAILY",
    tone: "tide",
    animate: true,
  },
  {
    value: "金投賞金獎",
    label: "搜尋行銷類",
    sub: "2011 · 淘寶網",
    tone: "rose",
    animate: false,
  },
];
