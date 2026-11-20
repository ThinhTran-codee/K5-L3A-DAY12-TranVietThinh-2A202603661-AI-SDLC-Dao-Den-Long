# CHANGELOG — Đảo Đèn Lồng

Mọi thay đổi quan trọng và các thay đổi phá vỡ tương thích (Breaking Changes) qua các Phase được ghi nhận tại đây.

---

## [Phase 3 — Contract v1.2] - 2026-11-20 (`TICKET-03: "Đèn cạn dầu"`)

### ⚠️ Thay đổi phá vỡ tương thích (Breaking Changes so với Phase 2 / v1.1)
1. **[BREAKING] Luật Thắng & Thời lượng Đêm:**
   - Thắp sáng toàn bộ đèn **không còn kết thúc Đêm sớm** và giá trị `game_over.reason = "all_lit"` bị loại bỏ.
   - Điều kiện thắng mới (`game_over.reason = "dawn_survived"`): Mây còn sống (`flames > 0`) khi hết giờ (`time_left_s == 0`) và số đèn đang sáng `>= ceil(0.6 * total_lanterns)` (Đêm 1: `>= 3/5`, Đêm 2: `>= 4/6`, Đêm 3: `>= 5/7`).
   - Thời lượng Đêm rút xuống: Đêm 1 `240s` (từ `300s`), Đêm 2 `270s` (từ `330s`), Đêm 3 `300s` (từ `360s`).
2. **[BREAKING] Cơ chế Nhiên liệu Đèn Lồng (`fuel`) & Chi phí Thắp lại:**
   - Đèn khi vừa thắp sáng có `fuel = 100.0` và tự hao `1.0 fuel/s` (`1/60` mỗi tick ở Bước 2).
   - Khi `fuel <= 0` (ngay sau Bước 2): đèn tắt (`lit = false`, `deposited = 0`, `ever_lit = true`) và phát sự kiện `lantern_out {lantern_id}`.
   - Đèn đã từng sáng (`ever_lit = true`) khi thắp lại chỉ tốn **`5` đom đóm** (`relight_cost = 5`) thay vì `10`.
   - Đèn đang sáng nhưng chưa đầy dầu (`fuel < 100`) có thể tương tác để châm dầu (`refuel {lantern_id, amount, fuel}`).
3. **[BREAKING] Vùng an toàn Đèn Lồng & Trạng thái Bóng Mực `drain`:**
   - Đèn đang sáng nhưng có `fuel < 30` sẽ **mất vùng an toàn `6m`**.
   - Bóng Mực ở trạng thái `wander` ưu tiên tìm tới đèn đang sáng có `fuel < 30` gần nhất; khi cách đèn `<= 2.0m` sẽ chuyển sang trạng thái mới `"drain"`, đứng yên hút `5.0 fuel/s` và mỗi `60` ticks phát sự kiện `fuel_drain {lantern_id, shade_id, fuel}`.
   - Khi hết choáng (`stunned`), Bóng Mực luôn trở về trạng thái `"wander"`.
4. **[BREAKING] Công thức Điểm số mới:**
   - Mỗi đom đóm nạp/châm vào đèn: **`+5` điểm** (giảm từ `+10`).
   - Thắp đèn lần đầu: **`+100` điểm**; Thắp lại đèn (`relight: true`): **`+40` điểm**.
   - Tỏa Sáng trúng Bóng Mực: **`+5` điểm/con** (hoặc **`+15` điểm/con** nếu Bóng Mực đó đang ở trạng thái `drain`).
   - Bỏ thưởng thời gian còn lại (`per_second_left = 0`); thay bằng thưởng Bình Minh khi thắng: **`+50 + floor(fuel)` cho mỗi đèn đang sáng** + **`+50` cho mỗi Ngọn Lửa còn lại**.
5. **[BREAKING] Schema `game.contract.json` & Snapshot/Event `v1.2`:**
   - `contract_version` nâng lên `"1.2"`, bổ sung `fuel_max`, `fuel_decay_per_s`, `fuel_per_mote`, `relight_cost`, `win_ratio`, `drain_per_s`, `low_fuel_threshold`, `capacity_max`.
   - `snapshot.lanterns[]` thêm `fuel`, `ever_lit`, `relit_count`; `snapshot.player` thêm `capacity`.
   - Sự kiện `lantern_lit` thêm trường boolean `relight`.

### ✨ Tính năng mới (New Features)
- **Sức chứa đom đóm tăng dần (`capacity`):** `capacity = min(20, 10 + 2 * successful_lights)`.
- **Chế độ Mù Màu ("Bảng màu dễ phân biệt"):** Lưu trong `localStorage`, đổi viền/mắt Bóng Mực sang `#00B3FF`, cảnh báo UI sang `#FFFFFF` kèm biểu tượng `⚠`, đèn tắt xẹp `20%` kèm vết rách giấy, đèn sắp hết dầu (`fuel < 30`) và thanh dầu nhấp nháy `1 Hz`.

---

## [Phase 2 — Contract v1.1] - 2026-11-20 (`TICKET-02: "Ba hòn đảo"`)
- Chuẩn hóa toàn bộ thông số vật lý/gameplay theo `Test Contract v1.1` và thứ tự xử lý 12 bước mỗi tick.
- Mở rộng thành 3 Đêm (**Đảo Bến, Đảo Cau, Đảo Chuông**) cùng các cơ chế: Lướt (`dash`), Bục nhảy, Gió Lạc (`drifters`), Bùa Gió (`charms`), Gió Mạnh Đêm 3, Rơi khỏi đảo (`Y < -10`) và Tạm dừng (`pause`).

---

## [Phase 1 — Contract v1.0] - 2026-11-20 (`PRD-0`)
- Phiên bản đầu tiên của Đêm 1 – Đảo Bến với bộ mô phỏng 60Hz tất định (`Test Contract v1.0`) và giao diện 3D Three.js.
