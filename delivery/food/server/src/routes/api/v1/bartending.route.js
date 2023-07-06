import express from "express";
import { validate } from "express-validation";

import * as authValidation from "../../../middlewares/auth.validation.js";
import * as bartendingMiddleware from "../../../middlewares/bartending.middleware.js";
import * as bartendingController from "../../../controllers/bartending.controller.js";

const router = express.Router();
const use = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

router.post(
  "/",
  use(authValidation.userAuth),
  use(authValidation.storeAuth),
  validate(bartendingMiddleware.save),
  use(bartendingController.save)
);
router.patch(
  "/:id/cart",
  use(authValidation.userAuth),
  use(authValidation.storeAuth),
  validate(bartendingMiddleware.updateCart),
  use(bartendingController.updateCart)
);
router.patch(
  "/:id/payment",
  use(authValidation.userAuth),
  use(authValidation.storeAuth),
  validate(bartendingMiddleware.updatePayment),
  use(bartendingController.updatePayment)
);

export default router;
