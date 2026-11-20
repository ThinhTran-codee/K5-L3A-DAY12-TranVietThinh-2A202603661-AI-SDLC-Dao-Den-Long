# Nhật Ký Dùng AI, Đánh Giá Phase & Quản Lý Token (AI Log & Evaluation)

## 1. Chiến lược điều phối AI & Tiết kiệm Token

1. **Thiết kế kế hoạch kiểm chứng trước khi code (Test-First SDLC):**
   - Trước khi viết giao diện 3D, bóc tách toàn bộ yêu cầu của `PRD-0` (Phase 1) và `TICKET-02` (Phase 2) thành bảng giả định và tiêu chí nghiệm thu (`docs/notes/phase-1-spec.md`, `docs/notes/phase-2-spec.md`).
   - Tách kiến trúc thành 2 tầng độc lập: `src/core/` (mô phỏng 60Hz thuần JavaScript, không phụ thuộc DOM/WebGL) và `src/client/` (Three.js 3D renderer + Web Audio). Nhờ vậy mọi bài kiểm thử chạy trực tiếp qua Node.js mất chưa tới `0.2 giây`, tiết kiệm hàng chục nghìn token so với việc debug qua giao diện đồ họa.
2. **Giữ ngữ cảnh (Context) gọn:**
   - `AGENTS.md` chỉ giữ dưới 50 dòng với các lệnh cốt lõi và quy tắc 12 bước trong 1 tick.
   - Đóng gói quy trình chạy test & sinh bằng chứng vào skill `.agents/skills/verify-phase/SKILL.md` và script `scripts/generate-proof.js`.

---

## 2. Nhật ký lỗi của AI & Cập nhật Harness (AI Error Analysis)

| Phase | Lỗi / Rủi ro của AI | Cách phát hiện | Cách sửa & Cập nhật Harness |
|---|---|---|---|
| **Phase 1** | **Lỗi 1 (Quá chặt khi validate `move: [x, z]`):** Bản nháp đầu tiên của `validateInputs` trong `src/headless.js` kiểm tra `f.move[0] < -1 \|\| f.move[0] > 1` và thoát với mã lỗi `2`. Tuy nhiên Test Contract v1.0 mục C quy định: *"Vector dài hơn 1 phải được chuẩn hóa về độ dài 1"*. | Đọc review diff đối chiếu từng câu trong Mục C của Test Contract v1.0 trước khi commit. | Sửa `validateInputs` chỉ bắt lỗi mã `2` khi `move` không phải mảng 2 số hữu hạn, còn vector có độ dài `> 1` được chuẩn hóa bằng `Math.hypot(mx, mz)` trong `simulation.js`. Bổ sung quy tắc này vào `AGENTS.md`. |
| **Phase 1** | **Lỗi 2 (Va chạm rìa vùng an toàn `safe_radius`):** Nếu Mây đứng sát mép trong của `safe_radius` và Bóng Mực bị chặn ở rìa ngoài, khoảng cách giữa hai bên có thể `<= shade_hit_radius`. | Phân tích hình học khi viết test `AC-1.5` (`tests/contract.test.js`). | Thêm kiểm tra `isPlayerInLitSafeZone()` trong `src/core/simulation.js`: khi Mây đứng trong `safe_radius` của đèn đã sáng, Bóng Mực không thể gây sát thương. |
| **Phase 2** | **Lỗi 3 (Vòng lặp `runHeadless` dừng nhầm khi `state === "paused"`):** Ở Phase 1, vòng lặp tick trong `src/headless.js` viết `if (sim.state !== 'playing') break;`. Khi sang Phase 2 có trạng thái `"paused"`, nếu giữ điều kiện cũ thì ngay khi nhận input `pause: true`, headless runner sẽ thoát sớm thay vì tiếp tục đọc các tick tiếp theo để đợi `pause: true` (resume). | Phát hiện khi rà soát Bước 1 của thứ tự 12 bước trong `TICKET-02` và kiểm thử kịch bản `AC-2.7`. | Đổi điều kiện thoát vòng lặp thành `if (sim.state === 'won' \|\| sim.state === 'lost') break;` để khi `paused` thì `tick` vẫn tăng trong khi `sim_tick` đứng yên đúng yêu cầu. |
| **Phase 2** | **Lỗi 4 (Bục nhảy kích hoạt lặp lại trong các tick đầu khi đang bay lên):** Khi đặt kiểm tra Bục nhảy ở cuối Bước 3 với ngưỡng độ cao `<= 0.65m`, trong 2–3 tick đầu sau khi phóng từ `(0, 3, 13)`, Mây vẫn còn nằm trong bán kính `1.0m` của bục nên bị kích hoạt lại vận tốc phóng, làm lệch điểm đáp trên Tầng 2 Đảo Chuông. | Test tự động `AC-2.3` báo đỏ (`grounded: false !== true` tại tick 60). | Thêm điều kiện `!this.player.padLaunchActive` và thu ngưỡng tiếp xúc mặt bục về `<= 0.25m`, đồng thời kiểm tra trước khi tích phân vận tốc. Test `AC-2.3` lập tức xanh 100%. |

