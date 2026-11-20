# Phase 1 Specification, Assumptions & Acceptance Criteria (`PRD-0`)

## 1. Phân tích yêu cầu bắt buộc vs. Chỗ mơ hồ trong `PRD-0`

`PRD-0` cố ý để mở các thông số gameplay cụ thể của màn **Đêm 1 – Đảo Bến** và yêu cầu khai báo chính xác trong `game.contract.json` để hệ thống chấm tự động sinh kịch bản kiểm thử.

### Bảng Giả định (Assumptions) cho các chỗ mơ hồ

| STT | Hạng mục mơ hồ trong PRD-0 | Giả định cụ thể & Lý do thiết kế | Giá trị trong `game.contract.json` |
|---|---|---|---|
| A1 | Kích thước đảo & vị trí 5 Đèn Lồng Lớn (`L1`..`L5`) | Đảo tròn bán kính hiển thị 45m, mặt đất tại `Y = 0`. Nhân vật Mây xuất phát tại `[0, 0, 0]`. 5 Đèn Lồng Lớn (`L1`..`L5`) xếp trên vòng tròn bán kính 25m quanh tâm đảo (`L1` ở `[0, 0, 25]`, các đèn tiếp theo cách nhau 72°). Không khóa cứng biên vật lý khi `fall_enabled: false` để mọi tọa độ trong `--scenario` của giảng viên đều đi tới được. | `lantern_count_night1: 5`, `fall_enabled: false` |
| A2 | Tốc độ và khả năng mang đom đóm của Mây | Mây chạy tốc độ `8.0 m/s`, mang tối đa `5` đom đóm cùng lúc, tự động nhặt khi khoảng cách mặt phẳng `XZ <= 2.0m`. | `player_speed: 8`, `carry_capacity: 5`, `pickup_radius: 2` |
| A3 | Chi phí và bán kính thắp Đèn Lồng Lớn | Mỗi Đèn Lồng Lớn cần `3` đom đóm để sáng (`lantern_cost = 3`). Khi đứng trong bán kính `3.0m` (`interact_radius = 3`) và bấm `interact` (cạnh lên `false -> true`), Mây nạp `min(carried, lantern_cost - deposited)` đom đóm vào đèn gần nhất chưa sáng. Đủ 3 đom đóm thì đèn sáng (`lit = true`). | `lantern_cost: 3`, `interact_radius: 3` |
| A4 | Cơ chế Tỏa sáng (`pulse`) | Bấm `pulse` (`false -> true`) khi đang mang ít nhất `1` đom đóm (`pulse_cost = 1`) và hết thời gian hồi chiêu (`pulse_cooldown_s = 1.0s`) sẽ tiêu tốn 1 đom đóm, làm choáng (`stunned`) mọi Bóng Mực trong bán kính `6.0m` (`pulse_radius = 6`) trong `3.0s` (`pulse_stun_s = 3`), đồng thời đẩy lùi chúng `4.0m` (`pulse_push_m = 4`) ra xa Mây. | `pulse_cost: 1`, `pulse_radius: 6`, `pulse_stun_s: 3`, `pulse_push_m: 4`, `pulse_cooldown_s: 1` |
| A5 | Hành vi Bóng Mực (`shades`) và vùng an toàn quanh đèn | Bóng Mực di chuyển ở trạng thái `"chase"` về phía Mây với tốc độ `4.5 m/s`. Khi một Đèn Lồng Lớn đã sáng (`lit = true`), nó tạo vùng an toàn bán kính `5.0m` (`safe_radius = 5`) mà Bóng Mực không thể đi vào (bị đẩy ra rìa `5.0m`). | `shade_speed: 4.5`, `safe_radius: 5`, `shade_hit_radius: 1.2` |
| A6 | Máu (`flames`), bất tử tạm thời và rơi đom đóm khi bị chạm | Mây có `3` ngọn lửa máu (`flames = 3`). Khi Bóng Mực không bị choáng chạm vào Mây (`distXZ <= 1.2m`), Mây mất 1 `flames`, nhận `1.5s` bất tử (`invuln_s = 1.5`), và không đánh rơi đom đóm (`hit_drop_ratio = 0`). | `flames: 3`, `invuln_s: 1.5`, `hit_drop_ratio: 0` |
| A7 | Thời lượng Đêm 1 & Điều kiện Thắng/Thua | Đêm 1 kéo dài `300s` (`night1_duration_s = 300`). Thắng (`won`, `reason: "all_lit"`) ngay ở tick thắp sáng đủ tất cả các đèn. Thua (`lost`) khi `flames == 0` (`reason: "no_flames"`) hoặc hết giờ `time_left_s <= 0` (`reason: "dawn"`). | `night1_duration_s: 300` |
| A8 | Công thức tính điểm (`score`) | Nhặt 1 đom đóm: `+10` điểm. Thắp sáng 1 đèn lồng: `+100` điểm. Làm choáng mỗi Bóng Mực bằng `pulse`: `+25` điểm/con. Khi thắng (`all_lit`): cộng thưởng `round(time_left_s * 2) + flames * 50`. Dựng `--scenario` ở tick 0 không phát sự kiện và không cộng điểm. | `per_mote: 10`, `per_lantern: 100`, `per_stun: 25`, `per_second_left: 2`, `per_flame_left: 50` |
| A9 | Tự động sinh đom đóm & Bóng Mực khi không tắt trong scenario | Nếu `random_motes !== false`: khởi tạo 20 đom đóm theo seed và định kỳ bổ sung nếu dưới 15 con. Nếu `random_shades !== false`: khởi tạo 3 Bóng Mực ở rìa đảo theo seed và mỗi 45s (2700 ticks) sinh thêm 1 Bóng Mực mới (tối đa 6 con), phát sự kiện `shade_spawned`. | Tất định 100% theo `--seed` |

