import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import crypto from "crypto";

export const paymentEnum = {
  CreditCard: "credit-card",
  Pix: "pix",
  Cash: "cash",
  BankTransfer: "bank-transfer",
};

export const shippingEnum = {
  PickUpOnStore: "pick-up-on-store",
  Delivery: "delivery",
}

const StoreSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Nome é obrigatório"] },
    email: { type: String, required: [true, "Email é obrigatório"], match: [/\S+@\S+\.\S+/, "Informe email válido"], lowercase: true, unique: true, },
    cnpj: { type: String, required: [true, "CNPJ é obrigatório"], unique: true, },
    mobile: { type: String, required: [true, "Celular é obrigatório"], unique: true, },
    address: {
      type: {
        street: { type: String, required: [true, "Rua é obrigatório"] },
        neighborhood: { type: String, required: [true, "Bairro é obrigatório"], },
        city: { type: String, required: [true, "Cidade é obrigatório"] },
        state: { type: String, required: [true, "Estado é obrigatório"] },
        number: { type: String },
        zipCode: { type: String, required: [true, "CEP é obrigatório"] },
        complement: { type: String },
      },
      required: [true, "Endereço é obrigatório"],
      _id: false,
    },
    settings: {
      type: {
        payment: {
          type: [{ type: String, enum: paymentEnum }],
          required: [true, "Métodos pagamento é obrigatório"],
        },
        opening: { type: Boolean, default: false },
        shipping: {
          type: [{
            method: { type: String, enum: shippingEnum, required: [true, "Método de entrega é obrigatório"] },
            neighborhood: String,
            price: { type: Number, default: 0 },
            deadlineAt: Number,
            _id: false,
          }],
          required: [true, "Métodos de entrega é obrigatório"],
        },
      },
      required: [true, "Configuração da loja é obrigatório"],
      _id: false,
    },
    terms: { type: Boolean, required: [true, "Termos é obrigatório"] },
    status: { type: Boolean, default: false },
    password: {
      type: {
        salt: { type: String },
        hash: { type: String },
      },
      default: {},
      required: [true, "Senha é obrigatório"],
      _id: false,
    },
    recoveryPassword: {
      type: {
        passwordResetToken: String,
        passwordResetExpires: Date,
        passwordChangedAt: Date,
      },
      _id: false,
    },
  },
  { timestamps: true }
);

StoreSchema.methods.setPassword = async function (password) {
  this.password.salt = crypto.randomBytes(16).toString('hex');
  this.password.hash = crypto.pbkdf2Sync(password, this.password.salt, 10000, 512, 'sha512').toString('hex');
};
StoreSchema.methods.validatePassword = function (password) {
  const hash = crypto.pbkdf2Sync(password, this.password.salt, 10000, 512, "sha512").toString("hex");
  return hash === this.password.hash;
};
StoreSchema.methods.generateToken = function () {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 15); // 15 days

  return jwt.sign(
    {
      id: this._id,
      exp: parseFloat(exp.getTime() / 1000, 10),
    },
    process.env.SERVER_JWT_SECRET
  );
};
StoreSchema.methods.sendAuth = function () {
  return {
    user: {
      _id: this._id,
      name: this.name,
      email: this.email,
      cnpj: this.cnpj,
      mobile: this.mobile,
      address: this.address,
      settings: this.settings,
    },
    token: this.generateToken(),
  };
};
StoreSchema.methods.generateRecoveryPassword = function () {
  const resetToken = crypto.randomBytes(16).toString("hex");

  this.recoveryPassword.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.recoveryPassword.passwordResetExpires = Date.now() + 30 * 60 * 1000; // 10 minutes
  return resetToken;
};
StoreSchema.methods.clearRecoveryPassword = function () {
  this.recoveryPassword = {
    passwordResetToken: undefined,
    passwordResetExpires: undefined,
    passwordChangedAt: Date.now(),
  };
  return this.recoveryPassword;
};

export default mongoose.model("Store", StoreSchema);
