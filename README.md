# PACE 校園運動：GPS 運動練習版

這是一個純靜態網站，不需要後端，也不需要資料庫。你的運動紀錄只存在自己的瀏覽器中。

## 使用方式

1. 用 `https://` 網址開啟網站，例如你自己的 GitHub Pages 網址。
2. 按「開始運動」，填入代號、身高、體重與年齡，勾選同意，再按「開始 GPS 運動」。
3. 運動結束後，到「運動紀錄」按「摘要」下載 CSV；需要軌跡時按「軌跡」下載 JSON。

## 自己部署與修改

1. 在這個倉庫右上角按 **Use this template**，選 **Create a new repository**，倉庫設為 **Public**。
2. 進入你自己的倉庫，按 **Settings → Pages**，Source 選 **Deploy from a branch**，Branch 選 `main`、資料夾選 `/ (root)`，按 Save。
3. 修改檔案後 commit 並 push 到 `main`，1 到 3 分鐘後網站會自動更新。

## 注意事項

- 紀錄只存在本機瀏覽器。清除網站資料、換手機或使用無痕模式，紀錄可能消失。請在練習後下載 CSV 備份。
- GPS 需要 `https://` 網址，只有 `localhost` 例外。
- 熱量是依 MET 與時間估算的數字，不是 GPS 直接量測。
- 地圖底圖來自 OpenStreetMap，需要網路。
- 此版本沒有班級中心，不能與其他同學或老師共用資料。
