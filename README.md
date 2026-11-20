# 🏮 Đảo Đèn Lồng — Day 12 AI SDLC Lab (Phase 2 · Contract v1.1)

> **Video Demo (`.mp4`):** *(Sẽ đính kèm tại GitHub Release `v1.0.0` và `docs/demo/demo.mp4` ở Phase 4)*
> **Báo cáo Bằng chứng Kiểm chứng Phase 2 (Contract v1.1):** [docs/proof/phase-2/VERIFICATION_REPORT.md](docs/proof/phase-2/VERIFICATION_REPORT.md)
> **Báo cáo Bằng chứng Kiểm chứng Phase 1 (Contract v1.0):** [docs/proof/phase-1/VERIFICATION_REPORT.md](docs/proof/phase-1/VERIFICATION_REPORT.md)
> **Đặc tả & Tiêu chí nghiệm thu Phase 2 (`TICKET-02`):** [docs/notes/phase-2-spec.md](docs/notes/phase-2-spec.md)
> **Đặc tả & Giả định Phase 1 (`PRD-0`):** [docs/notes/phase-1-spec.md](docs/notes/phase-1-spec.md)
> **Nhật ký dùng AI, Phân tích lỗi & Token:** [docs/notes/ai-log.md](docs/notes/ai-log.md)

---

## 1. Giới thiệu

**Đảo Đèn Lồng** là game 3D góc nhìn thứ ba kết hợp bộ mô phỏng tất định 60Hz (deterministic headless simulation) tuân thủ **Test Contract v1.1 (`TICKET-02 — Ba hòn đảo`)**. Người chơi điều khiển **Mây** — người giữ đèn nhỏ tuổi đội nón lá có treo chiếc đèn lồng nhỏ — vượt qua **3 Đêm trên 3 Hòn Đảo** (**Đêm 1: Đảo Bến**, **Đêm 2: Đảo Cau**, **Đêm 3: Đảo Chuông**) để thu thập đom đóm, thắp sáng các **Đèn Lồng Lớn**, né **Bóng Mực** cùng **Gió Lạc** và đón **Bình Minh**.

---

## 2. Cài đặt và Chạy Game (Tối đa 3 lệnh)

Yêu cầu: **Node.js >= 18** (tương thích hoàn toàn trên **macOS, Linux và Windows**).

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
| `W A S D` hoặc `↑ ↓ ← →` | Di chuyển Mây (`6.0 m/s`, hoặc `7.2 m/s` khi có Bùa Gió; điều khiển đầy đủ trên không) |
| `Space` | Nhảy (`Jump`: `vy = 7.0 m/s`, trọng lực `-20 m/s²`) |
| `Shift` (hoặc `L`) | **Lướt (`Dash`)**: tốc độ `14 m/s` trong `0.2 s` (`12` ticks), giữ nguyên độ cao trên không, hồi chiêu `1.5 s` (`0 s` khi có Bùa Gió) |
| `E` | Nạp đom đóm vào Đèn Lồng Lớn gần nhất chưa sáng (`<= 2.0 m`, cần `10` đom đóm/đèn) |
| `F` (hoặc `K`) | **Tỏa Sáng (`Pulse`)**: tốn `3` đom đóm, bán kính 3D `5.0 m` từ `chân Mây + 0.8 m`, làm choáng Bóng Mực `120` ticks, đẩy lùi `4 m` trong `15` ticks đầu, đánh rơi lại đom đóm từ Gió Lạc đang bỏ chạy |
| `Esc` hoặc `P` | **Tạm dừng (`Pause`)**: dừng hoàn toàn logic game, mở menu Tiếp tục / Chơi lại Đêm / Cài đặt / Về Menu |
| `Q` hoặc `Kéo chuột` | Xoay góc nhìn Camera 3D quanh Mây (độ nhạy chuột lưu trong `localStorage`) |
| `G` | *(Sáng tạo)* Rung Chuông Gió triệu hồi dải hạt sáng dẫn đường tới Đèn Lồng chưa sáng gần nhất |

---

## 4. Số liệu Chuẩn Hóa & Cách tính điểm (`game.contract.json` v1.1)

Toàn bộ thông số được chuẩn hóa theo `TICKET-02` tại [game.contract.json](game.contract.json):

