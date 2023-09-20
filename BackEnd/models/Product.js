// models/Product.js

const mongoose = require("mongoose");

const datasetSchema = new mongoose.Schema({
    name: { type: String, required: true },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    caption: { type: String, default: "" },
    urlImage: { type: String, default: "" },
    description: { type: String, default: "" },
    dateCreate: { type: String, default: "" },
    dateUpdate: { type: String, default: "" },
    isPublic: { type: Boolean, default: false },
    shareCode: { type: String, default: null }, // Add the shareCode attribute
    // Other dataset attributes (if any)
});

const Product = mongoose.model("Product", datasetSchema);

module.exports = Product;
