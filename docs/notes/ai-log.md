# Nhật Ký Dùng AI, Đánh Giá Phase & Quản Lý Token (AI Log & Evaluation)

> **Báo cáo Retrospective đầy đủ 4 Phase:** Xem tại [docs/notes/RETROSPECTIVE.md](RETROSPECTIVE.md).

## 1. Tóm tắt Chiến lược Điều phối AI qua 4 Phase

1. **Test-First & Contract-Driven SDLC:** Mọi phase đều bắt đầu bằng việc cập nhật đặc tả/ADR (`phase-1-spec.md`, `phase-2-spec.md`, `ADR-001`, `RETROSPECTIVE.md`), cập nhật `game.contract.json` (`v1.0 -> v1.1 -> v1.2 -> v1.3`) và viết bộ kiểm thử tự động trong `tests/contract.test.js`.
2. **Tách biệt `src/core/` và `src/client/`:** Giúp chạy 18.000–21.600 ticks chỉ trong `~60 ms`, chạy Soak Test 10 Đêm liên tiếp (~150.000 ticks) trong `0.54 giây` và kiểm chứng 13 bộ test trong `2.1 giây`.

---

## 2. Tổng hợp 6 Lỗi của AI đã Phát hiện & Sửa trong Harness

1. **Phase 1 — Validate `move: [x, z]`:** Bỏ kiểm tra `|x| > 1` thoát mã `2` để chuẩn hóa mọi vector hữu hạn có độ dài `> 1` theo đúng Mục C Contract v1.0.
2. **Phase 1 — Va chạm mép `safe_radius`:** Bổ sung `isPlayerInLitSafeZone()` bảo vệ Mây khi đứng trong vùng sáng `6m` của đèn có `fuel >= 30`.
3. **Phase 2 — Vòng lặp `runHeadless` khi `paused`:** Sửa điều kiện thoát vòng lặp thành `sim.state === 'won' || sim.state === 'lost'` để không thoát sớm khi game đang tạm dừng.
4. **Phase 2 — Bục nhảy kích hoạt lặp ở tick bay lên:** Thêm kiểm tra `!this.player.padLaunchActive` và ngưỡng độ cao `<= 0.25m` trước khi tích phân vận tốc.
5. **Phase 3 — Đếm tick kết thúc choáng 120 ticks:** Kiểm tra đúng tại cuối tick thứ 120 (`k = 119`) xác nhận Bóng Mực trở về trạng thái `wander`.
6. **Phase 4 — Xung nhịp timer `setTimeout(1)` trong `bench.js` & Cấp phát mảng tạm trong `soak.js`:**
   - Đổi `setTimeout(r, 1)` sang `setImmediate` trong `src/bench.js` để tránh giới hạn `15.6ms` (64Hz) của OS timer -> `avg_fps` đạt **`164.9 FPS`** (`p1_low_fps: 161.9 FPS`).
   - Loại bỏ cấp phát mảng tạm `.filter().sort()` trong `GameSimulation.prototype.step()` và tái sử dụng `reusableFrame` trong `src/soak.js` -> giữ bộ nhớ RSS ổn định `34.9 MB -> 40.9 MB` (`1.17x <= 1.2x`).

---

## 3. Bảng Thống Kê Token & Chi Phí AI Ước Tính Toàn Dự Án

| Phase | Số lượt tương tác chính | Token Input ước tính | Token Output ước tính | Chi phí quy đổi ước tính | Cách tiết kiệm Token đã áp dụng |
|---|---:|---:|---:|---:|---|
| **Phase 1 (`v1.0`)** | 4 lượt | ~18,000 | ~7,500 | ~$0.12 | Viết spec & test headless trước; tách `src/core/` thuần JS. |
| **Phase 2 (`v1.1`)** | 2 lượt | ~24,000 | ~11,000 | ~$0.17 | Tái sử dụng `GameSimulation`; dùng 13 unit tests bắt lỗi vật lý tức thì. |
| **Phase 3 (`v1.2`)** | 2 lượt | ~16,000 | ~8,500 | ~$0.11 | Viết `ADR-001` và dùng đơn vị nguyên `1/60` (`fuelUnits`) tránh hoàn toàn lỗi làm tròn số thực. |
| **Phase 4 (`v1.3`)** | 1 lượt | ~22,000 | ~10,500 | ~$0.15 | Tự động hóa đo `bench.json`, `soak.json`, `--export-leaderboard` qua CLI. |
| **TỔNG CỘNG** | **9 lượt** | **~80,000 tokens** | **~37,500 tokens** | **~$0.55** | **Giữ `AGENTS.md` gọn (< 50 dòng), kiểm chứng tự động bằng CLI trong < 2 giây.** |