- **Ba Hòn Đảo (`--night 1 | 2 | 3`):**
  - **Đêm 1 — Đảo Bến (`300 s`, 5 đèn `L1..L5`):** Đảo tròn bán kính `40 m`, 24 điểm sinh đom đóm, Bóng Mực `4.0 m/s` (tối đa 6).
  - **Đêm 2 — Đảo Cau (`330 s`, 6 đèn `L1..L6`):** Hai đảo tròn bán kính `28 m` tại `(0,0,0)` và `(70,0,0)` nối bằng cầu tre `x ∈ [26,44], z ∈ [-2,2]`, 2 Bục nhảy tại `(20,0,18)` và `(50,0,-18)` (`vy = 14 m/s, vh = 24 m/s`), Bùa Gió `C1 (35,0,0)`, và Gió Lạc (`D1, D2`).
  - **Đêm 3 — Đảo Chuông (`360 s`, 7 đèn `L1..L7`):** Đảo tròn bán kính `45 m` với 3 tầng (`Y = 0, 3, 6`), vách đứng, 2 dốc nghiêng ở góc `30°` và `150°`, Bục nhảy `(0,3,13)` lên Tầng 2, Tháp Chuông bán kính `2 m` ở tâm, 2 Bùa Gió `C1, C2`, Gió Lạc, Bóng Mực `4.5 m/s` (tối đa 10) và Gió Mạnh mỗi `30 s` kéo dài `5 s` đẩy `2 m/s`.
- **Công thức tính điểm (`score`):**
  - Nạp đom đóm vào đèn (`deposit`): **`+10` điểm / đom đóm nạp** (`per_mote = 10`)
  - Thắp sáng Đèn Lồng Lớn (`lantern_lit`): **`+100` điểm / đèn** (`per_lantern = 100`)
  - Bóng Mực trúng Tỏa Sáng (`pulse`): **`+5` điểm / con / lần** (`per_stun = 5`, kể cả con đang choáng)
  - Thưởng khi Thắng Đêm (`all_lit`): **`floor(time_left_s) * 2 + flames_left * 50`** (`per_second_left = 2`, `per_flame_left = 50`)
  - Tổng điểm hành trình là tổng điểm của các Đêm đã thắng.

---

## 5. Chế độ Headless & Kiểm chứng (Test Contract v1.1)

Chạy mô phỏng 60 tick/giây không giao diện cho bất kỳ Đêm nào (`--night 1|2|3`):

```bash
node src/headless.js --seed 42 --night 3 --ticks 21600 --out out.jsonl --snapshot-every 600
```

- **Hiệu năng Headless:** Chạy trọn 1 Đêm dài nhất (`21,600` ticks = 360 giây) chỉ mất **~`57 ms`** (`0.057 giây`, nhanh hơn giới hạn `<= 30 giây` của contract hơn 500 lần).
- **Chạy toàn bộ 13 bộ Unit, Regression & Feature Tests:** `npm test`
- **Tái tạo toàn bộ Bằng chứng Phase 2 & Báo cáo SHA-256:** `npm run proof`
- **Chạy cổng kiểm tra Harness Hook:** `npm run verify`

---

## 6. Sáng tạo của tôi (Creative Extensions)

Các sáng tạo bổ sung được cô lập ở tầng hiển thị/âm thanh (`src/client/`) nên **không làm thay đổi bất kỳ dòng output JSONL nào của chế độ headless theo Test Contract v1.1**:

1. **Chuông Gió Cổ Đại & Dải Hạt Sáng Dẫn Đường (`Phím G`):** Triệu hồi dải hạt sáng vàng `#F2C14E` uốn cong chỉ hướng tới Đèn Lồng chưa sáng gần nhất trên cả địa hình phẳng lẫn địa hình 3 tầng của Đảo Chuông.
2. **NPC Phụ — Cụ Rùa Đá Giữ Bến:** Linh vật cổ tích đồng hành cùng lời khuyên của Ông Đăng qua cả 3 hòn đảo.
3. **Nhạc nền Đêm & 11 Hiệu ứng Âm thanh Ngũ Cung Web Audio API ([src/client/sound.js](src/client/sound.js)):** Tự tổng hợp nhạc nền đêm và đầy đủ hiệu ứng âm thanh (nhặt đom đóm, nhặt Bùa Gió, nạp đèn, thắp đèn, tỏa sáng, nhảy, lướt, bị đánh, Bóng Mực xuất hiện, gió mạnh cảnh báo, đếm ngược 10 giây cuối).
