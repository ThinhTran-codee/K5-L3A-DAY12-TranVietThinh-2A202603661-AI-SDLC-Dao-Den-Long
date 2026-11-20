# Nhật Ký Dùng AI, Đánh Giá Phase & Quản Lý Token (AI Log & Evaluation)

## 1. Chiến lược điều phối AI & Tiết kiệm Token

1. **Thiết kế kế hoạch kiểm chứng trước khi code (Test-First SDLC & ADR):**
   - Trước khi sửa code cho Change Request ở Phase 3 (`TICKET-03`), lập ngay tài liệu quyết định kiến trúc [ADR-001](ADR-001-phase3-fuel-and-dawn-survival.md) và [CHANGELOG.md](../../CHANGELOG.md) để khóa chính xác những luật bị `[THAY THẾ]`.
   - Biểu diễn nhiên liệu bằng đơn vị nguyên `1/60` (`fuelUnits`, max `6000`) ngay từ thiết kế để loại bỏ hoàn toàn lỗi làm tròn số thực qua 18.000 ticks.
2. **Giữ ngữ cảnh (Context) gọn:**
   - Cập nhật `AGENTS.md` và `.agents/skills/verify-phase/SKILL.md` phản ánh đúng hợp đồng `v1.2`.

---

## 2. Nhật ký lỗi của AI & Cập nhật Harness (AI Error Analysis)

| Phase | Lỗi / Rủi ro của AI | Cách phát hiện | Cách sửa & Cập nhật Harness |
|---|---|---|---|
| **Phase 1** | **Lỗi 1 (Quá chặt khi validate `move: [x, z]`):** Bản nháp đầu tiên của `validateInputs` kiểm tra `f.move[0] < -1 \|\| f.move[0] > 1` và thoát mã `2`. | Đọc review diff đối chiếu Mục C của Test Contract v1.0. | Sửa `validateInputs` chỉ bắt lỗi mã `2` khi `move` không phải mảng 2 số hữu hạn, còn vector dài `> 1` được chuẩn hóa. |
| **Phase 1** | **Lỗi 2 (Va chạm rìa vùng an toàn `safe_radius`):** Mây đứng sát mép trong của `safe_radius` vẫn có thể cách Bóng Mực ở mép ngoài `<= shade_hit_radius`. | Phân tích hình học khi viết test `AC-1.5`. | Thêm `isPlayerInLitSafeZone()` bảo vệ Mây khi đứng trong vùng an toàn của đèn sáng. |
| **Phase 2** | **Lỗi 3 (Vòng lặp `runHeadless` dừng nhầm khi `state === "paused"`):** Điều kiện cũ `if (sim.state !== 'playing') break;` làm thoát vòng lặp khi vừa `paused`. | Phát hiện khi kiểm thử `AC-2.7`. | Đổi thành `if (sim.state === 'won' \|\| sim.state === 'lost') break;`. |
| **Phase 2** | **Lỗi 4 (Bục nhảy kích hoạt lặp lại trong các tick đầu khi đang bay lên):** Kiểm tra Bục nhảy ở cuối Bước 3 làm kích hoạt lại vận tốc phóng ở tick 2–3. | Test tự động `AC-2.3` báo đỏ tại tick 60. | Kiểm tra `!this.player.padLaunchActive` và tiếp xúc mặt bục `<= 0.25m` trước khi tích phân vận tốc. |
| **Phase 3** | **Lỗi 5 (Đếm dư 1 tick sau khi hết choáng 120 ticks trong test `AC-1.4`):** Khi Bóng Mực bị choáng ở step `k = 0` (`sim_tick = 1`), Bước 8 trong cùng tick đó giảm `stateTicksLeft` từ `120` xuống `119`. Do đó đúng hết step `k = 119` (`sim_tick = 120`), Bóng Mực hết choáng và chuyển về `'wander'`. Nếu chạy thêm step `k = 120` (`sim_tick = 121`) khi đang đứng cách Mây `7m <= 12m`, nó sẽ chuyển tiếp từ `'wander'` sang `'chase'`. | Test `AC-1.4` báo `'chase' !== 'wander'` ở `k = 120`. | Kiểm tra trạng thái ngay tại cuối tick thứ 120 của hiệu ứng choáng (`k = 119`), xác nhận Bóng Mực trở về `'wander'` đúng quy định Phần 2 của `TICKET-03`. |

---

## 3. Đánh giá từng Phase (Phase Evaluations)

- **Phase 1 (`v1.0`):** Đạt 100% yêu cầu `PRD-0` & `Test Contract v1.0`.
- **Phase 2 (`v1.1`):** Đạt 100% yêu cầu `TICKET-02` (3 Đêm, chuẩn hóa số liệu, 12 bước tick, Dash, Gió Lạc, Bùa Gió, Bục nhảy, Tạm dừng).
- **Phase 3 (`v1.2` — Change Request "Đèn cạn dầu"):**
  - [x] Viết đầy đủ [ADR-001](ADR-001-phase3-fuel-and-dawn-survival.md) và [CHANGELOG.md](../../CHANGELOG.md) liệt kê rõ các Breaking Changes.
  - [x] Cập nhật test cũ bị luật mới thay thế (`all_lit` -> `dawn_survived`, điểm nạp đom đóm `+10 -> +5`) kèm ghi chú lý do chi tiết trong `tests/contract.test.js`, không skip âm thầm.
  - [x] Triển khai chính xác hệ thống nhiên liệu số nguyên `1/60` (`fuelUnits`), hao dầu `1/s`, châm dầu `refuel`, tắt đèn `lantern_out`, thắp lại `relight` (tốn 5 đom đóm, `+40` điểm), Bóng Mực hút dầu `drain` (`5/s`, `fuel_drain` mỗi 60 ticks, `+15` điểm khi trúng Tỏa Sáng), sức chứa tăng dần `10 + 2 * successful_lights` (tối đa 20) và Chế độ mù màu ("Bảng màu dễ phân biệt").

---

## 4. Thống kê Token & Chi phí ước tính theo Phase

| Phase | Số lượt tương tác chính | Token Input ước tính | Token Output ước tính | Chi phí quy đổi ước tính | Cách tiết kiệm Token đã áp dụng |
|---|---:|---:|---:|---:|---|
| **Phase 1** | 4 lượt | ~18,000 tokens | ~7,500 tokens | ~$0.12 | Viết spec & test headless trước; tách `src/core/` thuần JS. |
| **Phase 2** | 2 lượt | ~24,000 tokens | ~11,000 tokens | ~$0.17 | Tái sử dụng kiến trúc `GameSimulation`; dùng 13 unit tests bắt lỗi tức thì. |
| **Phase 3** | 1 lượt | ~16,000 tokens | ~8,500 tokens | ~$0.11 | Viết ADR phân tích rõ chỗ thay thế trước khi sửa code; dùng đơn vị nguyên `1/60` tránh hoàn toàn bug sai số số thực. |
