import Order, { orderEnum, paymentStatusEnum } from "../models/order.model.js";
import Store from "../models/store.model.js";
import Product from "../models/product.model.js";

export const save = async (req, res) => {
  const { cart, shipping } = req.body;
  
  const store = await Store.findById(req.body.store);
  const storeCart = await Promise.all(cart.map(async (item) => {
    const product = await Product.findOne({ _id: item.product, store: store._id });
    return {
      product: item.product,
      quantity: item.quantity,
      price: product.promotion || product.price
    }
  }));
  const amountCart = storeCart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  const storeShipping = store?.settings?.shipping
    .find((item) => item.method === shipping.method && item.neighborhood === shipping.neighborhood);
  const payment = {
    ...req.body.payment,
    amount: amountCart + storeShipping.price,
  }

  const order = await Order.create({
    store: store._id,
    customer: req.body.customer,
    cart: storeCart,
    shipping: storeShipping,
    payment,
    status: [{ type: orderEnum.Pending }],
    payload: { ...(req.body.payload && req.body.payload) }
  });
  return res.status(201).json(order);
}

export const customerFindAll = async (req, res) => {
  const allFinded = await Order.find({ store: req.query.store, customer: req.userId })
    .populate({ path: "customer", select: "name mobile address" });

  await Promise.all(allFinded.map(async (item) => {
    item.cart = await Promise.all(item.cart.map(async (value) => {
      value.product = await Product.findOne({ _id: value.product, store: req.query.store })
        .select("_id compositeKey image");
      return value;
    }));

    return item;
  }));
  return res.status(200).json(allFinded);
}

export const customerFindOne = async (req, res) => {
  const finded = await Order.findOne({ store: req.query.store, customer: req.userId })
    .populate({ path: "customer", select: "name mobile address" });

  await Promise.all(finded.cart.map(async (item) => {
    item.product = await Product.findOne({ _id: item.product, store: req.query.store })
      .select("_id compositeKey image");
    return item;
  }));
  return res.status(200).json(finded);
}

export const updateStatus = async (req, res) => {
  if (req.body.store !== req.userId) throw new Error("Erro de autenticação");

  const updated = await Order.findOneAndUpdate(
    { _id: req.params.id, store: req.userId },
    { $push: { status: { type: req.body.status } } },
  );
  return res.status(200).json(updated);
}

export const updatePayment = async (req, res) => {
  if (req.body.store !== req.userId) throw new Error("Erro de autenticação");

  const updated = await Order.findOneAndUpdate(
    { _id: req.params.id, store: req.userId },
    {
      "payment.status": paymentStatusEnum.Paid,
      $push: { status: { type: orderEnum.Delivered } }
    },
  );
  return res.status(200).json(updated);
}

export const storeFindAll = async (req, res) => {
  const allFinded = await Order.find({ store: req.userId })
    .populate({ path: "customer", select: "_id name address mobile" });

  await Promise.all(allFinded.map(async (item) => {
    item.cart = await Promise.all(item.cart.map(async (value) => {
      value.product = await Product.findOne({ _id: value.product, store: req.userId })
        .select("_id compositeKey image");
      return value;
    }));

    return item;
  }));
  return res.status(200).json(allFinded);
}

export const storeFindOne = async (req, res) => {
  const finded = await Order.findOne({ _id: req.params.id, store: req.userId });

  await Promise.all(finded.cart.map(async (item) => {
    item.product = await Product.findOne({ _id: item.product, store: req.userId })
      .select("_id compositeKey image");
    return item;
  }));
  return res.status(200).json(finded);
}

export const remove = async (req, res) => {
  if (req.body.store !== req.userId) throw new Error("Erro de autenticação");

  const deleted = await Order.findOneAndUpdate(
    { _id: req.params.id, store: req.userId },
    { $push: { status: { type: orderEnum.Canceled } } },
  )
  return res.status(200).json(deleted);
}

export const storeSearch = async (req, res) => {}