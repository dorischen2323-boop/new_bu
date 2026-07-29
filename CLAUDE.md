# CLAUDE.md — 00-NB 工作區規則

> 本檔為 `C:\Doris\00-NB` 專案層級規則，優先於全域設定。
> 這是 **Doris 個人工作區**，與 Waterball Software Academy（WSA）工作區完全分離，見下方第 4 節。

---

## 1. 語言：一律使用繁體中文

- 每次開啟這個工作區，**第一句話起就用繁體中文**與使用者交談，不需等使用者要求。
- 所有回覆、摘要、待辦清單、工作記錄、commit message 說明文字一律繁體中文（技術名詞、指令、程式碼、檔名保持原文）。
- 即使使用者用英文提問，仍以繁體中文回覆。

---

## 2. 工作記錄：每次做完事就寫當日記錄

### 資料夾與命名

- 資料夾：`C:\Doris\00-NB\00_工作記錄\`
- 檔名：`工作記錄_YYYYMMDD.md`（依日期編號，一天一檔）
- 例：`00_工作記錄\工作記錄_20260729.md`

### 何時寫

**每次做事結束前**都要寫，包含：
- 使用者說「收工」時（見第 3 節完整流程）
- 完成一項明確任務、準備收尾回覆時
- 使用者切換到明顯不同的主題之前

### 怎麼寫

- 當天檔案**已存在** → **append 到同一檔**（絕不覆寫既有內容），在最後加一段新的時間戳小節。
- 當天檔案**不存在** → 依下方模板新建。

```markdown
# 工作記錄 2026-07-29（週三）

## HH:MM — <這段工作的主題>

### 做了什麼
- <具體完成的事，一項一行>

### 產出／異動檔案
- `<路徑>` — <做了什麼改動>

### 決策與原因
- <有做取捨的地方，記下為什麼>

### 未完成／下一步
- [ ] <還沒做完的事>
```

### 規則

- 記錄「**做了什麼、改了哪些檔、為什麼這樣決定**」，不要只寫流水帳。
- 未完成事項一律用 `- [ ]` checkbox 格式，方便收工時彙整。
- 寫完後在回覆中告訴使用者「已寫入 `00_工作記錄\工作記錄_YYYYMMDD.md`」。

---

## 3. 「收工」指令

當使用者說「**收工**」（或「今天到這」「下班了」「結束今天」）時，執行 `.claude\skills\end-of-day\SKILL.md` 的完整流程：

> skill 名稱因格式限制須為小寫英文（`end-of-day`），但**說「收工」兩個字就會觸發**，也可打 `/end-of-day`。

1. 補完當日工作記錄（第 2 節）
2. 掃出**今天所有未辦完的事項**，彙整成待辦清單
3. 寫入 `00_工作記錄\待辦事項.md`（滾動更新的總清單）
4. 同時在當日工作記錄檔尾附上「明日待辦」小節
5. 詢問是否要 commit + push（依第 4 節的帳號規則）

---

## 4. 與 WSA 工作區完全分離

### 4.1 工作區地圖

```
C:\Doris\
├── 00-NB\                                    ← 【這個工作區】個人
│   ├── .git\                        → dorischen2323-boop/new_bu
│   ├── 00_工作記錄\
│   └── WSA\                         ← 課程教材，不進版控（.gitignore）
│       └── aixbdd\.git → Waterball-Software-Academy/aixbdd
│
└── 00-水球球\00_AI_Marketing\WBA-Worktrees\    ← 【WBA 工作區】平行、獨立
    ├── 01_AIxBDD\  → Waterball-Limited-Company/WBA-Growth-Hacker-Agent
    ├── 02_B2B\        分支慣例：bdd/doris/xxx-YYYYMMDD
    ├── 03_文案\
    └── 04_客服\
