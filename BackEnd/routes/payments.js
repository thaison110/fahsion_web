const express = require("express");
const router = express.Router();
const Payment = require("../models/Payment");

// Tạo bill mới
router.post("/", async (req, res) => {
    try {
        console.log(req.body);
        const bill = new Payment(req.body);
        await bill.save();
        res.status(201).json(bill);
    } catch (error) {
        res.status(500).json({ error: "Không thể tạo đơn hàng." });
    }
});

// // Lấy danh sách đơn hàng
// router.get("/", async (req, res) => {
//     try {
//         const bills = await bill.find();
//         res.json(bills);
//     } catch (error) {
//         res.status(500).json({ error: "Không thể lấy danh sách đơn hàng." });
//     }
// });

// // Lấy chi tiết đơn hàng bằng ID
// router.get("/:id", async (req, res) => {
//     try {
//         const bill = await bill.findById(req.params.id);
//         if (!bill) {
//             res.status(404).json({ error: "Không tìm thấy đơn hàng." });
//             return;
//         }
//         res.json(bill);
//     } catch (error) {
//         res.status(500).json({ error: "Không thể lấy thông tin đơn hàng." });
//     }
// });

// // Get all old bills by user ID
// router.get("/user/:id_user", async (req, res) => {
//     const id_user = req.params.id_user;

//     try {
//         // Query the database to find bills with the specified user ID
//         const oldbills = await bill.find({ user_id: id_user });
//         res.json(oldbills);
//     } catch (error) {
//         res.status(500).json({ error: "Unable to fetch old bills." });
//     }
// });

// Cập nhật đơn hàng bằng ID
router.put("/:id", async (req, res) => {
    try {
        console.log(req.body, req.params.id);
        const bill = await Payment.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!bill) {
            res.status(404).json({ error: "Không tìm thấy đơn hàng." });
            return;
        }
        res.json(bill);
    } catch (error) {
        res.status(500).json({ error: "Không thể cập nhật đơn hàng." });
    }
});

// // Xoá đơn hàng bằng ID
// router.delete("/:id", async (req, res) => {
//     try {
//         const bill = await bill.findByIdAndRemove(req.params.id);
//         if (!bill) {
//             res.status(404).json({ error: "Không tìm thấy đơn hàng." });
//             return;
//         }
//         res.json({ message: "Đã xoá đơn hàng thành công." });
//     } catch (error) {
//         res.status(500).json({ error: "Không thể xoá đơn hàng." });
//     }
// });

module.exports = router;
