# CHANGELOG — Đảo Đèn Lồng

Mọi thay đổi quan trọng và các thay đổi phá vỡ tương thích (Breaking Changes) qua cả **4 Phase** được ghi nhận tại đây.

---

## [Phase 4 — Release v1.0.0 / Contract v1.3] - 2026-11-20 (`TICKET-04: "Bình minh: phát hành v1.0.0"`)

### 🚀 Tính năng Phát hành & Phi chức năng (Non-Functional & Release Features)
1. **Chế độ Benchmark chuẩn hóa (`bench_cmd`: `node src/bench.js --seed 42 --duration 30 --out bench.json`):**
   - Dựng cảnh chuẩn Đêm 1 ở độ phân giải `1280×720` (`vsync_off: true`), tắt các thực thể sáng tạo thêm, bật sáng 3 đèn `L1–L3` (`fuel = 100`), sinh đúng `200` Bóng Mực ở trạng thái `wander` và `100` đom đóm (`seed 42`).
   - Camera bay vòng tròn bán kính `30 m`, độ cao `Y = 15 m`, nhìn vào `(0,0,0)`, xuất phát ở `(30,15,0)`, quay ngược chiều kim đồng hồ `15 s`/vòng; khởi động `3 s` rồi đo đúng `--duration` giây và xuất `bench.json` (`avg_fps: 164.9`, `p1_low_fps: 161.9`, `load_ms: 16 ms`).
2. **Soak Test 10 Đêm liên tiếp (`soak_cmd`: `node src/soak.js --seed 7 --nights 10 --out soak.json`):**
   - Chạy headless 10 Đêm liên tiếp xoay vòng (`Đêm 1 -> 2 -> 3`) trong cùng một tiến trình với seed `7 + i` và input ngẫu nhiên theo xác suất chuẩn (`5%` nhảy, `3%` lướt, `2%` tỏa sáng, `10%` tương tác).
   - Tối ưu hóa vòng lặp `step()` không cấp phát mảng tạm, đạt `crashes: 0` và bộ nhớ ổn định `34.9 MB -> 40.9 MB` (`1.17x <= 1.2x`), hoàn thành trong `0.54 giây`.
3. **Bảng Xếp Hạng Cục Bộ (`src/core/leaderboard.js`, `src/run.js`, `data/leaderboard.json`):**
   - Cho phép nhập tên (`3–12` ký tự `[A-Za-z0-9_]` + hỗ trợ tiếng Việt có dấu) sau màn hình Bình Minh (thắng Đêm 3) hoặc sau khi thua ở bất kỳ Đêm nào.
   - Lưu Top 10 trên đĩa cục bộ (`data/leaderboard.json` & `localStorage`), sắp xếp theo `score` giảm dần (bằng điểm xếp theo `achieved_at` sớm hơn).
   - Hỗ trợ lệnh xuất CLI: `node src/run.js --export-leaderboard out.json`.
4. **Dễ Tiếp Cận Toàn Diện (Accessibility — Phần 4):**
   - **Đổi phím điều khiển (`Key Remapping`)**: Cho phép đổi phím mọi hành động (4 hướng di chuyển, nhảy, lướt, tương tác, tỏa sáng, tạm dừng), tự động **phát hiện trùng phím** và cảnh báo người dùng, có nút **"Khôi phục mặc định"**, lưu trong `localStorage`.
   - **Phụ đề & Chỉ báo hình ảnh (`Visual Subtitles & Edge Arrows`)**: Hiển thị phụ đề trực quan khi Bóng Mực xuất hiện (kèm **mũi tên chỉ hướng ở mép màn hình**), gió mạnh sắp thổi (`2 s`), đếm ngược `10 s` cuối, và đèn có `fuel < 30`.
   - **Giảm chuyển động (`Reduced Motion`)**: Tắt rung camera và hiệu ứng chớp/nhấp nháy màn hình.
   - **Cỡ chữ UI (`>= 18 px` & Tùy chọn Chữ lớn `×1.25`)**: Cỡ chữ cơ sở `18 px` ở `1280×720` và tùy chọn phóng chữ lớn `22.5 px` (`×1.25`).
5. **Đóng gói & Retrospective:**
   - Hoàn thiện bản build web tĩnh `dist/` kèm launcher `node src/run.js`, báo cáo [RETROSPECTIVE.md](docs/notes/RETROSPECTIVE.md), `bench.json` và `soak.json`.

---

## [Phase 3 — Contract v1.2] - 2026-11-20 (`TICKET-03: "Đèn cạn dầu"`)

