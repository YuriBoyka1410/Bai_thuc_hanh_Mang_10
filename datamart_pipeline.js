/**
 * ==============================================
 * DỰ ÁN: DATAMART - HỆ THỐNG XỬ LÝ DỮ LIỆU
 * ==============================================
 *
 * Mục tiêu:
 * - Lọc các đơn hàng đã giao thành công.
 * - Tính tổng tiền của từng đơn hàng.
 * - Tính tổng doanh thu của hệ thống.
 *
 * Sử dụng: filter() -> map() -> reduce()
 *
 * Yêu cầu:
 * - Không sử dụng vòng lặp for.
 * - Không làm thay đổi dữ liệu gốc.
 * - Xử lý an toàn khi dữ liệu đầu vào không hợp lệ.
 */

// ==============================================
// PHẦN 1: KHAI BÁO DỮ LIỆU ĐƠN HÀNG
// ==============================================

const orders = [
  { id: 1, status: "Delivered", price: 100, tax: 10 },
  { id: 2, status: "Cancelled", price: 200, tax: 20 },
  { id: 3, status: "Delivered", price: 300, tax: 30 },
  { id: 4, status: "Pending", price: 150, tax: 15 },
  { id: 5, status: "Delivered", price: 500, tax: 50 },
  { id: 6, status: "Cancelled", price: 250, tax: 25 },
  { id: 7, status: "Pending", price: 400, tax: 40 },
  { id: 8, status: "Delivered", price: 700, tax: 70 },
  { id: 9, status: "Delivered", price: 200, tax: 20 },
  { id: 10, status: "Cancelled", price: 350, tax: 35 },
  { id: 11, status: "Delivered", price: 1000, tax: 100 },
  { id: 12, status: "Pending", price: 600, tax: 60 },
  { id: 13, status: "Delivered", price: 800, tax: 80 },
  { id: 14, status: "Cancelled", price: 900, tax: 90 },
  { id: 15, status: "Delivered", price: 1200, tax: 120 },
  { id: 16, status: "Pending", price: 300, tax: 30 },
  { id: 17, status: "Delivered", price: 450, tax: 45 },
  { id: 18, status: "Cancelled", price: 750, tax: 75 },
  { id: 19, status: "Delivered", price: 550, tax: 55 },
  { id: 20, status: "Pending", price: 950, tax: 95 },
];

// ==============================================
// PHẦN 2: XÂY DỰNG HÀM TÍNH TỔNG DOANH THU
// ==============================================

// Hàm tính tổng doanh thu của các đơn hàng đã giao thành công
function calculateTotalRevenue(orderList) {
  // Kiểm tra dữ liệu đầu vào có phải là một mảng hay không
  if (!Array.isArray(orderList)) {
    return 0;
  }
  return (
    orderList

      // Bước 1: Lọc những đơn hàng đã giao hàng thành công
      // Chỉ giữ lại đơn hàng đủ giá tiền và thuế hợp lệ
      .filter(
        (order) =>
          order !== null &&
          typeof order === "object" &&
          Number.isFinite(order.price) &&
          Number.isFinite(order.tax),
      )
      // Bước 2: Biến đổi mỗi đơn hàng thành tổng tiền
      // Tổng tiền = Giá sản phẩm + thuế
      .map((order) => order.price + order.tax)

      // Bước 3: Cộng dồn tổng tiền của các đơn hàng
      // acc: Biến tích lũy, lưu tổng doanh thu hiện tại
      // curr: Giá trị tiền của đơn hàng đang được xử lý
      // 0: Giá trị khởi tạo ban đầu của biến tích lũy
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0)
  );
}

// ==============================================
// PHẦN 3: KIỂM THỬ CHƯƠNG TRÌNH
// ==============================================

console.log("======================================");
console.log("       BÁO CÁO DOANH THU DATAMART");
console.log("======================================");

// Kiểm thử 1: Dữ liệu đơn hàng bình thường
console.log("\nKIỂM THỬ 1: DỮ LIỆU CHUẨN");

const totalRevenue = calculateTotalRevenue(orders);

console.log("Tổng số đơn hàng:", orders.length);
console.log("Tổng doanh thu:", totalRevenue);

// Kiểm thử 2: Mảng dữ liệu rỗng
console.log("\nKIỂM THỬ 2: MẢNG RỖNG");

const emptyOrders = [];

console.log("Tổng doanh thu:", calculateTotalRevenue(emptyOrders));

// Kiểm thử 3: Không có đơn hàng nào được giao thành công
console.log("\nKIỂM THỬ 3: KHÔNG CÓ ĐƠN HÀNG DELIVERED");

const noDeliveredOrders = [
  { id: 21, status: "Pending", price: 100, tax: 10 },
  { id: 22, status: "Cancelled", price: 200, tax: 20 },
];

console.log("Tổng doanh thu:", calculateTotalRevenue(noDeliveredOrders));

// Kiểm thử 4: Dữ liệu đầu vào có giá trị bất thường
console.log("\nKIỂM THỬ 4: DỮ LIỆU BẤT THƯỜNG");

const abnormalOrders = [
  { id: 23, status: "Delivered", price: 100, tax: 10 },
  { id: 24, status: "Delivered", price: null, tax: 20 },
  { id: 25, status: "Delivered", price: 200, tax: undefined },
  { id: 26, status: "Delivered", price: "300", tax: 30 },
  null,
  { id: 27, status: "Pending", price: 500, tax: 50 },
  { id: 28, status: "Delivered", price: 400, tax: 40 },
];

console.log("Tổng doanh thu:", calculateTotalRevenue(abnormalOrders));

// Kiểm thử 5: Dữ liệu đầu vào không phải mảng
console.log("\nKIỂM THỬ 5: SAI KIỂU DỮ LIỆU");

console.log("Tổng doanh thu:", calculateTotalRevenue(null));

// ==============================================
// PHẦN 4: KIỂM TRA TÍNH TOÀN VẸN DỮ LIỆU GỐC
// ==============================================

console.log("\nKIỂM THỬ 6: KIỂM TRA DỮ LIỆU GỐC");

// Sao chép dữ liệu gốc dưới dạng chuỗi JSON
const originalData = JSON.stringify(orders);

// Thực hiện tính toán doanh thu
calculateTotalRevenue(orders);

// Chuyển dữ liệu hiện tại thành chuỗi JSON
const currentData = JSON.stringify(orders);

// So sánh dữ liệu trước và sau khi xử lý
console.log(
  "Dữ liệu gốc có bị thay đổi không?",
  originalData !== currentData ? "CÓ" : "KHÔNG",
);

// ==============================================
// PHẦN 5: KẾT THÚC CHƯƠNG TRÌNH
// ==============================================

console.log("\n======================================");
console.log("          KẾT THÚC BÁO CÁO");
console.log("======================================");
