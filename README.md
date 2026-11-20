# 🏮 Đảo Đèn Lồng — Day 12 AI SDLC Lab

> **Video Demo (`.mp4`):** *(Sẽ đính kèm tại GitHub Release `v1.0.0` và `docs/demo/demo.mp4` ở Phase 4)*
> **Báo cáo Bằng chứng Kiểm chứng Phase 1:** [docs/proof/phase-1/VERIFICATION_REPORT.md](docs/proof/phase-1/VERIFICATION_REPORT.md)
> **Đặc tả, Giả định & Tiêu chí nghiệm thu Phase 1:** [docs/notes/phase-1-spec.md](docs/notes/phase-1-spec.md)
> **Nhật ký dùng AI, Phân tích lỗi & Token:** [docs/notes/ai-log.md](docs/notes/ai-log.md)

---

## 1. Giới thiệu

**Đảo Đèn Lồng** là game 3D góc nhìn thứ ba kết hợp bộ mô phỏng tất định (deterministic headless simulation) tuân thủ **Test Contract v1.0**. Người chơi điều khiển **Mây** — người giữ đèn nhỏ tuổi đội chiếc nón lá có treo đèn lồng nhỏ — chạy khắp **Đảo Bến** thu thập đom đóm vàng cam để thắp sáng 5 **Đèn Lồng Lớn**, đồng thời tỏa sáng xua đuổi **Bóng Mực** trong màn sương đen trước khi bình minh lên.

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
| `W A S D` hoặc `↑ ↓ ← →` | Di chuyển Mây trên đảo |
| `Space` | Nhảy (`Jump`) |
| `E` | Nạp đom đóm vào Đèn Lồng Lớn khi đứng gần (`<= 3.0m`) |
| `F` (hoặc `K` / nút **Tỏa Sáng**) | **Tỏa sáng (Pulse)**: tiêu tốn `1` đom đóm, làm choáng (`3s`) và đẩy lùi (`4m`) mọi Bóng Mực trong bán kính `6.0m` |
| `Q` hoặc `Kéo chuột` | Xoay góc nhìn Camera 3D quanh Mây |
| `G` (hoặc nút **Chuông Gió**) | *(Sáng tạo)* Rung chuông gió triệu hồi dải hạt sáng dẫn đường tới Đèn Lồng chưa sáng gần nhất |
| `R` (hoặc nút **Chơi Lại**) | Chơi lại màn Đêm 1 |

---

## 4. Thông số Gameplay & Cách tính điểm (`game.contract.json`)

Toàn bộ thông số được khai báo tại [game.contract.json](game.contract.json) và đồng bộ 100% với bộ mô phỏng `src/core/`:

- **Di chuyển & Nhặt đom đóm:** Tốc độ Mây `player_speed = 8.0 m/s`; tự động nhặt đom đóm trong bán kính `pickup_radius = 2.0m`; mang tối đa `carry_capacity = 5` đom đóm.
- **Thắp Đèn Lồng Lớn:** Đêm 1 có `5` đèn (`L1`..`L5`). Đứng trong bán kính `interact_radius = 3.0m` và bấm `E` (`interact`) để nạp đom đóm. Đủ `lantern_cost = 3` đom đóm thì đèn sáng (`lit = true`) và tạo vùng an toàn `safe_radius = 5.0m` mà Bóng Mực không thể bước vào.
- **Bóng Mực & Máu (`flames`):** Mây có `3` ngọn lửa hộ mệnh (`flames = 3`). Bóng Mực đuổi theo Mây với tốc độ `shade_speed = 4.5 m/s`. Khi chạm Mây (`shade_hit_radius = 1.2m`), Mây mất `1` lửa và bất tử tạm thời trong `invuln_s = 1.5s`. Mây không bị rơi đom đóm khi bị chạm (`hit_drop_ratio = 0`) và không áp dụng phạt rơi khỏi đảo (`fall_enabled = false`).
- **Công thức tính điểm (`score`):**
  - Nhặt 1 đom đóm (`mote_picked`): **`+10` điểm** (`per_mote = 10`)
  - Thắp sáng 1 Đèn Lồng Lớn (`lantern_lit`): **`+100` điểm** (`per_lantern = 100`)
  - Làm choáng mỗi Bóng Mực bằng Tỏa sáng (`pulse`): **`+25` điểm/con** (`per_stun = 25`)
  - Thưởng khi Thắng (`all_lit`): **`round(time_left_s * 2) + flames_left * 50`** (`per_second_left = 2`, `per_flame_left = 50`)
  - *(Lưu ý: Các thực thể dựng sẵn từ `--scenario` ở tick 0 không phát sự kiện và không cộng điểm).*

