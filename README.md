# 🏮 Đảo Đèn Lồng — Day 12 AI SDLC Lab (Phase 3 · Contract v1.2)

> **Video Demo (`.mp4`):** *(Sẽ đính kèm tại GitHub Release `v1.0.0` và `docs/demo/demo.mp4` ở Phase 4)*
> **Báo cáo Bằng chứng Kiểm chứng Phase 3 (Contract v1.2):** [docs/proof/phase-3/VERIFICATION_REPORT.md](docs/proof/phase-3/VERIFICATION_REPORT.md)
> **Quyết định Thiết kế (ADR-001 — Đèn cạn dầu & Bình Minh):** [docs/notes/ADR-001-phase3-fuel-and-dawn-survival.md](docs/notes/ADR-001-phase3-fuel-and-dawn-survival.md)
> **Danh sách Breaking Changes (CHANGELOG):** [CHANGELOG.md](CHANGELOG.md)
> **Báo cáo Bằng chứng Phase 2 & Phase 1:** [Phase 2](docs/proof/phase-2/VERIFICATION_REPORT.md) · [Phase 1](docs/proof/phase-1/VERIFICATION_REPORT.md)
> **Nhật ký dùng AI, Phân tích lỗi & Token:** [docs/notes/ai-log.md](docs/notes/ai-log.md)

---

## 1. Giới thiệu

**Đảo Đèn Lồng** là game 3D góc nhìn thứ ba kết hợp bộ mô phỏng tất định 60Hz tuân thủ **Test Contract v1.2 (`TICKET-03 — Đèn cạn dầu`)**. Người chơi điều khiển **Mây** vượt qua **3 Đêm trên 3 Hòn Đảo** (**Đảo Bến, Đảo Cau, Đảo Chuông**) để thắp sáng, châm dầu và bảo vệ các **Đèn Lồng Lớn** trước sự xâm thực của sương đen, **Bóng Mực hút dầu (`drain`)** và **Gió Lạc**, giữ cho hòn đảo đủ ánh sáng (`>= 60%` số đèn) tới khoảnh khắc **Bình Minh (`dawn_survived`)**.

---

## 2. Cài đặt và Chạy Game (Tối đa 3 lệnh)

Yêu cầu: **Node.js >= 18** (chạy tốt trên **macOS, Linux và Windows**).

```bash
npm install
npm test
npm start
```

- Sau khi chạy `npm start`, mở trình duyệt tại **`http://localhost:5173`** để chơi bản 3D.
- Build bản web tĩnh phát hành (`dist/`): `npm run build`

---

## 3. Điều khiển (Controls)

| Phím / Thao tác | Hành động trong game |
|---|---|
| `W A S D` hoặc `↑ ↓ ← →` | Di chuyển Mây (`6.0 m/s`, hoặc `7.2 m/s` khi có Bùa Gió) |
| `Space` | Nhảy (`Jump`: `vy = 7.0 m/s`, trọng lực `-20 m/s²`) |
| `Shift` (hoặc `L`) | **Lướt (`Dash`)**: `14 m/s` trong `0.2 s` (`12` ticks), giữ độ cao trên không, hồi chiêu `1.5 s` |
| `E` | **Thắp đèn / Thắp lại / Châm dầu (`Interact`)**: trong bán kính `2.0 m` quanh đèn chưa sáng hoặc đèn đang sáng chưa đầy dầu (`fuel < 100`) |
| `F` (hoặc `K`) | **Tỏa Sáng (`Pulse`)**: tốn `3` đom đóm, bán kính 3D `5.0 m`, làm choáng Bóng Mực `120` ticks (`+15` điểm nếu đang hút dầu, `+5` điểm nếu bình thường) |
| `Esc` hoặc `P` | **Tạm dừng (`Pause`)**: mở menu Tiếp tục / Chơi lại / Cài đặt (gồm **Bảng màu dễ phân biệt**) / Về Menu |
| `Q` hoặc `Kéo chuột` | Xoay góc nhìn Camera 3D quanh Mây |
| `G` | *(Sáng tạo)* Rung Chuông Gió triệu hồi dải hạt sáng dẫn đường tới Đèn Lồng cần chú ý gần nhất |

---

## 4. Luật Gameplay Mới ở Phase 3 & Cách tính điểm (`game.contract.json` v1.2)

Toàn bộ thông số được khai báo tại [game.contract.json](game.contract.json):

- **Nhiên liệu Đèn Lồng (`fuel`) & Thắp lại (`relight`):**
  - Khi vừa thắp (lần đầu cần `10` đom đóm, thắp lại khi `ever_lit = true` chỉ cần `5` đom đóm), đèn có `fuel = 100` và tự hao `1.0 fuel/s` (`1/60` mỗi tick ở Bước 2).
  - Bấm `E` ở đèn đang sáng (`fuel < 100`) để châm dầu (`refuel`, mỗi đom đóm `+10 fuel`).
  - Khi `fuel < 30`: đèn và thanh dầu nhấp nháy chậm (`1 Hz`), **mất vùng an toàn `6.0 m`** và thu hút Bóng Mực ở trạng thái `wander` tới hút dầu (`state = "drain"`, hút `5.0 fuel/s`, phát `fuel_drain` mỗi 60 ticks). Châm dầu lên lại `>= 30` sẽ đẩy Bóng Mực trong vùng `6.0 m` ra ngoài trong tối đa 30 ticks.
  - Khi `fuel <= 0`: đèn tắt (`lantern_out`, `deposited = 0`, `ever_lit = true`), hình dáng đèn xẹp xuống `20%` kèm vết rách giấy dễ phân biệt kể cả khi không nhìn màu.
- **Sức chứa tăng dần (`capacity`):** `capacity = min(20, 10 + 2 * successful_lights)`.
- **Điều kiện Thắng Mới (`dawn_survived`):**
  - Thời lượng Đêm 1 / 2 / 3: **`240s` / `270s` / `300s`**.
  - Sống sót tới khi hết giờ (`time_left_s == 0`) và số đèn đang sáng `>= ceil(0.6 * total_lanterns)` (**Đêm 1: `3/5`**, **Đêm 2: `4/6`**, **Đêm 3: `5/7`**).
- **Công thức tính điểm mới (`score`):**
  - Mỗi đom đóm nạp/châm vào đèn (`deposit` / `refuel`): **`+5` điểm**
  - Thắp đèn lần đầu: **`+100` điểm** · Thắp lại đèn (`relight`): **`+40` điểm**
  - Bóng Mực trúng Tỏa Sáng (`pulse`): **`+15` điểm** nếu đang `drain`, **`+5` điểm** ở trạng thái khác
  - Thưởng Bình Minh (chỉ khi thắng `dawn_survived`): **`+50 + floor(fuel)` cho mỗi đèn đang sáng** + **`+50` cho mỗi Ngọn Lửa còn lại**.

---

## 5. Chế độ Headless & Kiểm chứng (Test Contract v1.2)

```bash
node src/headless.js --seed 42 --night 3 --ticks 18000 --out out.jsonl --snapshot-every 600
```

- **Chạy toàn bộ Unit, Regression & Change-Request Tests:** `npm test`
- **Tái tạo toàn bộ Bằng chứng Phase 3:** `npm run proof`
- **Chạy cổng kiểm tra Harness Hook:** `npm run verify`
