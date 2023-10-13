// models/Product.js

const mongoose = require("mongoose");

const datasetSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    name: { type: String, required: true },
    url: { type: String, default: "" },
    size: { type: String, default: "" },
    price: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    type: { type: String, default: "" },
    dateCreate: { type: Date, default: Date.now },
    dateUpdate: { type: Date, default: Date.now },
    // isPublic: { type: Boolean, default: false },
    // shareCode: { type: String, default: null }, // Add the shareCode attribute
    // Other dataset attributes (if any)
});

const Product = mongoose.model("Product", datasetSchema);

module.exports = Product;