### ⚠️ Thay đổi phá vỡ tương thích (Breaking Changes so với Phase 2 / v1.1)
1. **[BREAKING] Luật Thắng & Thời lượng Đêm:**
   - Thắp sáng toàn bộ đèn **không còn kết thúc Đêm sớm** (`all_lit` bị loại bỏ).
   - Điều kiện thắng mới (`dawn_survived`): Mây còn sống khi hết giờ (`time_left_s == 0`) và số đèn đang sáng `>= ceil(0.6 * total_lanterns)` (Đêm 1: `>= 3/5`, Đêm 2: `>= 4/6`, Đêm 3: `>= 5/7`).
   - Thời lượng Đêm rút xuống: Đêm 1 `240s`, Đêm 2 `270s`, Đêm 3 `300s`.
2. **[BREAKING] Cơ chế Nhiên liệu Đèn Lồng (`fuel`) & Chi phí Thắp lại:**
   - Đèn khi vừa thắp sáng có `fuel = 100.0` và tự hao `1.0 fuel/s` (`1/60` mỗi tick ở Bước 2).
   - Khi `fuel <= 0` (ngay sau Bước 2): đèn tắt (`lit = false`, `deposited = 0`, `ever_lit = true`) và phát sự kiện `lantern_out {lantern_id}`.
   - Đèn đã từng sáng (`ever_lit = true`) khi thắp lại chỉ tốn **`5` đom đóm** (`relight_cost = 5`).
   - Đèn đang sáng nhưng chưa đầy dầu (`fuel < 100`) có thể tương tác để châm dầu (`refuel {lantern_id, amount, fuel}`).
3. **[BREAKING] Vùng an toàn Đèn Lồng & Trạng thái Bóng Mực `drain`:**
   - Đèn đang sáng nhưng có `fuel < 30` sẽ **mất vùng an toàn `6m`**.
   - Bóng Mực ở trạng thái `wander` ưu tiên tìm tới đèn đang sáng có `fuel < 30` gần nhất; khi cách đèn `<= 2.0m` sẽ chuyển sang trạng thái mới `"drain"`, đứng yên hút `5.0 fuel/s` và mỗi `60` ticks phát sự kiện `fuel_drain {lantern_id, shade_id, fuel}`.
   - Khi hết choáng (`stunned`), Bóng Mực luôn trở về trạng thái `"wander"`.
4. **[BREAKING] Công thức Điểm số mới:**
   - Mỗi đom đóm nạp/châm vào đèn: **`+5` điểm**.
   - Thắp đèn lần đầu: **`+100` điểm**; Thắp lại đèn (`relight: true`): **`+40` điểm**.
   - Tỏa Sáng trúng Bóng Mực: **`+5` điểm/con** (hoặc **`+15` điểm/con** nếu Bóng Mực đó đang ở trạng thái `drain`).
   - Thưởng Bình Minh khi thắng: **`+50 + floor(fuel)` cho mỗi đèn đang sáng** + **`+50` cho mỗi Ngọn Lửa còn lại**.
5. **Tính năng mới Phase 3:**
   - Sức chứa đom đóm tăng dần `capacity = min(20, 10 + 2 * successful_lights)`.
   - Chế độ Mù Màu ("Bảng màu dễ phân biệt"): đổi viền Bóng Mực sang `#00B3FF`, cảnh báo UI sang `#FFFFFF` kèm `⚠`, đèn tắt xẹp `20%` kèm vết rách giấy, đèn sắp hết dầu (`fuel < 30`) nhấp nháy `1 Hz`.

---

## [Phase 2 — Contract v1.1] - 2026-11-20 (`TICKET-02: "Ba hòn đảo"`)
- Chuẩn hóa toàn bộ thông số vật lý/gameplay theo `Test Contract v1.1` và thứ tự xử lý 12 bước mỗi tick.
- Mở rộng thành 3 Đêm (**Đảo Bến, Đảo Cau, Đảo Chuông**) cùng các cơ chế: Lướt (`dash`), Bục nhảy, Gió Lạc (`drifters`), Bùa Gió (`charms`), Gió Mạnh Đêm 3, Rơi khỏi đảo (`Y < -10`), Tạm dừng (`pause`) và Bảng màu chuẩn.

---

## [Phase 1 — Contract v1.0] - 2026-11-20 (`PRD-0`)
- Phiên bản đầu tiên của Đêm 1 – Đảo Bến với bộ mô phỏng 60Hz tất định (`Test Contract v1.0`), giao diện 3D Three.js, tạo hình Mây đội nón lá treo đèn lồng nhỏ, Chuông Gió dẫn đường và Cụ Rùa Giữ Bến.
