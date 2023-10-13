const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const IP = require("ip");
const fs = require("fs");
// app.js or index.js
require("dotenv").config();
const router = require("./routes/auth");
const adminProduct = require("./routes/products");

const ipAddress = IP.address();

const app = express();
const PORT = process.env.PORT || 9999; // Choose any port number you prefer
const bcrypt = require("bcrypt");
const User = require("./models/User");
const Product = require("./models/Product");

app.use(express.json());
// // Middleware để cấu hình CORS
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// });
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const url =
    "mongodb+srv://tranxuancong2023:qUJomTP0jDdHmuNV@cluster0.sfcxjee.mongodb.net/ml?retryWrites=true&w=majority";

mongoose
    .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB", err);
        process.exit(1);
    });

app.use(express.static(path.join(__dirname, "client", "build")));

// Sử dụng router
app.use("/", router);
app.use("/", adminProduct);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.post("/api/register", async (req, res) => {
    try {
        console.log(req.body);
        const { email, password, userName, phone } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            email,
            password: hashedPassword,
            userName,
            phone,
            role: 0,
        });
        await user.save();
        res.status(201).json({ message: "Registration successful" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

app.post("/api/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            res.status(401).json({ error: "Invalid credentials" });
            return;
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ error: "Invalid credentials" });
            return;
        }
        const message = { id: user._id, name: user.userName, role: user.role };
        res.json({ user: message });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});
app.get("/api/users", async (req, res) => {
    try {
        const users = await User.find().sort({ role: -1 });
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

app.delete("/api/users/:id", async (req, res) => {
    try {
        await User.findByIdAndRemove(req.params.id);
        res.json({ message: "User deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});
// Cập nhật thông tin người dùng
app.put("/api/users/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({
            error: "Không thể cập nhật thông tin người dùng.",
        });
    }
});
const orderRouter = require("./routes/orders");
app.use("/api/orders", orderRouter); // Sử dụng router API cho đơn hàng

const paymentRouter = require("./routes/payments");
app.use("/api/payments", paymentRouter); // Sử dụng router API cho payment
