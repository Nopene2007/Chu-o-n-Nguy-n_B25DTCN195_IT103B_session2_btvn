// Định nghĩa các hằng
const ADMIN = "admin".toLowerCase();
const STUDENT = "student".toLowerCase();
const GUEST = "guest".toLowerCase();

// Khai báo các biến cần thiết
let userName = "Nguyễn Văn A";
let roleName = STUDENT;
let balance = 100000;
let cardStatus = true;
let expirationDate = 11;
let messageRole = "";
let resultBorrowMessage = "";
let totalPrice = 0;

// 1. Kiểm tra quyền truy cập dựa vào biến Vai trò (cần chuẩn hóa về chữ thường trước khi check):
// - Nếu là "admin": In ra "Chào Admin, bạn có toàn quyền hệ thống".
// - Nếu là "student": In ra "Chào sinh viên, bạn có thể mượn sách".
// - Nếu là "guest": In ra "Chào khách, bạn chỉ có thể đọc tại chỗ".
// - Trường hợp khác (default): In ra "Lỗi: Vai trò không hợp lệ!".

switch (roleName.toLowerCase()) {
  case ADMIN:
    console.log("Chào Admin, bạn có toàn quyền hệ thống");
    // Gán lại thông báo quyền
    messageRole = "Chào Admin, bạn có toàn quyền hệ thống";
    break;

  case STUDENT:
    console.log("Chào sinh viên, bạn có thể mượn sách");
    // Gán lại thông báo quyền
    messageRole = "Chào sinh viên, bạn có thể mượn sách";

    // 2. Kiểm tra điều kiện mượn sách:
    // Người dùng CHỈ ĐƯỢC PHÉP mượn sách khi thỏa mãn các điều kiện sau:
    // - Tên người dùng không được để trống (Gợi ý: Kiểm tra Truthy/Falsy).
    // - Vai trò phải là "student".
    // - Số dư tài khoản phải lớn hơn 0 VÀ Trạng thái thẻ phải là true (Hoạt động).
    // Nếu đủ điều kiện: In ra "ĐƯỢC PHÉP MƯỢN SÁCH".
    // Nếu không đủ điều kiện: In ra "YÊU CẦU BỊ TỪ CHỐI" và ghi rõ lý do (nếu có thể).

    if (userName && balance > 0 && cardStatus) {
      console.log("ĐƯỢC PHÉP MƯỢN SÁCH");
      //   Gán lại nội dung
      resultBorrowMessage = "ĐƯỢC PHÉP MƯỢN SÁCH";

      // 3. Tính phí phạt trả muộn dựa vào số ngày quá hạn:
      // - Nếu số ngày <= 0: Không phạt. In ra "Cảm ơn bạn đã trả đúng hạn".
      // - Nếu số ngày từ 1 đến 5 ngày: Phạt 5.000đ/ngày.
      // - Nếu số ngày từ 6 đến 10 ngày: Phạt 10.000đ/ngày.
      // - Nếu số ngày > 10 ngày: Phạt 200.000đ (cố định) và in thêm cảnh báo "TÀI KHOẢN BỊ KHÓA".
      if (expirationDate <= 0) {
        console.log("Cảm ơn bạn đã trả đúng hạn");
      } else if (expirationDate >= 1 && expirationDate <= 5) {
        console.log("Số tiền phạt: ", expirationDate * 5000);
        totalPrice = expirationDate * 5000;
      } else if (expirationDate >= 6 && expirationDate <= 10) {
        console.log("Số tiền phạt: ", expirationDate * 10000);
        totalPrice = expirationDate * 10000;
      } else {
        console.log("Số tiền phạt: ", 200000);
        totalPrice = 200000;
        console.log("TÀI KHOẢN BỊ KHÓA");
      }
    } else {
      //   Gán lại nội dung
      resultBorrowMessage = "YÊU CẦU BỊ TỪ CHỐI";
      if (!userName) {
        console.log("YÊU CẦU BỊ TỪ CHỐI. Lý do: Tên đang bị để trống");
      } else if (balance <= 0) {
        console.log("YÊU CẦU BỊ TỪ CHỐI. Lý do: Số dư không đủ");
      } else if (!cardStatus) {
        console.log("YÊU CẦU BỊ TỪ CHỐI. Lý do: Thẻ đã bị khóa");
      } else {
        console.log("YÊU CẦU BỊ TỪ CHỐI. Lý do không rõ");
      }
    }
    break;
  case GUEST:
    console.log("Chào khách, bạn chỉ có thể đọc tại chỗ");
    // Gán lại thông báo quyền
    messageRole = "Chào khách, bạn chỉ có thể đọc tại chỗ";
    break;

  default:
    console.log("Lỗi: Vai trò không hợp lệ!");
    break;
}

// In ra kết quả với định dạng sau (chú ý các thông tin phải được xử lý đúng như yêu cầu trên):
//  		--- HỆ THỐNG MƯỢN TRẢ ---
// Người dùng: NGUYEN VAN A
// Quyền hạn: Chào sinh viên, bạn có thể mượn sách
// Kết quả mượn: ĐƯỢC PHÉP MƯỢN SÁCH
// Tình trạng trả sách: Quá hạn 7 ngày
// Tiền phạt: 70000 VNĐ

console.log(`
 		--- HỆ THỐNG MƯỢN TRẢ ---
            Người dùng: ${userName}
            Quyền hạn: ${messageRole}
            Kết quả mượn: ${resultBorrowMessage}
            Tình trạng trả sách: ${expirationDate === 0 ? "Đúng hạn" : `Quá bạn ${expirationDate} ngày`}
            Tiền phạt: ${totalPrice} VNĐ
`);