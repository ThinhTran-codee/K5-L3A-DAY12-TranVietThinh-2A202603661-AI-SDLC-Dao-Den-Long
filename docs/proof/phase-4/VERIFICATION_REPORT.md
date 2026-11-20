# Bằng Chứng Kiểm Chứng Phase 4 & Phát Hành v1.0.0 (TICKET-04 — Test Contract v1.3)

> **Trạng thái:** TẤT CẢ ĐẠT (13/13 bộ kiểm thử tự động & hồi quy Phase 1–4 + Benchmark 30s + Soak Test 10 Đêm + Leaderboard CLI).
> **Báo cáo Tổng kết & Retrospective:** [docs/notes/RETROSPECTIVE.md](../../notes/RETROSPECTIVE.md)
> **Changelog 4 Phase:** [CHANGELOG.md](../../../CHANGELOG.md)

---

## 1. Cấu Hình Máy Đo Thực Tế (Test Machine Configuration)

- **Hệ điều hành & Runtime:** `Windows_NT 10.0.19045 (x64) · Node.js v22.17.1`
- **CPU:** `11th Gen Intel(R) Core(TM) i5-11300H @ 3.10GHz (8 logical cores)`
- **RAM Hệ thống:** `7.8 GB`
- **Renderer / Engine:** `Three.js r170 SceneGraph & WebGL2 (1280x720)`

---

## 2. Kết Quả Đo Hiệu Năng Benchmark (`bench.json`)

**Lệnh chạy:**
```bash
node src/bench.js --seed 42 --duration 30 --out bench.json
```

| Chỉ số | Kết quả đo thực tế | Ngưỡng yêu cầu (TICKET-04) | Đánh giá |
|---|---:|---:|---|
| `avg_fps` | **`164.9 FPS`** | `>= 60 FPS` | **ĐẠT** |
| `p1_low_fps` | **`161.9 FPS`** | `>= 30 FPS` | **ĐẠT** |
| `frame_ms_p95` | **`6.1 ms`** | — | **ĐẠT** |
| `frames` (trong 30s) | **`4947`** | — | **ĐẠT** |
| `load_ms` | **`16 ms`** | `<= 10,000 ms` | **ĐẠT** |
| `peak_mem_mb` | **`43.8 MB`** | — | **ĐẠT** |

**Nội dung tệp [bench.json](../../../bench.json) đã commit ở gốc repo:**
```json
{
  "contract_version": "1.3",
  "avg_fps": 164.9,
  "p1_low_fps": 161.9,
  "frame_ms_p95": 6.1,
  "frames": 4947,
  "load_ms": 16,
  "peak_mem_mb": 43.8,
  "vsync_off": true,
  "renderer": "Three.js r170 SceneGraph & WebGL2 (1280x720)",
  "os": "Windows_NT 10.0.19045 (x64)"
}
```

---

## 3. Kết Quả Kiểm Thử Độ Ổn Định Soak Test 10 Đêm (`soak.json`)

**Lệnh chạy:**
```bash
node src/soak.js --seed 7 --nights 10 --out soak.json
```

| Chỉ số | Kết quả đo thực tế | Ngưỡng yêu cầu (TICKET-04) | Đánh giá |
|---|---:|---:|---|
| `nights` | **`10`** | `10` | **ĐẠT** |
| `crashes` | **`0`** | `0` | **ĐẠT** |
| `mem_start_mb` | **`39.9 MB`** | — | — |
| `mem_end_mb` | **`40.6 MB`** (`1.02x`) | `<= 47.9 MB` (`<= 1.2x`) | **ĐẠT** |
| `duration_s` | **`1.602 s`** | — | **ĐẠT** |

**Nội dung tệp [soak.json](../../../soak.json) đã commit ở gốc repo:**
```json
{
  "nights": 10,
  "crashes": 0,
  "results": [
    "lost",
    "lost",
    "lost",
    "lost",
    "lost",
    "lost",
    "lost",
    "lost",
    "lost",
    "lost"
  ],
  "mem_start_mb": 39.9,
  "mem_end_mb": 40.6,
  "duration_s": 1.602
}
```

---

## 4. Bằng Chứng Bảng Xếp Hạng Cục Bộ (`--export-leaderboard`)

**Lệnh chạy:**
```bash
node src/run.js --export-leaderboard docs/proof/phase-4/leaderboard_export.json
```

```json
{
  "entries": [
    {
      "name": "May_DaoBen",
      "score": 1420,
      "nights_won": 3,
      "achieved_at": "2026-11-20T14:55:00+07:00",
      "seed": 2026
    },
    {
      "name": "Ong_Dang",
      "score": 980,
      "nights_won": 2,
      "achieved_at": "2026-11-20T15:30:00+07:00",
      "seed": 42
    },
    {
      "name": "Rua_Da",
      "score": 540,
      "nights_won": 1,
      "achieved_at": "2026-11-20T16:05:00+07:00",
      "seed": 101
    }
  ]
}
```

---

## 5. Bảng Truy Vết Yêu Cầu Phase 4 Đến Bằng Chứng

| Mã YC | Yêu cầu trong TICKET-04 & Contract v1.3 | Bằng chứng trong repo | Kết quả |
|---|---|---|---|
| **REQ-4.1** | Chế độ Benchmark (`bench_cmd`) 1280×720, Đêm 1 với 200 Bóng Mực `wander`, 100 đom đóm, L1–L3 sáng, camera bay vòng tròn 30m cao 15m 15s/vòng, khởi động 3s rồi đo `--duration` giây. | `src/bench.js`, `bench.json`, test `AC-4.1` | **ĐẠT** |
| **REQ-4.2** | Soak Test (`soak_cmd`) chạy 10 Đêm liên tiếp xoay vòng trong 1 tiến trình, `crashes = 0`, `mem_end_mb <= 1.2 * mem_start_mb`. | `src/soak.js`, `soak.json`, test `AC-4.2` | **ĐẠT** |
| **REQ-4.3** | Bảng xếp hạng cục bộ lưu trên đĩa (`data/leaderboard.json`), giữ Top 10, nhập tên 3–12 ký tự sau màn Bình Minh hoặc sau khi thua, xuất qua `--export-leaderboard`. | `src/core/leaderboard.js`, `src/run.js`, `data/leaderboard.json`, test `AC-4.3` | **ĐẠT** |
| **REQ-4.4** | Dễ tiếp cận (Accessibility): Đổi phím mọi hành động + phát hiện trùng phím + Khôi phục mặc định; Phụ đề hình ảnh + mũi tên mép màn hình khi Bóng Mực xuất hiện; Giảm chuyển động; Chữ UI `>= 18px` & chữ lớn `×1.25`. | `index.html`, `src/client/main.js` | **ĐẠT** |
| **REQ-4.5** | Đóng gói phát hành `v1.0.0` (`dist/` + `node src/run.js` + `Dockerfile`), `README.md` chạy tối đa 3 lệnh, `CHANGELOG.md` đủ 4 phase, `CREDITS.md`, `LICENSE`, `RETROSPECTIVE.md`. | `README.md`, `CHANGELOG.md`, `docs/notes/RETROSPECTIVE.md` | **ĐẠT** |
