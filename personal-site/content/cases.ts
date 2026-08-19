/**
 * 案例
 * ⚠️ 去識別化原則：品牌名一律類別化（「某汽車品牌」），數字全留。
 *    品牌名字只出現在「服務過的品牌」文字牆，不與個別案例做連結。
 */

export type CaseStudy = {
  slug: string;
  /** 縮圖上的分類標籤 */
  tag: string;
  title: string;
  /** 列表卡片上的一句話 */
  excerpt: string;
  /** 卡片底部的成果數字 */
  result: { value: string; note: string };
  tone: "rose" | "tide";
  period: string;
  /** 詳頁四段結構 */
  challenge: string[];
  approach: string[];
  outcomes: { value: string; label: string }[];
  role: string[];
  featured?: boolean;
};

export const cases: CaseStudy[] = [
  {
    slug: "auto-lead-cpa",
    tag: "潛客名單",
    title: "某汽車品牌｜潛客名單成本優化",
    excerpt:
      "預算不變的前提下，重構受眾分層與素材輪替節奏，把獲客成本壓進目標線內。",
    result: { value: "10,000+", note: "潛在名單 · CPA < 3,000" },
    tone: "rose",
    period: "2023 – 2025",
    challenge: [
      "汽車是高單價、長決策週期的品類，名單量與名單品質天生互斥 —— 放寬受眾就拿到一堆無效表單，收緊受眾則量體撐不起來。",
      "客戶要的是「量要夠，而且成本要壓在線內」，兩件事同時要。",
    ],
    approach: [
      "把受眾拆成明確的分層，不同層走不同素材與出價邏輯，不再用同一組廣告打所有人。",
      "建立素材輪替節奏，在成效衰退前主動換素材，而不是等 CPA 漲上來才救。",
      "以每日數據回看調整投放結構，把預算持續往轉換效率高的組合集中。",
    ],
    outcomes: [
      { value: "10,000+", label: "年度累積潛在名單" },
      { value: "< 3,000", label: "平均 CPA（元）" },
    ],
    role: [
      "媒體企劃經理 —— 負責投放策略制定、受眾架構設計、素材需求規劃與成效檢討。",
    ],
    featured: true,
  },
  {
    slug: "ecom-zero-to-one",
    tag: "電商成長",
    title: "某有機飲品｜自有電商從零起盤",
    excerpt:
      "從品牌定位、官網企劃到會員經營一手包辦，並開拓外部通路作為第二成長曲線。",
    result: { value: "25–35%", note: "業績月成長 MoM" },
    tone: "rose",
    period: "2021 – 2022",
    challenge: [
      "品牌要從零建立自有電商，沒有既有會員、沒有流量基礎，也沒有現成的內容素材。",
      "同時要兼顧「自有通路要長大」與「不能被單一通路綁死」兩個目標。",
    ],
    approach: [
      "先把品牌定位與溝通主軸定下來，再往下長官網架構、內容與活動節奏。",
      "把官網、FB、IG、LINE 串成一條動線：社群負責認識、LINE 負責回訪、官網負責成交。",
      "建立會員經營機制，讓回購成為成長的基本盤而不是靠檔期硬拉。",
      "同步開拓 momo 購物網通路，讓自有與外部通路互相帶量。",
    ],
    outcomes: [
      { value: "25–35%", label: "自有電商業績月成長" },
      { value: "+1", label: "新增外部通路（momo）" },
    ],
    role: [
      "資深行銷企劃 —— 品牌策略、官網企劃、公關活動、會員經營、異業合作與媒體採購。",
    ],
    featured: true,
  },
  {
    slug: "marketing-data-automation",
    tag: "AI 工作流",
    title: "行銷數據自動化後台",
    excerpt:
      "把散在 Sheet、廣告後台與各社群平台的數據收攏成一頁儀表板，每日自動更新。",
    result: { value: "12", note: "儀表板頁面 · 每日自動化" },
    tone: "tide",
    period: "2025 – 現在",
    challenge: [
      "營運數據散落在 Google Sheet、各廣告後台、社群平台與客服工具，每次要看一個問題就得手動翻五個地方。",
      "資料對不起來、口徑不一致，導致決策時間都花在「先確認數字對不對」。",
    ],
    approach: [
      "把所有來源統一收進單一資料庫，訂出唯一口徑，讓每個數字只有一個正本。",
      "寫一組每日自動執行的資料管線，把訂單、廣告、社群、客服等來源自動彙整入庫。",
      "前端做成 12 頁的儀表板：每日業績、訂單明細、廣告日報、名單磁鐵成效、行銷行事曆、客服與 B2B 名單。",
      "權限走資料庫層的存取控制，非授權者看不到任何資料。",
    ],
    outcomes: [
      { value: "12", label: "儀表板頁面" },
      { value: "14", label: "每日自動化資料管線" },
      { value: "0", label: "手動彙整報表的步驟" },
    ],
    role: [
      "成長駭客／行銷經理 —— 需求定義、資料口徑設計、前後端開發與部署，一人從頭做到上線。",
      "技術棧：Next.js（靜態匯出）、Supabase（Auth／RLS／RPC／Edge Functions）、Cloudflare Workers、Python 資料管線。",
    ],
    featured: true,
  },
];

export const featuredCases = cases.filter((c) => c.featured);

export function getCase(slug: string) {
  return cases.find((c) => c.slug === slug);
}
