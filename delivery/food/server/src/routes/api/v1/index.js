import express from "express";

import auth from "./auth.route.js";
import store from "./store.route.js";
import customer from "./customer.route.js";
import category from "./category.route.js";
import product from "./product.route.js";
import order from "./order.route.js";
import bartending from "./bartending.route.js";

const router = express.Router();

router.use("/auth", auth);
router.use("/stores", store);
router.use("/customers", customer);
router.use("/categories", category);
router.use("/products", product);
router.use("/orders", order);
router.use("/bartendings", bartending);

export default router;
