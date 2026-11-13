/**
 * ==================================================
 * DỰ ÁN: DATAMART - HỆ THỐNG XỬ LÝ DỮ LIỆU
 * ==================================================
 *
 * Mục tiêu:
 * 1. Lọc các đơn hàng đã giao thành công.
 * 2. Tính tổng tiền của từng đơn hàng.
 * 3. Cộng dồn tổng doanh thu.
 *
 * Phương thức sử dụng:
 * filter() -> map() -> reduce()
 *
 * Yêu cầu:
 * - Không sử dụng vòng lặp for.
 * - Không làm thay đổi dữ liệu gốc.
 * - Xử lý an toàn dữ liệu bất thường.
 * - Trả về 0 nếu dữ liệu đầu vào không hợp lệ.
 */

// ==================================================
// PHẦN 1: KHAI BÁO DỮ LIỆU ĐƠN HÀNG
// ==================================================

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

// ==================================================
// PHẦN 2: XÂY DỰNG HÀM TÍNH DOANH THU
// ==================================================

function calculateTotalRevenue(orderList) {
  // Kiểm tra dữ liệu đầu vào có phải là mảng hay không
  if (!Array.isArray(orderList)) {
    return 0;
  }

  return (
    orderList

      // Bước 1: Lọc đơn hàng đã giao thành công
      // Chỉ nhận đơn hàng có giá và thuế là số hợp lệ
      .filter(
        (order) =>
          order !== null &&
          typeof order === "object" &&
          order.status === "Delivered" &&
          Number.isFinite(order.price) &&
          Number.isFinite(order.tax),
      )

      // Bước 2: Tính tổng tiền của từng đơn hàng
      // Tổng tiền = Giá sản phẩm + Thuế
      .map((order) => order.price + order.tax)

      // Bước 3: Cộng dồn doanh thu của các đơn hàng
      // acc: Tổng doanh thu đã tích lũy
      // curr: Tổng tiền của đơn hàng hiện tại
      // 0: Giá trị khởi tạo của accumulator
      .reduce((acc, curr) => acc + curr, 0)
  );
}

// ==================================================
// PHẦN 3: HÀM TỐI ƯU SỬ DỤNG RIÊNG REDUCE()
// ==================================================

function calculateTotalRevenueOptimized(orderList) {
  // Kiểm tra dữ liệu đầu vào
  if (!Array.isArray(orderList)) {
    return 0;
  }

  return orderList.reduce((acc, order) => {
    // Bỏ qua đơn hàng không hợp lệ hoặc chưa giao thành công
    if (
      order === null ||
      typeof order !== "object" ||
      order.status !== "Delivered" ||
      !Number.isFinite(order.price) ||
      !Number.isFinite(order.tax)
    ) {
      return acc;
    }

    // Cộng tiền của đơn hàng hợp lệ vào tổng doanh thu
    return acc + order.price + order.tax;
  }, 0);
}

// ==================================================
// PHẦN 4: XÂY DỰNG HÀM KIỂM THỬ
// ==================================================

function runTest(testName, actual, expected) {
  // So sánh kết quả thực tế với kết quả mong đợi
  const passed = Object.is(actual, expected);

  console.log("\n--------------------------------------");
  console.log("Tên kiểm thử:", testName);
  console.log("Kết quả mong đợi:", expected);
  console.log("Kết quả thực tế:", actual);
  console.log("Trạng thái:", passed ? "PASSED" : "FAILED");

  return passed;
}

// ==================================================
// PHẦN 5: THỰC HIỆN CÁC TRƯỜNG HỢP KIỂM THỬ
// ==================================================

console.log("======================================");
console.log("       BÁO CÁO DOANH THU DATAMART");
console.log("======================================");

// Kiểm thử 1: Mảng đơn hàng tiêu chuẩn

console.log("\nKIỂM THỬ 1: DỮ LIỆU CHUẨN");

console.log("Tổng số đơn hàng:", orders.length);

const totalRevenue = calculateTotalRevenue(orders);

runTest("Tính doanh thu với 20 đơn hàng", totalRevenue, 6380);

// Kiểm thử 2: Mảng rỗng

console.log("\nKIỂM THỬ 2: MẢNG RỖNG");

const emptyOrders = [];

runTest("Tính doanh thu với mảng rỗng", calculateTotalRevenue(emptyOrders), 0);

// Kiểm thử 3: Không có đơn hàng Delivered

console.log("\nKIỂM THỬ 3: KHÔNG CÓ ĐƠN DELIVERED");

const noDeliveredOrders = [
  { id: 21, status: "Pending", price: 100, tax: 10 },
  { id: 22, status: "Cancelled", price: 200, tax: 20 },
];

runTest(
  "Không tính đơn Pending và Cancelled",
  calculateTotalRevenue(noDeliveredOrders),
  0,
);

// Kiểm thử 4: Dữ liệu bất thường

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

runTest(
  "Chỉ tính các đơn Delivered có dữ liệu hợp lệ",
  calculateTotalRevenue(abnormalOrders),
  550,
);

// Kiểm thử 5: Đầu vào không phải mảng

console.log("\nKIỂM THỬ 5: SAI KIỂU DỮ LIỆU");

runTest("Kiểm tra đầu vào null", calculateTotalRevenue(null), 0);

// Kiểm thử 6: Kiểm tra dữ liệu gốc có bị thay đổi không

console.log("\nKIỂM THỬ 6: KIỂM TRA TÍNH BẤT BIẾN");

const originalData = JSON.stringify(orders);

calculateTotalRevenue(orders);

const currentData = JSON.stringify(orders);

const isUnchanged = originalData === currentData;

runTest("Dữ liệu gốc không bị thay đổi", isUnchanged, true);

// Kiểm thử 7: So sánh kết quả của hai phương pháp

console.log("\nKIỂM THỬ 7: SO SÁNH HAI PHƯƠNG PHÁP");

const chainingResult = calculateTotalRevenue(orders);

const optimizedResult = calculateTotalRevenueOptimized(orders);

runTest(
  "Kết quả hai phương pháp phải giống nhau",
  chainingResult,
  optimizedResult,
);

// ==================================================
// PHẦN 6: TỔNG KẾT KIỂM THỬ
// ==================================================

console.log("\n======================================");
console.log("          KẾT THÚC BÁO CÁO");
console.log("======================================");

console.log("Tổng doanh thu:", totalRevenue);
console.log("Số đơn hàng ban đầu:", orders.length);

console.log("======================================");
