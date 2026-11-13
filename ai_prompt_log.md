# DATAMART - AI PROMPT LOG

## 1. Tìm hiểu phương thức filter()

**Prompt:**

Hãy giải thích cơ chế hoạt động của phương thức
filter() trong JavaScript.

Sử dụng ví dụ mảng đơn hàng có nhiều trạng thái:
Delivered, Pending và Cancelled.

Giải thích callback function hoạt động như thế nào,
tham số order nhận giá trị gì và điều kiện true/false
ảnh hưởng đến kết quả lọc ra sao.

## 2. Tìm hiểu phương thức map()

**Prompt:**

Hãy giải thích sự khác nhau giữa map() và forEach()
trong JavaScript.

Tại sao khi cần biến đổi danh sách đơn hàng thành
danh sách tổng tiền của từng đơn hàng thì nên sử dụng
map() thay vì forEach()?

Hãy minh họa bằng ví dụ cụ thể.

## 3. Tìm hiểu phương thức reduce()

**Prompt:**

Hãy giải thích chi tiết cơ chế hoạt động của reduce()
trong JavaScript.

Tập trung giải thích:

- Accumulator (acc) là gì?
- CurrentValue (curr) là gì?
- Giá trị khởi tạo 0 có ý nghĩa gì?
- Điều gì xảy ra nếu bỏ giá trị khởi tạo?
- Điều gì xảy ra khi mảng đầu vào rỗng?

Hãy minh họa quá trình cộng dồn bằng bảng.

## 4. Tìm hiểu Method Chaining

**Prompt:**

Hãy giải thích cách kết hợp filter(), map() và reduce()
thành một chuỗi Method Chaining trong JavaScript.

Sử dụng bài toán tính tổng doanh thu đơn hàng
của hệ thống DataMart làm ví dụ.

Giải thích dữ liệu đầu ra của từng phương thức
trở thành dữ liệu đầu vào của phương thức tiếp theo.

## 5. Tìm hiểu tính bất biến của dữ liệu

**Prompt:**

Hãy giải thích khái niệm Immutable Data và Side Effect
trong JavaScript.

Khi sử dụng filter(), map() và reduce(), tại sao
các phương thức này không làm thay đổi mảng ban đầu?

Hãy hướng dẫn cách kiểm tra dữ liệu gốc trước và sau
khi thực hiện xử lý.

## 6. Xây dựng bộ kiểm thử dữ liệu

**Prompt:**

Hãy đề xuất các trường hợp kiểm thử cho hàm
calculateTotalRevenue() trong dự án DataMart.

Yêu cầu có các trường hợp:

- Mảng chứa dữ liệu đơn hàng bình thường.
- Mảng rỗng.
- Không có đơn hàng Delivered.
- Đơn hàng có price bằng null.
- Đơn hàng thiếu tax.
- Price là chuỗi ký tự.
- Có phần tử null trong mảng.
- Đầu vào không phải mảng.
- Kiểm tra dữ liệu gốc có bị thay đổi không.

Không viết toàn bộ lời giải, chỉ phân tích
logic kiểm thử và kết quả mong đợi.

## 7. Nhờ AI đóng vai Tech Lead

**Prompt:**

Hãy đóng vai Tech Lead và review bài tập
DataMart sử dụng filter(), map() và reduce().

Đặt các câu hỏi vấn đáp về:

- Sự khác nhau giữa map() và forEach().
- Vai trò của accumulator trong reduce().
- Ý nghĩa của giá trị khởi tạo 0.
- Tính bất biến của dữ liệu.
- Hiệu suất khi xử lý một triệu phần tử.

Sau đó đưa ra nhận xét về những điểm cần cải thiện
trong mã nguồn.
