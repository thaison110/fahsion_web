const mongoose = require("mongoose");

// Định nghĩa mô hình Payment
const paymentSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }, // Tham chiếu đến mô hình User
    order_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }], // Tham chiếu đến các đơn hàng
    user_name: { type: String, default: "user" },
    phone: { type: String, default: "0123456789" },
    address: { type: String, default: "HN" },
    email: { type: String, default: "example@gmail.com" },
    payment_date: { type: Date, default: Date.now },
    payment_method: { type: String, default: "COD" },
    status: { type: String, default: "Đang xử lý" },
    payment_total: { type: Number, required: true },
});

// Tạo mô hình Payment từ schema
const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
