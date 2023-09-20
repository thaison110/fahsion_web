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
        const message = { userId: user._id };
        res.json({ user: message });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});
