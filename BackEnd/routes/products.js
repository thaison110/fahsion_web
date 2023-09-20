const express = require("express");
// const authMiddleware = require("../middleware/auth");
const Product = require("../models/Product");

const router = express.Router();

// Middleware to protect routes (require authentication)
// router.use(authMiddleware);

// Get all products for the logged-in user
router.get("/api/product", async (req, res) => {
    try {
        const userId = req.query.userId;
        const products = await Product.find({ userId: userId });

        res.status(200).json([...products]);
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving products",
            error: error.message,
        });
    }
});

// Add new product
router.post("/api/product", async (req, res) => {
    try {
        const {
            name,
            userId,
            description,
            urlImage,
            caption,
            dateCreate,
            dateUpdate,
            isPublic,
            shareCode,
        } = req.body;

        // Create a new product
        const newDataset = new Product({
            name,
            userId,
            description,
            urlImage,
            caption,
            dateCreate,
            dateUpdate,
            isPublic,
            shareCode,
        });
        await newDataset.save();
        const productId = newDataset._id;

        res.status(201).json({
            message: "Product created successfully",
            productId,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating product",
            error: error.message,
        });
    }
});
// get product id
router.get("/api/product:id", async (req, res) => {
    try {
        const userId = req.query.userId;
        const productId = req.params.id;
        // // Find the product by ID and check if the owner is the logged-in user
        const product = await Product.findOne({
            _id: productId,
        });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        if (product.userId === userId || product.isPublic)
            console.log("Được phép truy cập");

        res.status(200).json({
            message: "Truy cập product " + productId + " thành công",
            // product,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error get product",
            error: error.message,
        });
    }
});

// Edit product
router.put("/api/product:id", async (req, res) => {
    try {
        const productId = req.params.id;
        const { name, isPrivate, description, urlImage, caption } = req.body;

        // Find the product by ID and check if the owner is the logged-in user
        const product = await Product.findOne({
            _id: productId,
            owner: req.user.userId,
        });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Update the product
        product.name = name;
        product.isPrivate = isPrivate;
        product.description = description;
        product.urlImage = urlImage;
        product.caption = caption;
        await product.save();

        res.status(200).json({
            message: "Product updated successfully",
            product,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating product",
            error: error.message,
        });
    }
});

// Delete product
router.delete("/api/product:id", async (req, res) => {
    try {
        const productId = req.params.id;

        // Find the product by ID and check if the owner is the logged-in user
        const product = await Product.findOne({
            _id: productId,
            owner: req.user.userId,
        });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Delete the product
        await product.remove();

        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting product",
            error: error.message,
        });
    }
});

module.exports = router;