```

| | 這個工作區（00-NB） | WBA 工作區（00-水球球） |
|---|---|---|
| 路徑 | `C:\Doris\00-NB\` | `C:\Doris\00-水球球\00_AI_Marketing\WBA-Worktrees\` |
| 關係 | 平行的兄弟資料夾，**無巢狀關係** | 同左 |
| GitHub repo | `dorischen2323-boop/new_bu` | `Waterball-Limited-Company/WBA-Growth-Hacker-Agent` |
| Push 認證帳號 | **dorischen2323-boop**（repo-local `credential.username`） | **Doris2323**（Windows 通用憑證） |
| Commit 身分 | `Doris Chen <doris.chen2323@gmail.com>`（repo-local） | `Doris <doris@waterballsa.tw>`（**全域**） |
| 分支慣例 | 本 repo 自訂 | `bdd/doris/xxx-YYYYMMDD` |

### 4.2 鐵則

- **`WSA\` 已在 `.gitignore` 排除（第 4 行 `WSA/`），永遠不進版控。**
  - 不要移除這條忽略規則
  - 不要用 `git add -f` 強制加入 `WSA/` 底下任何檔案
  - `WSA\aixbdd` 有自己的 `.git`（Waterball-Software-Academy 組織），要對它做版控請直接 `cd` 進去操作
- **絕不動全域 git 設定** — 全域 `user.email = doris@waterballsa.tw` 是 WBA 在用的，本工作區一律用 repo-local 覆寫。
- **絕不**把這個工作區的變更 commit 進 WBA 或 WSA 的 repo，反之亦然。
- **絕不**把 WBA 的分支命名規範（`bdd/doris/...`）套用到這個 repo，反之亦然。
- user-level 的 `今日工作` skill 綁定 WBA 的 AI x BDD 課程路徑（`08_AI x BDD 課程`），**在這個工作區不適用**；若被觸發，先確認使用者是否真的要跑 WBA 流程。

> **已知副作用（可忽略）**：`WSA\chapter04`、`WSA\prompts`、`WSA\specs` 沒有自己的 `.git`，在那些資料夾執行 git 指令會往上解析到 00-NB 的 repo。因為 `WSA/` 被忽略，檔案不會被誤 commit，只是 `git status` 顯示的是 00-NB 的狀態。若覺得混淆，可對那三個資料夾各自 `git init`（純本機、不設 remote）。

### 4.3 Git 身分（已設為 repo-local，不影響全域）

```bash
# 已設定，供查核用
git -C C:\Doris\00-NB config user.name    # Doris Chen
git -C C:\Doris\00-NB config user.email   # doris.chen2323@gmail.com
```

全域設定仍是 `doris@waterballsa.tw`（WSA 用），**不要動全域設定**。

### 4.4 Push 到 GitHub

- Remote 一律用**個人帳號 `dorischen2323-boop`** 底下的 repo：
  `https://github.com/dorischen2323-boop/<repo>.git`
- 已設 repo-local：`credential.username = dorischen2323-boop`，讓 Windows Git Credential Manager 不要拿到別的帳號憑證。
- ⚠️ **`gh` CLI 目前登入的是 `Doris2323`，不是這個帳號**。所以：
  - **不要**用 `gh repo create` 建這個 repo（會建到 `Doris2323` 底下）
  - 要用 gh 操作本 repo 前，先 `gh auth login` 切成 `dorischen2323-boop`，或加 `--hostname`/切帳號
- **每次 push 前必查** `git remote -v`：必須是 `dorischen2323-boop`，不可是 `Waterball-Software-Academy` 或 `Doris2323`。

---

## 5. 通用工作守則

- 不讓本機檔案消失：禁止擅自 `git reset --hard`、`git stash -u`、`git checkout` 到沒有這些檔案的分支；任何可能讓檔案消失的操作都要先問過。
- 路徑一律用完整絕對路徑回報，不用相對路徑或縮寫。
- 有疑義先問再動手，尤其是刪除、覆寫、push 這類難以回復的操作。
