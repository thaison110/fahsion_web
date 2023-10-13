const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// Tạo đơn hàng mới
router.post("/", async (req, res) => {
    try {
        console.log(req.body);
        const order = new Order(req.body);
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: "Không thể tạo đơn hàng." });
    }
});

// Lấy danh sách đơn hàng
router.get("/", async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: "Không thể lấy danh sách đơn hàng." });
    }
});

// Lấy chi tiết đơn hàng bằng ID
router.get("/:id", async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            res.status(404).json({ error: "Không tìm thấy đơn hàng." });
            return;
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: "Không thể lấy thông tin đơn hàng." });
    }
});

// Get all old orders by user ID
router.get("/user/:id_user", async (req, res) => {
    const id_user = req.params.id_user;

    try {
        // Query the database to find orders with the specified user ID
        const oldOrders = await Order.find({ user_id: id_user });
        res.json(oldOrders);
    } catch (error) {
        res.status(500).json({ error: "Unable to fetch old orders." });
    }
});

// Cập nhật đơn hàng bằng ID
router.put("/:id", async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!order) {
            res.status(404).json({ error: "Không tìm thấy đơn hàng." });
            return;
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: "Không thể cập nhật đơn hàng." });
    }
});

// Xoá đơn hàng bằng ID
router.delete("/:id", async (req, res) => {
    try {
        const order = await Order.findByIdAndRemove(req.params.id);
        if (!order) {
            res.status(404).json({ error: "Không tìm thấy đơn hàng." });
            return;
        }
        res.json({ message: "Đã xoá đơn hàng thành công." });
    } catch (error) {
        res.status(500).json({ error: "Không thể xoá đơn hàng." });
    }
});

module.exports = router;
