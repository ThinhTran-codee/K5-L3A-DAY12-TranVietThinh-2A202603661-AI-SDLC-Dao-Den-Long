# Nhật Ký Dùng AI, Đánh Giá Phase & Quản Lý Token (AI Log & Evaluation)

## 1. Chiến lược điều phối AI & Tiết kiệm Token

1. **Thiết kế kế hoạch kiểm chứng trước khi code (Test-First SDLC):**
   - Trước khi viết giao diện 3D, bóc tách toàn bộ yêu cầu của `PRD-0` và `Test Contract v1.0` thành bảng giả định và 8 tiêu chí nghiệm thu (`docs/notes/phase-1-spec.md`).
   - Tách kiến trúc thành 2 tầng độc lập: `src/core/` (mô phỏng 60Hz thuần JavaScript, không phụ thuộc DOM/WebGL) và `src/client/` (Three.js 3D renderer + Web Audio). Nhờ vậy mọi bài kiểm thử chạy trực tiếp qua Node.js mất chưa tới `0.3 giây`, tiết kiệm hàng chục nghìn token so với việc debug qua giao diện đồ họa.
2. **Giữ ngữ cảnh (Context) gọn:**
   - `AGENTS.md` chỉ giữ dưới 45 dòng với các lệnh cốt lõi và quy tắc bất biến.
   - Đóng gói quy trình chạy test & sinh bằng chứng vào skill `.agents/skills/verify-phase/SKILL.md` và script `scripts/generate-proof.js`.

---

## 2. Nhật ký lỗi của AI & Cập nhật Harness (AI Error Analysis)

| Phase | Lỗi / Rủi ro của AI | Cách phát hiện | Cách sửa & Cập nhật Harness |
|---|---|---|---|
| **Phase 1** | **Lỗi 1 (Quá chặt khi validate `move: [x, z]`):** Bản nháp đầu tiên của `validateInputs` trong `src/headless.js` kiểm tra `f.move[0] < -1 \|\| f.move[0] > 1` và thoát với mã lỗi `2`. Tuy nhiên Test Contract v1.0 mục C quy định: *"Vector dài hơn 1 phải được chuẩn hóa về độ dài 1"*. Nếu kịch bản chấm tự động truyền `move: [2, 0]` để test chuẩn hóa vector thì sẽ bị báo lỗi oan. | Đọc review diff đối chiếu từng câu trong Mục C của Test Contract v1.0 trước khi commit. | Sửa `validateInputs` chỉ bắt lỗi mã `2` khi `move` không phải mảng 2 số hữu hạn, còn vector có độ dài `> 1` được chuẩn hóa bằng `Math.hypot(mx, mz)` trong `simulation.js`. Bổ sung quy tắc này vào Mục 3.4 của `AGENTS.md`. |
| **Phase 1** | **Lỗi 2 (Va chạm rìa vùng an toàn `safe_radius`):** Nếu Mây đứng sát mép trong của `safe_radius` (`5.0m`, ví dụ ở `4.2m`) và Bóng Mực bị chặn ở rìa ngoài (`5.0m`), khoảng cách giữa hai bên là `0.8m <= shade_hit_radius (1.2m)`. Nếu chỉ chặn vị trí Bóng Mực mà không kiểm tra Mây đang ở trong vùng sáng của đèn, Mây vẫn bị mất máu dù đang đứng trong vùng an toàn. | Phân tích hình học khi viết test `AC-1.5` (`tests/contract.test.js`). | Thêm kiểm tra `isPlayerInLitSafeZone()` trong `src/core/simulation.js`: khi Mây đứng trong `safe_radius` của đèn đã sáng, Bóng Mực vừa bị đẩy ra rìa vừa không thể gây sát thương. |

---

## 3. Đánh giá Phase 1 (Phase 1 Evaluation)

- **Các yêu cầu đã đạt (100%):**
  - [x] `game.contract.json` đầy đủ toàn bộ trường `tuning` khớp với `src/core/config.js`.
  - [x] Chế độ headless (`node src/headless.js`) hỗ trợ đầy đủ `--seed`, `--night`, `--scenario`, `--inputs`, `--ticks`, `--out`, `--snapshot-every`.
  - [x] Đúng mô hình tick (snapshot tick 0 trước khi chạy input, bước `k` sinh trạng thái và event tại tick `k+1`, dòng `end` cuối cùng).
  - [x] Tính tất định tuyệt đối (2 lần chạy cùng seed cho SHA-256 giống hệt nhau).
  - [x] Bản 3D Three.js chơi được trọn vẹn Đêm 1 – Đảo Bến từ đầu đến Thắng/Thua, có Mây đội nón lá treo đèn lồng nhỏ, 5 Đèn Lồng Lớn sáng dần đẩy lùi sương đen, đom đóm vàng cam, Bóng Mực tím đen, HUD, nút Chơi lại, âm thanh ngũ cung và mục "Sáng tạo của tôi" (Cụ Rùa Giữ Bến & Chuông Gió dẫn đường `[G]`).
- **Yêu cầu chưa đạt:** Không có.

---

## 4. Thống kê Token & Chi phí ước tính theo Phase

| Phase | Số lượt tương tác chính | Token Input ước tính | Token Output ước tính | Chi phí quy đổi ước tính | Cách tiết kiệm Token đã áp dụng |
|---|---:|---:|---:|---:|---|
| **Phase 1** | 4 lượt | ~18,000 tokens | ~7,500 tokens | ~$0.12 | Viết spec & test headless trước; tách `src/core/` thuần JS không cần bật browser để test logic; dùng `npm run proof` tự động sinh toàn bộ bằng chứng. |
