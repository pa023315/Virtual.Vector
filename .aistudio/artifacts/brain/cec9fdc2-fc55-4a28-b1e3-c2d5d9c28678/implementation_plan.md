# Hero 區世界觀微動態特效實作計劃

為呼應「燒瓶中的人造人」與「鍊金術三元素」之世界觀，本計劃將在 Hero 視覺區增添少量、克制且高質感的微動畫特效，打造如置身鍊金實驗室與虛擬次元交界處的沉浸體驗。

---

## 1. 核心特效架構與視覺設計

### A. 三元素緩慢升騰微粒（Alchemical Sublimation Particles）
- **視覺意象**：象徵燒瓶內部正在進行的鍊金提煉與物質昇華反應。
- **色彩配置**：
  - **鹽（Salt）**：淡青藍 `#BBEDFF`
  - **水銀（Mercury）**：朱紅粉 `#FB807B`
  - **硫磺（Sulfur）**：淡鵝黃 `#F2E3A5`
- **物理表現**：
  - 粒子直徑極細（1.5px ~ 3px），半透明度控制在 0.2 ~ 0.5 之間，不遮蔽主視覺。
  - 緩慢筆直偏輕微正弦波向上浮動（速度約 20~35 秒完整循環一次），並隨高度柔和淡出。
  - 數量克制（約 20~30 顆），隨機分佈於中央燒瓶幾何範圍附近。

### B. 鍊金陣幾何線條呼吸脈衝（Alchemical Geometry Pulse）
- **視覺意象**：象徵流動於術式與燒瓶幾何中的鍊金能量。
- **實作方式**：
  - 在現有 `HeroDecoration.tsx` 的同心圓弧與燒瓶線條上，加入漸層光流（SVG `stroke-dasharray` / `stroke-dashoffset` 呼吸律動）。
  - 三元素節點（Salt: 150,70 / Mercury: 270,70 / Sulfur: 350,170）設定緩慢的微光外擴光暈環（Halo Pulse），每 4~6 秒循環一次。

### C. 標誌後方柔和暗火暈光（Backlight Flame Aura）
- **視覺意象**：如同燒瓶底層靜謐燃燒的鍊金幽火，托出主 Logo。
- **實作方式**：
  - 在 `Virtual Vector` Logo 圖層背後，加入雙層複合徑向漸層光圈（深酒紅與淡青藍幽火交融）。
  - 以 CSS `animation` 進行極慢速的半徑擴張與透明度呼吸（opacity 0.15 ~ 0.35），維持深邃高級感。

### D. 滑鼠視差與懸停光感（Parallax & Ambient Hover Glow）
- **視差位移**：
  - 透過 `motion/react` 的 `useMotionValue` + `useSpring` 監聽游標在 Hero 區內的移動。
  - 背景幾何陣與浮游符號隨游標產生微幅反向浮動（最大位移 $\pm 12\text{px}$），營造立體燒瓶景深。
- **懸停光感**：
  - 游標周圍帶有一圈柔和的微光探照光暈（直徑約 300px，radial gradient，opacity 0.08），隨滑鼠滑移揭示背景隱約的幾何結構。

---

## 2. 效能優化與無障礙（Accessibility）

- **GPU 硬體加速**：所有動畫純粹使用 `transform`、`opacity` 與 SVG stroke 屬性，避免觸發 DOM 重排（Reflow）。
- **Reduced Motion 相容**：遵循 `prefers-reduced-motion` 規範，當使用者系統開啟減少動態時，自動平滑降級為當前的靜態微光模式。

---

## 3. 預計修改與建立檔案

1. `src/components/sections/HeroParticles.tsx`（新增）：輕量三元素升騰微粒組件。
2. `src/components/sections/HeroDecoration.tsx`（優化）：線條呼吸脈衝與節點光暈光環。
3. `src/components/sections/HeroSection.tsx`（整合）：加入滑鼠視差計算、Logo 後方暗火暈光與粒子層。

---

## 4. 驗證標準

- 動畫幀率穩定維持 60 FPS，無卡頓與跳格。
- 顏色嚴格吻合既定鍊金色彩碼（#BBEDFF / #FB807B / #F2E3A5）。
- 畫面風格維持低調高級感，不喧賓奪主，完全不影響 Logo 與文字的可讀性。
