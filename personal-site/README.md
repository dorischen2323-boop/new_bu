# doris.works — Doris Chen 個人網站

品牌成長顧問 ／ AI × 行銷。Next.js 靜態匯出 + Cloudflare Workers。

---

## 快速開始

```bash
cd C:\Doris\00-NB\personal-site
npm install
npm run dev          # http://localhost:3000
```

## 建置與部署

```bash
npm run build        # 產生 out/（靜態檔）
npx wrangler deploy  # 部署到 Cloudflare Workers
# 或一次做完：
npm run deploy
```

> ⚠️ **本專案刻意放在純英文路徑。**
> 中文路徑下 `wrangler deploy` 會 exit 127，所以規劃文件放 `C:\Doris\00-NB\個人Website\`，
> 程式碼放這裡，不要把專案搬進含中文的資料夾。

---

## 改文字要動哪個檔

**全部內容都在 `content/`，不用碰版型。**

| 檔案 | 內容 |
|---|---|
| `content/site.ts` | 站名、職稱、Email、Hero 標語、導覽列 |
| `content/kpis.ts` | 首頁數據卡（粉 = 行銷、藍 = 技術） |
| `content/experience.ts` | 經歷時間軸（首頁摘要 + `/resume` 完整版） |
| `content/cases.ts` | 案例（列表卡 + 詳頁四段結構） |
| `content/services.ts` | 合作方式三項 + 「為什麼是我」四象限 |
| `content/profile.ts` | 品牌牆、技能分組、關於我的敘事段落 |

新增一個案例 = 在 `content/cases.ts` 的陣列加一筆，`/work/[slug]/` 會自動生成。

---

## 設計規範

正本在 `C:\Doris\00-NB\個人Website\01_視覺設計規範.md`，
token 實作在 `app/globals.css`。

**灰粉柔紗 × 深潮藍**

| 色 | 語意 | 用在哪 |
|---|---|---|
| `#8F4A53` 深玫瑰 | 行銷側 | CTA、成果數字、行銷標籤 |
| `#1B6C88` 深潮藍 | 技術側 | AI 工作流、儀表板、技術標籤 |
| `#F2C9CB` 蜜桃粉 | — | 只做漸層與底染，**永不承載文字** |
| `#B6BAC0` 淺炭灰 | — | 分隔線、標籤底 |
| `#96D0D2` 淺潮藍 | — | 技術類底染，**永不承載文字** |

程式裡用 Tailwind class：`text-accent`／`text-tide`／`wash-rose`／`wash-tide`／`veil`／`veil-tide`／`grain`。

---

## 語氣規範（重要）

Doris 目前仍在職，**全站不得出現「接案／接單／報價／承接專案」**。

| ❌ | ✅ |
|---|---|
| 接案 | 顧問合作 |
| 報價 | 合作方式 |
| Hire me | 聊聊 |

案例一律去識別化：**品牌名類別化（「某汽車品牌」），數字全留**。
品牌名只出現在「服務過的品牌」文字牆，不與個別案例連結。

---

## 目前狀態（P0）

已完成：首頁、關於我、合作方式、案例列表、案例詳頁 ×3、線上履歷、聊聊、404。

**待補（最高優先）**：`content/experience.ts` 與 `content/kpis.ts` 裡
水球軟體學院（2025/06 – 現在）的成績數字仍是 placeholder，
需要行銷面（名單數／營收成長／獲客成本）與 AI 工作流面（省下多少工時）的實際數字。

其餘待辦見 `C:\Doris\00-NB\個人Website\02_網站架構規劃.md`。

---

## 版控注意

依 `C:\Doris\00-NB\CLAUDE.md` 第 4 節：

- Remote 必須是個人帳號 **`dorischen2323-boop`**
- Commit 身分 `Doris Chen <doris.chen2323@gmail.com>`（repo-local）
- push 前必查 `git remote -v`
- **不可**用 `gh repo create`（目前 gh 登入的是 `Doris2323`）
