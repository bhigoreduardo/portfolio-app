import express from "express";
import { validate } from "express-validation";

import * as authValidation from "../../../middlewares/auth.validation.js";
import * as categoryMiddleware from "../../../middlewares/category.middleware.js";
import * as categoryController from "../../../controllers/category.controller.js";

const router = express.Router();
const use = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

router.post(
  "/",
  use(authValidation.userAuth),
  use(authValidation.storeAuth),
  validate(categoryMiddleware.save),
  use(categoryController.save)
);
router.put(
  "/:id",
  use(authValidation.userAuth),
  use(authValidation.storeAuth),
  validate(categoryMiddleware.update),
  use(categoryController.update)
);
router.delete(
  "/:id",
  use(authValidation.userAuth),
  use(authValidation.storeAuth),
  validate(categoryMiddleware.remove),
  use(categoryController.remove)
);
router.get("/", use(categoryController.findAll));
router.get("/:id", use(categoryController.findOne));

export default router;
