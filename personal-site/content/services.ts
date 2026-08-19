/**
 * 合作方式
 * ⚠️ 語氣：說明「我怎麼幫人解問題」，不是「我在賣服務」。
 *    不得出現「接案／報價／承接專案」等字眼。
 */

export type Service = {
  no: string;
  title: string;
  lede: string;
  points: string[];
  tone: "rose" | "tide";
};

export const services: Service[] = [
  {
    no: "01",
    title: "品牌成長顧問",
    lede: "從定位到投放到會員，把成長這件事拆成可以被執行、被檢核的結構。",
    points: [
      "品牌定位與溝通主軸盤點",
      "數位媒體策略與投放架構設計",
      "成效型廣告優化（CPC／CPA／ROI）",
      "電商營運與會員經營節奏",
      "跨平台整合（官網／FB／IG／LINE）",
    ],
    tone: "rose",
  },
  {
    no: "02",
    title: "AI × 行銷工作流導入",
    lede: "把每個月都要重做一次的手工活，變成會自己跑的系統。",
    points: [
      "行銷數據收攏與單一口徑設計",
      "每日自動化資料管線建置",
      "行銷儀表板規劃與開發",
      "名單磁鐵與自動化旅程設計",
      "既有流程盤點，找出值得自動化的環節",
    ],
    tone: "tide",
  },
  {
    no: "03",
    title: "顧問諮詢與企業內訓",
    lede: "有時候問題不在缺人，而在團隊還沒有共同的判斷標準。",
    points: [
      "投放成效診斷與健檢",
      "數據分析與決策流程建立",
      "行銷團隊內部教育訓練",
      "數位轉型與 AI 工具導入陪跑",
    ],
    tone: "rose",
  },
];

/** 為什麼是我 —— 四象限 */
export type Angle = { label: string; title: string; body: string; tone: "rose" | "tide" };

export const angles: Angle[] = [
  {
    label: "代理商",
    title: "知道預算怎麼花才有效",
    body: "在關鍵數位與博報堂待過，操過從搜尋到成效型廣告的完整光譜，習慣被 KPI 追著跑。",
    tone: "rose",
  },
  {
    label: "品牌方",
    title: "知道老闆在意什麼",
    body: "在揚臻做過自有電商從零起盤，理解品牌方要的不是漂亮報表，是這個月的業績。",
    tone: "rose",
  },
  {
    label: "媒體",
    title: "知道流量怎麼被生產",
    body: "在 ETtoday 新聞雲管過數位企劃處，看過內容與流量的供給端長什麼樣子。",
    tone: "rose",
  },
  {
    label: "技術",
    title: "而且我自己做得出來",
    body: "不是「會用工具」，是真的寫得出資料管線與儀表板。需求不用轉譯給工程師，因為我就是那個人。",
    tone: "tide",
  },
];
