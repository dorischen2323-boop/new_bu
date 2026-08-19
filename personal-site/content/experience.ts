/**
 * 經歷時間軸
 * featured: true → 在首頁摘要版顯示；/resume 一律顯示全部
 */

export type Experience = {
  period: string;
  role: string;
  org: string;
  site?: string;
  /** 一句話摘要，首頁用 */
  summary: string;
  /** 條列細節，/resume 用 */
  details: string[];
  /** 合作品牌 */
  brands?: string[];
  featured?: boolean;
  current?: boolean;
  /** 這段的重心：行銷 or 技術（決定時間軸點的顏色） */
  tone?: "rose" | "tide";
};

export const experiences: Experience[] = [
  {
    period: "2025.06 — 現在",
    role: "成長駭客 ／ 行銷經理",
    org: "水球軟體學院",
    summary:
      "行銷成長操盤，並主導 AI 工作流開發 —— 把散落各處的行銷流程寫成會自己跑的系統。",
    details: [
      "行銷成長操盤，負責獲客、轉換與營收成長。",
      "自建行銷數據後台：12 頁儀表板，涵蓋每日業績、訂單學員、廣告日報、名單磁鐵、客服與 B2B 名單。",
      "建置每日自動化資料管線，將訂單、廣告、社群、客服等來源自動彙整入庫，開工即見最新數字。",
      "技術棧：Next.js（靜態匯出）、Supabase（Auth／RLS／RPC／Edge Functions）、Cloudflare Workers、Python 資料管線。",
      // TODO 待補：名單數／營收成長／獲客成本改善等具體數字
    ],
    featured: true,
    current: true,
    tone: "tide",
  },
  {
    period: "2023.02 — 2025.05",
    role: "媒體企劃經理",
    org: "博報堂集團",
    summary: "各品牌客戶數位廣告規劃與效能優化，以數據制定投放策略。",
    details: [
      "負責各品牌客戶的數位廣告規劃與效能優化。",
      "以數據分析制定投放策略，2023 年協助客戶取得逾 10,000 筆潛在名單，平均 CPA 控制在 3,000 元以下。",
    ],
    brands: ["MG 汽車", "日立冷氣", "客委會（浪漫台三線專案）"],
    featured: true,
    tone: "rose",
  },
  {
    period: "2021.08 — 2022.08",
    role: "資深行銷企劃",
    org: "揚臻國際有限公司",
    summary: "新電商網站與品牌行銷規劃，涵蓋品牌策略、公關、會員經營與異業合作。",
    details: [
      "規劃新電商網站及品牌行銷，涵蓋品牌策略、公關活動、會員經營與異業合作。",
      "操作官網／FB／IG／LINE 各大平台，負責媒體採購與數據分析。",
      "自家電商平台業績每月成長 25–35%，並開拓 momo 購物網通路。",
    ],
    brands: ["享受享 So 有機綠茶咖啡"],
    featured: true,
    tone: "rose",
  },
  {
    period: "2020.07 — 2021.02",
    role: "專案經理",
    org: "寵聚股份有限公司",
    site: "www.pettalk.tw",
    summary: "寵物健康資訊平台營運、OMO 整合，並一手成立 Podcast 節目。",
    details: [
      "寵物健康資訊平台營運，OMO 整合公關與數位操作。",
      "成功舉辦 2020 台北寵物節實體活動。",
      "策劃寵物商品行銷活動、FB 廣告與數據追蹤，提升導購成效。",
      "一手成立《寵物聽我說》Podcast 節目，含頻道企劃與內容規劃。",
    ],
    featured: true,
    tone: "rose",
  },
  {
    period: "2018.09 — 2020.04",
    role: "數位企劃處 經理",
    org: "ETtoday 新聞雲",
    site: "www.ettoday.net",
    summary: "整合新聞平台自有資源進行媒合行銷，管理自家節目產品與專案。",
    details: [
      "建立多樣產業型數位行銷案，整合新聞平台自有資源進行媒合行銷。",
      "管理自家節目產品與專案規劃，優化廣告投放與成效分析。",
    ],
    brands: ["光泉", "和泰汽車", "SONY 影業", "中華汽車", "統一飲品"],
    featured: true,
    tone: "rose",
  },
  {
    period: "2014.08 — 2018.05",
    role: "行銷公關部主管",
    org: "英奇達資訊",
    summary: "帶領 10 人團隊營運口碑行銷與電商服務平台，半年招募 10 萬名會員。",
    details: [
      "營運自家口碑行銷（試用）及電商服務平台，帶領 10 人團隊。",
      "半年內招募 10 萬名會員。",
      "與品牌合作開展數位導流與電商行銷服務。",
    ],
    brands: ["梅花錶", "時間寵愛", "香水品牌", "保健食品"],
    featured: true,
    tone: "rose",
  },
  {
    period: "2009.12 — 2012.08",
    role: "數位行銷策略經理",
    org: "關鍵數位行銷",
    summary: "為淘寶網打造 2011 金投賞搜尋行銷金獎專案。",
    details: [
      "為淘寶網打造獲獎專案 —— 2011 金投賞搜尋行銷金獎。",
      "以 ROI 導向設計整體行銷策略，達成多項 KPI。",
    ],
    brands: ["淘寶網", "天貓", "統一", "遠傳", "大同電子", "悠美醫美"],
    featured: true,
    tone: "rose",
  },
];

export const featuredExperiences = experiences.filter((e) => e.featured);
