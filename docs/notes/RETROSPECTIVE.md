# Báo Cáo Tổng Kết Dự Án & Retrospective (AI SDLC — Đảo Đèn Lồng v1.0.0)

> **Dự án:** Đảo Đèn Lồng (3D Third-Person Game + Deterministic 60Hz Headless Simulation)
> **Nhóm / Cá nhân:** `2A202603661-TranVietThinh`
> **Phiên bản phát hành:** `v1.0.0` (Tags: `phase-1`, `phase-2`, `phase-3`, `phase-4`)
> **Hợp đồng kiểm thử:** `Test Contract v1.0 -> v1.1 -> v1.2 -> v1.3`

---

## 1. Tổng hợp Đánh giá (Evaluation) qua 4 Phase

| Phase | Mục tiêu & Phạm vi | Kết quả Kiểm chứng | Điểm nhấn Kiến trúc & Sản phẩm |
|---|---|---|---|
| **Phase 1 (`v1.0`)** | `PRD-0`: Đêm 1 – Đảo Bến (5 đèn), tách logic 60Hz headless và đồ họa 3D Three.js, ghi nhận giả định cho các thông số mở. | **7/7** bộ test tự động + 4 kịch bản headless đạt 100%, SHA-256 tất định tuyệt đối. | Tách biệt hoàn toàn `src/core/` (0 phụ thuộc DOM/WebGL) và `src/client/`. Tạo hình Mây đội nón lá đai đỏ treo đèn lồng nhỏ + Chuông Gió dẫn đường & Cụ Rùa Giữ Bến. |
| **Phase 2 (`v1.1`)** | `TICKET-02 ("Ba hòn đảo")`: Chuẩn hóa toàn bộ số liệu vật lý, thực thi 12 bước mỗi tick, mở rộng 3 Đêm (Đảo Bến, Đảo Cau, Đảo Chuông), thêm Lướt, Bục nhảy, Gió Lạc, Bùa Gió, Gió Mạnh, Rơi khỏi đảo, Tạm dừng & Bảng màu chuẩn. | **13/13** bộ test + 6 kịch bản tính năng mới đạt 100%. Chạy `21.600` ticks Đêm 3 trong **`57 ms`** (`<< 30s`). | Mô hình hóa chính xác địa hình 3 tầng + vách đứng + 2 dốc nghiêng `30°/150°` của Đảo Chuông và quỹ đạo Bục nhảy. |
| **Phase 3 (`v1.2`)** | `TICKET-03 (Change Request "Đèn cạn dầu")`: Thay thế luật thắng sớm `all_lit` bằng sống sót tới Bình Minh (`dawn_survived`, `>= 60%` đèn sáng); đèn hao dầu `1/s`, châm dầu `refuel`, tắt đèn `lantern_out`, thắp lại tốn `5` đom đóm; Bóng Mực hút dầu `drain` (`5/s`); sức chứa tăng dần `10..20`; Chế độ mù màu. | **10/10** bộ test hồi quy & Change Request + 4 kịch bản v1.2 đạt 100%. Chạy `18.000` ticks trong **`69 ms`**. | Viết [ADR-001](ADR-001-phase3-fuel-and-dawn-survival.md) và [CHANGELOG.md](../../CHANGELOG.md) trước khi sửa code; dùng đơn vị nguyên `1/60` (`fuelUnits`) triệt tiêu 100% sai số dấu phẩy động. |
| **Phase 4 (`v1.3`)** | `TICKET-04 ("Bình minh: phát hành v1.0.0")`: Benchmark 200 Bóng Mực + 100 đom đóm (`bench.json`), Soak test 10 Đêm liên tiếp (`soak.json`), Bảng xếp hạng cục bộ (`--export-leaderboard`), Đổi phím + phát hiện trùng phím, Phụ đề hình ảnh, Giảm chuyển động, Chữ lớn `>= 18px / ×1.25`. | **13/13** bộ test v1.3 đạt 100%. Benchmark đạt **`164.9 avg_fps`** (`p1_low_fps: 161.9`, `load_ms: 16ms`). Soak test 10 Đêm `crashes: 0`, bộ nhớ ổn định `34.9 MB -> 40.9 MB` (`1.17x <= 1.2x`). | Hoàn thiện sản phẩm đóng gói (`dist/` + `node src/run.js`), sẵn sàng chạy trong 3 lệnh trên mọi máy sạch macOS/Linux/Windows. |

---

## 2. Điều gì Hiệu quả vs. Không hiệu quả khi làm việc với AI

### Điều hiệu quả (What Worked Well)
1. **Kiến trúc "Headless Core First" (`src/core/` tách biệt `src/client/`):**
   - Toàn bộ luật game 60Hz nằm trong `src/core/simulation.js` chỉ dùng cấu trúc dữ liệu thuần và bộ sinh số giả ngẫu nhiên `SeededRNG` (Mulberry32). Nhờ vậy, AI có thể tự chạy 18.000–21.600 ticks chỉ trong `~60 ms` qua Node.js CLI để kiểm chứng mọi thay đổi logic ngay lập tức mà không cần mở trình duyệt.
