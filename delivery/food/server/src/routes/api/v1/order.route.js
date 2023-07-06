import express from "express";
import { validate } from "express-validation";

import * as authValidation from "../../../middlewares/auth.validation.js";
import * as orderMiddleware from "../../../middlewares/order.middleware.js";
import * as orderController from "../../../controllers/order.controller.js";

const router = express.Router();
const use = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

router.post(
  "/",
  use(authValidation.userAuth),
  validate(orderMiddleware.save),
  use(orderController.save)
);
router.get(
  "/customer",
  use(authValidation.userAuth),
  use(orderController.customerFindAll)
);
router.get(
  "/:id/customer",
  use(authValidation.userAuth),
  use(orderController.customerFindOne)
);
router.patch(
  "/:id/store-status",
  use(authValidation.userAuth),
  use(authValidation.storeAuth),
  validate(orderMiddleware.updateStatus),
  use(orderController.updateStatus)
);
router.patch(
  "/:id/store-payment",
  use(authValidation.userAuth),
  use(authValidation.storeAuth),
  validate(orderMiddleware.updatePayment),
  use(orderController.updatePayment)
);
router.get(
  "/store",
  use(authValidation.userAuth),
  use(authValidation.storeAuth),
  use(orderController.storeFindAll)
);
router.get(
  "/:id/store",
  use(authValidation.userAuth),
  use(authValidation.storeAuth),
  use(orderController.storeFindOne)
);
router.delete(
  "/:id/cancelled",
  use(authValidation.userAuth),
  use(authValidation.storeAuth),
  validate(orderMiddleware.remove),
  use(orderController.remove)
);

export default router;
