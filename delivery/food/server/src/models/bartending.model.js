import mongoose from "mongoose";

import { paymentEnum } from "./store.model.js";
import { orderEnum, paymentStatusEnum } from "./order.model.js";

const BartendingSchema = mongoose.Schema(
  {
    store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: [true, "Loja é obrigatória"] },
    name: { type: String, required: [true, "Nome da mesa é obrigatório"] },
    cart: {
      type: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: [true, "Produto é obrigatório"] },
        quantity: { type: Number, default: 1 },
        price: { type: Number, required: [true, "Valor unitário é obrigatório"] },
      }],
      _id: false,
    },
    payment: {
      type: {
        method: { type: String, enum: paymentEnum, required: [true, "Método pagamento é obrigatório"] },
        amount: { type: Number, required: [true, "Total da mesa é obrigatório"] },
        status: { type: String, enum: paymentStatusEnum, required: [true, "Status do pagamento é obrigatório"], default: paymentStatusEnum.Pending },
      },
      _id: false,
    },
    status: [{
      type: { type: String, enum: orderEnum, required: [true, "Status da mesa é obrigatório"] },
      dateTime: { type: Date, default: Date.now() },
      _id: false,
    }],
    payload: Object,
  },
  { timestamps: true }
);

export default mongoose.model("Bartending", BartendingSchema);
