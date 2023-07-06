import express from "express";
import { validate } from "express-validation";

import * as authValidation from "../../../middlewares/auth.validation.js";
import * as customerMiddleware from "../../../middlewares/customer.middleware.js";
import * as customerController from "../../../controllers/customer.controller.js";

const router = express.Router();
const use = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

router.put(
  "/:id",
  use(authValidation.userAuth),
  validate(customerMiddleware.update),
  use(customerController.update)
);
router.put(
  "/:id/change-password",
  use(authValidation.userAuth),
  validate(customerMiddleware.changePassword),
  use(customerController.changePassword)
);

export default router;
