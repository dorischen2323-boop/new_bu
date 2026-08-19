/**
 * 全站基本資料
 * ⚠️ 語氣規範：全站不得出現「接案／接單／報價」等字眼（Doris 目前仍在職）
 *    一律使用「顧問合作／合作方式／聊聊」。
 */

export const site = {
  name: "陳筱萍 Doris Chen",
  shortName: "Doris Chen",
  role: "品牌成長顧問 ／ AI × 行銷",
  domain: "doris.works",
  url: "https://doris.works",
  email: "pingnew@gmail.com",

  // ⚠️ 電話刻意不公開在網站上（避免被爬蟲收走）。
  //    需要時再由 Doris 決定是否加入 /contact。
  // phone: "0935-398-692",

  tagline: "把投放做成系統，而不是每個月重來一次。",

  lede:
    "十五年數位行銷，走過代理商、品牌方、媒體三種視角。" +
    "現在我多做一件事 —— 把行銷流程寫成真的會跑的自動化系統。",

  description:
    "陳筱萍 Doris Chen — 品牌成長顧問。十五年數位行銷資歷，" +
    "橫跨代理商、品牌方與媒體，擅長成效型廣告優化、電商營運與 AI 行銷工作流開發。",
} as const;

export const nav = [
  { href: "/", label: "首頁" },
  { href: "/about/", label: "關於我" },
  { href: "/services/", label: "合作方式" },
  { href: "/work/", label: "案例" },
  { href: "/resume/", label: "履歷" },
  { href: "/contact/", label: "聊聊" },
] as const;