2. **Viết Spec / ADR trước khi sửa code ở Phase 2 và Phase 3:**
   - Khi `TICKET-03` thay thế hàng loạt luật cũ, việc yêu cầu AI lập bảng đối chiếu Breaking Changes và máy trạng thái Mermaid trong `ADR-001` trước khi chạm vào code giúp quá trình chuyển đổi từ `v1.1` sang `v1.2` không làm sót bất kỳ cạnh chuyển trạng thái nào (`wander -> drain -> chase/stunned -> wander`).
3. **Biểu diễn số học chính xác theo gợi ý của Contract (`fuelUnits = fuel * 60`):**
   - Thay vì dùng `float` cộng trừ `1/60` và `5/60`, việc dùng số nguyên `6000` units giúp các phép so sánh ngưỡng `fuel < 30` (`1800` units) và `ceil((100 - fuel) / 10)` chính xác tuyệt đối.

### Điều chưa hiệu quả (What Didn't Work Well)
1. **Tương tác với trang Lab Board bên ngoài từ trình duyệt sandbox:**
   - Ở đầu Phase 1, việc thử dùng Browser Subagent để đọc trực tiếp trang Claude Artifact gặp chặn đăng nhập và cross-origin iframe. Giải pháp chuyển sang copy-paste trực tiếp nội dung văn bản của từng Ticket vào hội thoại nhanh hơn gấp nhiều lần và tiết kiệm token.
2. **Các cấp phát bộ nhớ tạm thời (per-tick object allocations) trong vòng lặp 60Hz:**
   - Khi code nhanh ở Phase 2–3, AI dùng `.filter().sort()` và tạo mảng/object tạm trong mỗi tick. Ở 1 Đêm đơn lẻ thì không sao, nhưng khi chạy **Soak Test 10 Đêm liên tiếp (~150.000 ticks)** ở Phase 4, lượng object tạm này làm V8 mở rộng heap quá `1.2x` trước khi kịp gom rác.

---

## 3. Phân tích 6 Lỗi của AI đã Phát hiện & Cách Tinh chỉnh Harness

| # | Phase | Mô tả Lỗi của AI | Cách phát hiện | Cách khắc phục & Cập nhật Harness |
|---|---|---|---|---|
| **1** | Phase 1 | `validateInputs` từ chối `move: [x, z]` có `\|x\| > 1` với mã thoát `2`, trong khi Contract v1.0 quy định vector dài `> 1` phải được chuẩn hóa về độ dài `1`. | Review diff đối chiếu Mục C của Test Contract v1.0. | Sửa `validateInputs` chỉ trả mã `2` khi `move` không phải mảng 2 số hữu hạn; thêm guardrail vào `AGENTS.md`. |
| **2** | Phase 1 | Mây đứng sát mép trong của vùng an toàn (`safe_radius`) vẫn có thể bị Bóng Mực đứng ở mép ngoài đánh trúng do khoảng cách `<= shade_hit_radius`. | Viết unit test hình học `AC-1.5`. | Thêm `isPlayerInLitSafeZone()` chặn sát thương khi Mây đứng trong vùng an toàn của đèn sáng (`fuel >= 30`). |
| **3** | Phase 2 | Vòng lặp `runHeadless` dùng `if (sim.state !== 'playing') break;` khiến game thoát ngay khi nhận lệnh `pause: true`. | Kiểm thử kịch bản `AC-2.7 (Pause / Resume)`. | Đổi điều kiện dừng thành `if (sim.state === 'won' \|\| sim.state === 'lost') break;`. |
| **4** | Phase 2 | Bục nhảy ở Đêm 3 `(0, 3, 13)` kích hoạt lặp lại trong 2–3 tick đầu khi Mây đang bay lên, làm lệch điểm đáp lên Tầng 2. | Test tự động `AC-2.3` báo `grounded: false` ở tick 60. | Kiểm tra `!this.player.padLaunchActive` và tiếp xúc mặt bục `<= 0.25m` trước khi tích phân vận tốc. |
| **5** | Phase 3 | Trong test `AC-1.4`, đếm dư 1 tick sau khi hết 120 ticks choáng làm Bóng Mực chuyển từ `stunned -> wander -> chase` ngay ở tick thứ 121. | Test `AC-1.4` báo `'chase' !== 'wander'`. | Kiểm tra trạng thái ở đúng cuối tick thứ 120 của hiệu ứng choáng (`k = 119`). |
| **6** | Phase 4 |1) `src/bench.js` dùng `setTimeout(r, 1)` bị giới hạn bởi xung nhịp timer `15.6 ms` của Windows làm FPS chỉ đạt `~64 FPS`.<br>2) `step()` cấp phát mảng tạm `.filter().sort()` mỗi tick làm RSS trong Soak Test tăng từ `75 MB -> 93.3 MB` (`1.24x > 1.2x`). | 1) Đọc kết quả `bench.json` lần 1.<br>2) Test tự động `AC-4.2` báo đỏ `Memory grew too much`. | 1) Đổi sang `setImmediate` trong `src/bench.js` -> FPS tăng vọt lên **`164.9 FPS`**.<br>2) Loại bỏ hoàn toàn cấp phát mảng tạm trong `findNearestWeakLantern`, `findNearestUnlitLantern` và `step()`, tái sử dụng `reusableFrame` -> Soak Test xanh tuyệt đối (`34.9 MB -> 40.9 MB`, `1.17x <= 1.2x`). |

