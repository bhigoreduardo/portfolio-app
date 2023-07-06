import express from "express";
import { validate } from "express-validation";

import * as authMiddleware from "../../../middlewares/auth.middleware.js";
import * as authController from "../../../controllers/auth.controller.js";

const router = express.Router();
const use = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

router.post(
  "/customer-sign-up",
  validate(authMiddleware.customerSinUp),
  use(authController.customerSingUp)
);
router.post(
  "/customer-sign-in",
  validate(authMiddleware.customerSignIn),
  use(authController.customerSingIn)
);
router.post(
  "/customer-forgot-password",
  validate(authMiddleware.customerForgotPassword),
  use(authController.customerForgotPassword)
);
router.post(
  "/customer-reset-password",
  validate(authMiddleware.customerResetPassword),
  use(authController.customerResetPassword)
);
router.post(
  "/store-sign-up",
  validate(authMiddleware.storeSinUp),
  use(authController.storeSignUp)
);
router.post(
  "/store-sign-in",
  validate(authMiddleware.storeSignIn),
  use(authController.storeSignIn)
);
router.post(
  "/store-forgot-password",
  validate(authMiddleware.storeForgotPassword),
  use(authController.storeForgotPassword)
);
router.post(
  "/store-reset-password",
  validate(authMiddleware.storeResetPassword),
  use(authController.storeResetPassword)
);

export default router;
