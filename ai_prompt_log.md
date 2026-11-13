# DATAMART - AI PROMPT LOG

## 1. Thông tin dự án

- Tên dự án: DataMart - Chiến dịch xử lý dữ liệu lớn.
- Ngôn ngữ: JavaScript.
- Nội dung: Tái cấu trúc chương trình tính doanh thu đơn hàng.
- Phương pháp: filter(), map(), reduce().
- Mục tiêu: Clean Code, Immutable Data và xử lý dữ liệu an toàn.

---

## 2. Nhật ký tương tác với AI

### Prompt 1: Tìm hiểu yêu cầu bài tập

**Yêu cầu thực tế:**

Nhờ AI hướng dẫn thực hiện bài tập DataMart, phân tích code Legacy và giải thích cách chuyển đổi từ vòng lặp for sang Array Methods.

**Mục đích:**

- Hiểu yêu cầu bài toán.
- Xác định nhiệm vụ của filter(), map(), reduce().
- Thiết kế luồng xử lý dữ liệu.

**Kết quả học được:**

Luồng xử lý phù hợp là:

orders -> filter() -> map() -> reduce() -> totalRevenue.

---

### Prompt 2: Tìm hiểu các phương thức Array Methods

**Yêu cầu thực tế:**

Nhờ AI giải thích cơ chế hoạt động của filter(), map(), reduce() và cách sử dụng trong bài toán tính doanh thu.

**Mục đích:**

- Hiểu callback function.
- Phân biệt nhiệm vụ của từng phương thức.
- Hiểu dữ liệu đầu ra của phương thức trước.

**Kết quả học được:**

- filter(): Lọc các phần tử thỏa mãn điều kiện.
- map(): Biến đổi từng phần tử và tạo mảng mới.
- reduce(): Tích lũy dữ liệu thành một kết quả.

---

### Prompt 3: Hỗ trợ hoàn thiện mã nguồn

**Yêu cầu thực tế:**

Nhờ AI cung cấp code tham khảo đầy đủ cho bài DataMart, có giải thích và chú thích từng bước bằng tiếng Việt.

**Mục đích:**

- Tham khảo cách tổ chức chương trình.
- Hiểu cấu trúc Method Chaining.
- Tìm hiểu cách xử lý dữ liệu đầu vào bất thường.

**Kết quả học được:**

Biết cách kết hợp ba phương thức filter(), map() và reduce() trong một hàm tính doanh thu.

---

### Prompt 4: Kiểm tra dữ liệu bất thường

**Yêu cầu thực tế:**

Nhờ AI xây dựng các trường hợp kiểm thử gồm mảng rỗng, dữ liệu null, undefined, chuỗi ký tự và đầu vào không phải mảng.

**Mục đích:**

- Kiểm tra độ an toàn của chương trình.
- Tránh kết quả NaN.
- Đảm bảo dữ liệu không hợp lệ không được tính vào doanh thu.

**Kết quả học được:**

Sử dụng Array.isArray() và Number.isFinite() để kiểm tra dữ liệu.

---

### Prompt 5: Review và sửa lỗi chương trình

**Yêu cầu thực tế:**

Sau khi nhận được nhận xét của người chấm, nhờ AI phân tích nguyên nhân sai lệch doanh thu 11715 thay vì 6380 và hướng dẫn khắc phục.

**Mục đích:**

- Tìm nguyên nhân khiến chương trình tính cả đơn Pending và Cancelled.
- Sửa điều kiện lọc đơn hàng.
- Kiểm tra lại các trường hợp kiểm thử.

**Kết quả học được:**

Bổ sung điều kiện:

order.status === "Delivered"

vào filter() để chỉ giữ lại đơn hàng đã giao thành công.

---

### Prompt 6: Tìm hiểu hiệu suất xử lý dữ liệu lớn

**Yêu cầu thực tế:**

Nhờ AI giải thích nhược điểm về hiệu suất của Method Chaining khi xử lý một triệu phần tử và so sánh với phương pháp chỉ sử dụng reduce().

**Mục đích:**

- Hiểu chi phí tạo mảng trung gian.
- So sánh khả năng sử dụng bộ nhớ.
- Tìm hiểu phương pháp tối ưu.

**Kết quả học được:**

Sử dụng một lần reduce() có thể tránh tạo các mảng trung gian và chỉ duyệt dữ liệu một lần.

---

## 3. Nhật ký tự đánh giá

### Những kiến thức đã nắm được

1. Hiểu cách sử dụng filter() để lọc đơn hàng Delivered.
2. Hiểu cách sử dụng map() để tính tổng tiền từng đơn hàng.
3. Hiểu cách sử dụng reduce() để cộng dồn doanh thu.
4. Hiểu accumulator (acc) là biến lưu kết quả tích lũy.
5. Hiểu ý nghĩa của giá trị khởi tạo 0.
6. Hiểu nguyên tắc không thay đổi dữ liệu gốc.

### Những lỗi đã gặp

Ban đầu, chương trình thiếu điều kiện:

order.status === "Delivered"

Do đó chương trình tính cả những đơn hàng Pending và Cancelled.

Kết quả ban đầu là 11715 thay vì 6380.

### Cách khắc phục

Bổ sung điều kiện lọc trạng thái Delivered trong filter().

Sau đó chạy lại các trường hợp kiểm thử và đối chiếu kết quả thực tế với kết quả mong đợi.

### Kinh nghiệm rút ra

- Không được chỉ dựa vào comment để đánh giá logic chương trình.
- Phải kiểm tra điều kiện trong code thực tế.
- Phải chạy thử chương trình trước khi ghi kết quả vào báo cáo.
- Cần hiểu rõ accumulator trong reduce().
- Cần cân nhắc hiệu suất và bộ nhớ khi xử lý dữ liệu lớn.

---

## 4. Kết luận

Thông qua bài thực hành DataMart, em đã tìm hiểu và vận dụng
các phương thức xử lý mảng hiện đại trong JavaScript.

Bài tập giúp em hiểu rõ hơn về Method Chaining,
Immutable Data, Callback Function và cách kiểm thử
chương trình với nhiều trường hợp dữ liệu khác nhau.

Em cũng nhận ra rằng code chạy không báo lỗi
chưa chắc đã cho kết quả đúng.

Việc kiểm thử và đối chiếu kết quả thực tế
là bước quan trọng trong quá trình phát triển phần mềm.
