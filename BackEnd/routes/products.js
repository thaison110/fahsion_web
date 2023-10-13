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
        var products;
        if (userId) {
            products = await Product.find({ userId: userId });
        } else {
            products = await Product.find();
        }

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
        const { name, userId, url, size, price, discount, type } = req.body;

        // Create a new product
        const newDataset = new Product({
            name,
            userId,
            url,
            size,
            price,
            discount,
            type,
            dateCreate: Date.now(),
            dateUpdate: Date.now(),
        });
        await newDataset.save();
        const productId = newDataset._id;
        console.log(productId);

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
        const productId = req.params.id;
        // // Find the product by ID and check if the owner is the logged-in user
        const product = await Product.findOne({
            _id: productId,
        });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(product);
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
router.delete("/api/products/:id/:idUser", async (req, res) => {
    try {
        const productId = req.params.id;
        const userId = req.params.idUser;

        // Kiểm tra xem sản phẩm tồn tại và thuộc về người dùng có idUser hay không
        const product = await Product.findOne({
            _id: productId,
            userId: userId,
        });
        console.log(product);

        if (!product) {
            return res.status(404).json({
                error: "Sản phẩm không tồn tại hoặc không thuộc về người dùng.",
            });
        }

        // Xóa sản phẩm
        await Product.findByIdAndRemove(productId);

        res.json({ message: "Sản phẩm đã được xóa thành công." });
    } catch (error) {
        res.status(500).json({ error: "Không thể xóa sản phẩm." });
    }
});
module.exports = router;
