import Bartending from "../models/bartending.model.js";
import Product from "../models/product.model.js";
import { orderEnum, paymentStatusEnum } from "../models/order.model.js";

export const save = async (req, res) => {
  if (req.body.store !== req.userId) throw new Error("Erro de autenticação");

  const bartending = await Bartending.create({
    store: req.userId,
    name: req.body.name,
    status: [{ type: orderEnum.Open }],
    payload: { ...(req.body.payload && req.body.payload) }
  });
  return res.status(201).json(bartending);
}

export const updateCart = async (req, res) => {
  if (req.body.store !== req.userId) throw new Error("Erro de autenticação");

  const storeCart = await Promise.all(req.body.cart.map(async (item) => {
    const product = await Product.findOne({ _id: item.product, store: req.userId });
    return {
      product: item.product,
      quantity: item.quantity,
      price: product.promotion || product.price
    }
  }));
  const updated = await Bartending.findOneAndUpdate(
    { _id: req.params.id, store: req.userId },
    { cart: storeCart },
  );
  return res.status(200).json(updated);
}

export const updatePayment = async (req, res) => {
  if (req.body.store !== req.userId) throw new Error("Erro de autenticação");

  const query = { _id: req.params.id, store: req.userId };
  const { cart } = await Bartending.findOne(query).select("cart -_id");

  const payment = {
    method: req.body.payment,
    amount: cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0),
    status: paymentStatusEnum.Paid,
  }
  const updated = await Bartending.findOneAndUpdate(
    query,
    {
      payment,
      $push: { status: { type: orderEnum.Closed } }
    }
  )
  return res.status(200).json(updated);
}