---

## 2. Tiêu chí nghiệm thu (Acceptance Criteria) & Kế hoạch kiểm chứng

| Mã AC | Mô tả tiêu chí nghiệm thu ("Làm A thì thấy B") | Cách kiểm chứng |
|---|---|---|
| **AC-1.1** | Di chuyển với `move: [x, z]` và `cam_yaw_deg` theo đúng công thức xoay vector và tốc độ `player_speed = 8 m/s` ở 60 tick/s. | Unit test + Headless scenario kiểm tra tọa độ `player.pos` sau 60 ticks. |
| **AC-1.2** | Đi vào bán kính `pickup_radius = 2.0m` quanh đom đóm khi `carried < carry_capacity` sẽ tự động nhặt, phát event `mote_picked`, tăng `carried` và cộng `10` điểm. Không nhặt quá `carry_capacity = 5`. | Unit test + Scenario `s1_pickup_deposit_win.json`. |
| **AC-1.3** | Đứng trong `interact_radius = 3.0m` quanh đèn chưa sáng và bấm `interact: false -> true` sẽ nạp đom đóm, phát event `deposit`; khi `deposited == 3` thì đèn sáng (`lit: true`), phát event `lantern_lit`, cộng `100` điểm. | Unit test + Scenario `s1_pickup_deposit_win.json`. |
| **AC-1.4** | Bấm `pulse: false -> true` khi `carried >= 1` và hết cooldown sẽ trừ 1 `carried`, làm choáng Bóng Mực trong `6.0m` suốt `3.0s`, đẩy lùi `4.0m`, phát event `pulse` kèm `stunned_ids` và cộng `25` điểm/con. | Unit test + Scenario `s2_pulse_stun_push.json`. |
| **AC-1.5** | Bóng Mực đuổi Mây với tốc độ `4.5 m/s`, không thể đi vào vùng `safe_radius = 5.0m` quanh đèn đã sáng. Khi chạm Mây (`<= 1.2m`), Mây mất 1 `flames`, kích hoạt `invuln_s = 1.5s`, phát event `player_hit`. | Unit test + Scenario `s3_shade_hit_lose.json` & `s4_safe_radius.json`. |
| **AC-1.6** | Thắp đủ 5 đèn thì kết thúc ngay với `game_over (won, all_lit)` và dòng `end`; hết máu thì `game_over (lost, no_flames)`; hết giờ thì `game_over (lost, dawn)`. | Unit test + Scenarios `s1`, `s3`, `s5_dawn_timeout.json`. |
| **AC-1.7** | Chạy 2 lần cùng `--seed`, `--scenario`, `--inputs` cho ra file `.jsonl` giống hệt nhau từng byte. File input/scenario sai định dạng thoát với mã lỗi `2` và ghi `stderr`. | Test tất định (`determinism.test.js`) + Test mã thoát (`cli_validation.test.js`). |
| **AC-1.8** | Giao diện 3D Three.js hiển thị đảo đêm, Mây đội nón lá treo đèn lồng nhỏ, 5 Đèn Lồng Lớn sáng dần, đom đóm vàng cam, Bóng Mực tím đen, HUD đầy đủ, chơi lại được, kèm mục "Sáng tạo của tôi" (Cột Gió Mây & Chuông Gió Cổ Đại chỉ bật ở bản 3D, tắt ở headless). | Chạy trực tiếp trên trình duyệt + chụp ảnh bằng chứng vào `docs/proof/phase-1/`. |
