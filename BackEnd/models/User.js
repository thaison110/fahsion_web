// models/User.js
const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    // username: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    role: {
        type: Number,
        require: true,
    },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
