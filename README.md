# Ishgard Bulletin Board (secure version)

這個版本已把關鍵字驗證移到 Cloudflare Pages Functions，前端原始碼不再包含真正的密碼。

## 專案結構

```text
.
├── functions/
│   └── api/
│       └── check-keyword.js
├── index.html
└── README.md
```

## 部署到 GitHub + Cloudflare Pages

1. 把整個專案資料夾上傳到 GitHub repository。
2. 到 Cloudflare Pages 建立新專案，連接你的 GitHub repository。
3. Framework preset 選 `None`。
4. Build command 留空。
5. Build output directory 留空或填 `/`。
6. 在 Cloudflare Pages 專案設定新增環境變數：
   - `SECRET_KEYWORD` = 你的真正關鍵字
7. 重新部署。

## 本機測試

如果你要在本機用 Wrangler 測試，可以自行安裝 Wrangler 後執行：

```bash
npx wrangler pages dev .
```

並在本機環境中設定 `SECRET_KEYWORD`。

## 安全提醒

- 這版已避免前端直接暴露關鍵字。
- 但若你要做真正登入系統，仍建議加上：
  - rate limiting
  - session / cookie
  - 使用者帳號系統
  - 雜湊密碼儲存
```
