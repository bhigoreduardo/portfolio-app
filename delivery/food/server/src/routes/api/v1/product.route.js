import express from "express";
import { validate } from "express-validation";

import * as authValidation from "../../../middlewares/auth.validation.js";
import * as productMiddleware from "../../../middlewares/product.middleware.js";
import * as productController from "../../../controllers/product.controller.js";
import upload from "../../../config/multer.js";

const router = express.Router();
const use = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

router.post(
  "/",
  use(authValidation.userAuth),
  use(authValidation.storeAuth),
  upload.single("file"),
  validate(productMiddleware.save),
  use(productController.save)
);
router.put(
  "/:id",
  use(authValidation.userAuth),
  use(authValidation.storeAuth),
  validate(productMiddleware.update),
  use(productController.update)
);
router.put(
  "/:id/image",
  use(authValidation.userAuth),
  use(authValidation.storeAuth),
  validate(productMiddleware.updateImage),
  use(productController.updateImage)
);
router.delete(
  "/:id",
  use(authValidation.userAuth),
  use(authValidation.storeAuth),
  validate(productMiddleware.remove),
  use(productController.remove)
);
router.get("/search", use(productController.search));
router.get("/:id", use(productController.findOne));

export default router;
