/* =====================================================================
   CẤU HÌNH TRANG ĐĂNG KÝ + THANH TOÁN — Lớp Huấn luyện Trợ lý AI cá nhân
   ---------------------------------------------------------------------
   ⭐ CHỈ CẦN SỬA FILE NÀY để đổi nội dung. Sửa xong → Commit → Push.
   Cả trang đăng ký và trang cảm ơn đều tự cập nhật theo.
   ===================================================================== */

window.CONFIG = {

  /* --- Tên & giá khóa --- */
  TEN_KHOA: "Huấn luyện Trợ lý AI cá nhân",
  PHU_DE: "Biến ChatGPT thành nhân sự AI làm việc thật cho bạn — chỉ trong 3 buổi.",
  GIA: 1868000,                       // số tiền (dùng cho QR, KHÔNG có dấu chấm)
  GIA_HIEN_THI: "1.868.000đ",         // chữ hiển thị

  /* --- Lịch khai giảng (đổi ở đây) --- */
  KHAI_GIANG: "12 – 13 – 14/06/2026",

  /* --- Webhook Make (nhận đăng ký + xác nhận chuyển khoản) --- */
  WEBHOOK: "https://hook.eu2.make.com/lcmej5j2os9y13sedk11daev97pyxoq3",

  /* --- Tài khoản nhận tiền --- */
  NH_BIN: "970422",                   // mã BIN ngân hàng (MB Bank = 970422)
  NH_TEN: "MB Bank (Ngân hàng Quân đội)",
  SO_TK: "7750538888",
  TEN_TK: "CONG TY TNHH WINNET PRO",

  /* --- Ảnh mã QR ---
     • Để TÊN FILE ảnh (vd "qr-chuyen-khoan.png") → trang dùng đúng ảnh đó (ảnh tĩnh anh tải lên).
     • Để TRỐNG ("") → trang tự tạo QR VietQR có sẵn số tiền + nội dung CK = mã đơn.       */
  QR_ANH: "qr-chuyen-khoan.png",

  /* --- Mã đơn (tiền tố) --- */
  MA_DON_PREFIX: "TLAI",

  /* --- Quà tặng hiển thị (đổi tên/giá ở đây) --- */
  QUA_TANG: [
    "Ổ Cứng Kho Trợ Lý AI (6+ ngành)",
    "50 Câu Lệnh Workflow Thực Chiến",
    "30 Ngày Nhóm Kín hỏi đáp",
    "AI Assistant Training System — AI kèm bạn dựng trợ lý 24/7",
    "Khóa 1 ngày: Biến ChatGPT Thành Designer"
  ],
  TONG_GIA_TRI: "≈ 8.984.000đ",

  /* --- Liên hệ hỗ trợ (hiện ở trang cảm ơn) --- */
  HOTLINE: "",                        // để trống nếu chưa có; ví dụ "0900 000 000"

  /* --- Màu thương hiệu (ít khi đổi) --- */
  MAU_DAU: "#03377d",
  MAU_CUOI: "#0091c6",
  MAU_NHAN: "#f1c232"
};