---

## 4. Thành phần Harness AI nào Giúp Nhiều Nhất?

1. **Stop-Hook & Verification Gate (`scripts/verify-hook.js` + `.claude/settings.json`):**
   - Bắt buộc chạy kiểm tra schema `game.contract.json`, chạy toàn bộ `npm test` và quét rò rỉ `.env` trước khi hoàn tất mỗi phase. Nhờ cổng chặn tự động này, lỗi bộ nhớ Soak Test ở Phase 4 và lỗi Bục nhảy ở Phase 2 đều bị chặn lại ngay lập tức và được sửa dứt điểm trước khi gắn tag.
2. **Skill `.agents/skills/verify-phase/SKILL.md` + `scripts/generate-proof.js`:**
   - Tự động hóa hoàn toàn việc chạy CLI headless cho mọi kịch bản, tính mã băm SHA-256 giữa 2 lần chạy để chứng minh tính tất định, và xuất thẳng báo cáo Markdown kèm log `.jsonl` thực tế vào `docs/proof/phase-N/`.
3. **`AGENTS.md` ngắn gọn, cập nhật theo từng phiên bản Contract (`v1.0 -> v1.3`):**
   - Lưu đúng thứ tự 12 bước trong 1 tick và quy ước đơn vị nguyên `1/60` cho nhiên liệu, giữ ngữ cảnh dưới 50 dòng để không làm loãng sự chú ý của model.

---

## 5. Tổng hợp Token / Chi phí AI Ước tính & Cách Tiết kiệm Token

| Phase | Số lượt tương tác chính | Token Input ước tính | Token Output ước tính | Chi phí quy đổi ước tính | Chiến lược tiết kiệm Token hiệu quả nhất |
|---|---:|---:|---:|---:|---|
| **Phase 1 (`v1.0`)** | 4 lượt | ~18,000 | ~7,500 | ~$0.12 | Viết spec & test headless trước; tách `src/core/` không cần mở browser để debug logic. |
| **Phase 2 (`v1.1`)** | 2 lượt | ~24,000 | ~11,000 | ~$0.17 | Tái sử dụng kiến trúc `GameSimulation`; dùng unit test chạy trong `0.17s` để kiểm tra vật lý 3 hòn đảo. |
| **Phase 3 (`v1.2`)** | 2 lượt | ~16,000 | ~8,500 | ~$0.11 | Viết `ADR-001` chốt máy trạng thái và dùng đơn vị nguyên `1/60` (`fuelUnits`) ngay từ đầu, không mất lượt sửa lỗi làm tròn float. |
| **Phase 4 (`v1.3`)** | 1 lượt | ~22,000 | ~10,500 | ~$0.15 | Tự động hóa đo `bench.json`, `soak.json` và `--export-leaderboard` qua script CLI và test tự động `AC-4.1..AC-4.3`. |
| **TỔNG CỘNG** | **9 lượt** | **~80,000 tokens** | **~37,500 tokens** | **~$0.55** | **Giữ `AGENTS.md` < 50 dòng, kiểm chứng bằng CLI Node.js trong < 2 giây thay vì vòng lặp thử-sai thủ công.** |

---

## 6. Bài học Rút ra & Nếu Làm Lại Thì Đổi Gì?

1. **Thiết kế Zero-Allocation trong vòng lặp Simulation 60Hz ngay từ Phase 1:**
   - Nếu làm lại từ đầu, chúng tôi sẽ áp dụng nguyên tắc không cấp phát mảng/object tạm thời (`.filter()`, `.map()`, `[...arr].sort()`) bên trong hàm `step()` ngay từ Phase 1. Điều này vừa giúp tốc độ mô phỏng nhanh hơn vừa giữ bộ nhớ RSS phẳng tuyệt đối trong các bài Soak Test dài hạn.
2. **Dùng số nguyên định điểm (Fixed-Point Integer Units) cho mọi bộ đếm thời gian và tài nguyên:**
   - Kinh nghiệm chuyển sang `fuelUnits` (`1/60`) ở Phase 3 và `invulnTicks / dashCdTicks / charmTicks` ở Phase 2 cho thấy trong các hệ thống mô phỏng tất định 60Hz, mọi đại lượng liên tục theo thời gian đều nên tính bằng số nguyên tick và chỉ chia cho `60` ở bước serialize JSON cuối cùng.