---

## 5. Chế độ Headless & Kiểm chứng (Test Contract v1.0)

Chạy mô phỏng 60 tick/giây không giao diện theo đúng chuẩn **Test Contract v1.0**:

```bash
node src/headless.js --seed 42 --night 1 --ticks 600 --out out.jsonl --snapshot-every 10
```

Hoặc chạy kèm `--scenario` và `--inputs`:

```bash
node src/headless.js --seed 101 --night 1 \
  --scenario docs/proof/phase-1/scenarios/s1_win_all_lit.json \
  --inputs docs/proof/phase-1/inputs/s1_inputs.json \
  --ticks 120 --out docs/proof/phase-1/outputs/s1_win_all_lit.jsonl --snapshot-every 15
```

- **Chạy toàn bộ Unit Tests & Contract Tests:** `npm test`
- **Tái tạo toàn bộ Bằng chứng & Báo cáo SHA-256 Determinism:** `npm run proof`
- **Chạy cổng kiểm tra Harness Hook:** `npm run verify`

---

## 6. Sáng tạo của tôi (Creative Extensions)

Các sáng tạo bổ sung được thiết kế nằm hoàn toàn ở tầng hiển thị/âm thanh (`src/client/`) nên **không làm thay đổi bất kỳ dòng output JSONL nào của chế độ headless theo Test Contract v1.0**:

1. **Chuông Gió Cổ Đại & Dải Hạt Sáng Dẫn Đường (`Phím G`):**
   - Trong sương đêm dày, người chơi có thể bấm `G` để rung chiếc chuông nhỏ trên nón lá của Mây, tạo ra một dải hạt sáng vàng cam uốn cong chỉ hướng trực tiếp tới chiếc Đèn Lồng Lớn chưa sáng gần nhất.
2. **NPC Phụ — Cụ Rùa Đá Giữ Bến (Linh hồn cổ tích Đảo Bến):**
   - Tại bến trung tâm (`[3.8, 0, 3.8]`) có **Cụ Rùa Đá Cổ Thụ** mang viên ngọc lục bảo xoay tròn trên lưng. Khi Mây lại gần, Cụ Rùa sẽ trò chuyện và đưa ra lời khuyên ngữ cảnh thay đổi theo số lượng Đèn Lồng đã được thắp sáng (`0/5` -> `5/5`).
3. **Âm thanh Ngũ Cung Tổng Hợp (Procedural Pentatonic Web Audio):**
   - Hệ thống âm thanh cổ tích trong [src/client/sound.js](src/client/sound.js) tự tổng hợp tiếng chuông ngũ cung tăng dần cao độ theo số đom đóm nhặt được, hợp âm ấm áp khi Đèn Lồng Lớn bừng sáng và sóng âm khi Tỏa sáng mà không cần tệp âm thanh bên ngoài.
4. **Bằng chứng không ảnh hưởng phần lõi:** Toàn bộ 7 bộ test trong `npm test` và báo cáo [VERIFICATION_REPORT.md](docs/proof/phase-1/VERIFICATION_REPORT.md) đều chạy xanh 100%.

---

## 7. Cấu trúc thư mục & Tài liệu SDLC

- `game.contract.json` — Tệp khai báo hợp đồng kiểm thử tự động v1.0.
- `src/core/` — Logic mô phỏng game 60Hz tất định (`simulation.js`, `config.js`, `prng.js`).
- `src/headless.js` — CLI chạy chế độ headless theo Test Contract v1.0.
- `src/client/` — Giao diện 3D Three.js (`main.js`) và bộ tổng hợp âm thanh (`sound.js`).
- `tests/contract.test.js` — Bộ kiểm thử tự động kiểm tra toàn bộ tiêu chí nghiệm thu.
- `AGENTS.md`, `.agents/skills/verify-phase/SKILL.md`, `.claude/settings.json`, `scripts/verify-hook.js` — Hệ thống Harness AI.
- `docs/notes/` — Đặc tả giả định ([phase-1-spec.md](docs/notes/phase-1-spec.md)) & Nhật ký dùng AI ([ai-log.md](docs/notes/ai-log.md)).
- `docs/proof/phase-1/` — Kịch bản, input, output `.jsonl` thực tế và báo cáo truy vết bằng chứng ([VERIFICATION_REPORT.md](docs/proof/phase-1/VERIFICATION_REPORT.md)).
- [CREDITS.md](CREDITS.md) & [LICENSE](LICENSE) — Nguồn tài sản và giấy phép MIT.
