import mongoose from "mongoose";

import { paymentEnum, shippingEnum } from "./store.model.js";

export const paymentStatusEnum = {
  Pending: "pending",
  Paid: "paid",
}

export const orderEnum = {
  Pending: "pending",
  Accept: "accept",
  Canceled: "canceled",
  Delivery: "delivery",
  Delivered: "delivered",
  Open: "Open",
  Closed: "closed",
}

const OrderSchema = mongoose.Schema(
  {
    store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: [true, "Loja é obrigatória"] },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: [true, "Cliente é obrigatório"] },
    cart: {
      type: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: [true, "Produto é obrigatório"] },
        quantity: { type: Number, default: 1 },
        price: { type: Number, required: [true, "Valor unitário é obrigatório"] },
      }],
      required: true, _id: false,
    },
    shipping: {
      type: {
        method: { type: String, enum: shippingEnum, required: [true, "Método de entrega é obrigatório"] },
        neighborhood: String,
        price: { type: Number, required: [true, "Valor da entrega é obrigatório"] },
        deadlineAt:  Number,
      },
      required: true, _id: false,
    },
    payment: {
      type: {
        method: { type: String, enum: paymentEnum, required: [true, "Método pagamento é obrigatório"] },
        amount: { type: Number, required: [true, "Total pedido é obrigatório"] },
        moneyChange: { type: Number },
        status: { type: String, enum: paymentStatusEnum, required: [true, "Status do pagamento é obrigatório"], default: paymentStatusEnum.Pending },
      },
      required: true, _id: false,
    },
    status: [{
      type: { type: String, enum: orderEnum, required: [true, "Status do pedido é obrigatório"] },
      dateTime: { type: Date, default: Date.now() },
      _id: false,
    }],
    payload: Object,
  },
  { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);
