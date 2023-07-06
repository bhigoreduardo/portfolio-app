import express from "express";
import { validate } from "express-validation";

import * as authValidation from "../../../middlewares/auth.validation.js";
import * as storeMiddleware from "../../../middlewares/store.middleware.js";
import * as storeController from "../../../controllers/store.controller.js";

const router = express.Router();
const use = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

router.put(
  "/:id",
  use(authValidation.userAuth),
  use(authValidation.storeAuth),
  validate(storeMiddleware.update),
  use(storeController.update)
);
router.put(
  "/:id/change-password",
  use(authValidation.userAuth),
  use(authValidation.storeAuth),
  validate(storeMiddleware.changePassword),
  use(storeController.changePassword)
);

export default router;
