"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productController_1 = require("./../controllers/productController");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", productController_1.getProducts);
router.post("/", productController_1.createProduct);
exports.default = router;