---

## 3. Đánh giá từng Phase (Phase Evaluations)

### Phase 1 Evaluation
- **Đạt 100%:** `game.contract.json` v1.0, Headless CLI 60Hz, tính tất định SHA-256, bản 3D Đêm 1 – Đảo Bến, Mây đội nón lá treo đèn lồng nhỏ, HUD, âm thanh ngũ cung và mục "Sáng tạo của tôi".

### Phase 2 Evaluation (`TICKET-02` — Contract v1.1)
- **Các yêu cầu đã đạt (100%):**
  - [x] Chuẩn hóa toàn bộ số liệu trong `game.contract.json` (`contract_version: "1.1"`) và cập nhật toàn bộ test hồi quy Phase 1 kèm ghi chú rõ lý do trong `tests/contract.test.js`.
  - [x] Thực thi đúng thứ tự xử lý 12 bước bắt buộc trong 1 tick (`src/core/simulation.js`).
  - [x] Mở rộng 3 Đêm (**Đêm 1: Đảo Bến**, **Đêm 2: Đảo Cau**, **Đêm 3: Đảo Chuông**) với đầy đủ địa hình 3 tầng, vách đứng, 2 dốc nghiêng `30°/150°`, cầu tre, bục nhảy, tháp chuông và gió mạnh.
  - [x] Toàn bộ cơ chế mới: **Lướt (Dash)**, **Gió Lạc (Drifters)** cướp và đánh rơi đom đóm, **Bùa Gió (Wind Charm)**, **Rơi khỏi đảo (`Y < -10`)**, **Bóng Mực 5 trạng thái (`spawning, wander, chase, recoil, stunned`)**, **Tạm dừng (`paused`/`resumed`)**.
  - [x] Giao diện 3D áp dụng đúng **Bảng màu chuẩn** và công thức ánh sáng môi trường `0.15 + 0.55 * (lit / total)`, HUD đầy đủ 10 ô đom đóm, đồng hồ `mm:ss` nhấp nháy đỏ khi `<= 30s`, biểu tượng hồi chiêu, mũi tên chỉ đèn ngoài màn hình, Menu chính -> Giới thiệu Đêm (lời Ông Đăng) -> Màn hình Bình Minh tổng điểm, và lưu Cài đặt vào `localStorage`.
  - [x] Hiệu năng Headless vượt trội: chạy trọn Đêm 3 (`21,600` ticks) chỉ mất **`57 ms`** (`0.057 giây`, nhanh hơn giới hạn `30 giây` trên 500 lần).
- **Yêu cầu chưa đạt:** Không có.

---

## 4. Thống kê Token & Chi phí ước tính theo Phase

| Phase | Số lượt tương tác chính | Token Input ước tính | Token Output ước tính | Chi phí quy đổi ước tính | Cách tiết kiệm Token đã áp dụng |
|---|---:|---:|---:|---:|---|
| **Phase 1** | 4 lượt | ~18,000 tokens | ~7,500 tokens | ~$0.12 | Viết spec & test headless trước; tách `src/core/` thuần JS không cần bật browser để test logic; dùng `npm run proof` tự động sinh toàn bộ bằng chứng. |
| **Phase 2** | 2 lượt | ~24,000 tokens | ~11,000 tokens | ~$0.17 | Tái sử dụng kiến trúc `GameSimulation` tách biệt; viết 13 unit/scenario tests chạy trong `0.17s` để bắt ngay lỗi vật lý Bục nhảy ở tick 60 mà không tốn vòng lặp debug thủ công. |
