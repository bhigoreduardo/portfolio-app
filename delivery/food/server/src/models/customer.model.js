import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const CustomerSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Nome é obrigatório"] },
    compositeKey: {
      type: {
        store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: [true, "Loja é obrigatória"] },
        email: {
          type: String,
          required: [true, "Email é obrigatório"],
          match: [/\S+@\S+\.\S+/, "Informe email válido"],
          lowercase: true,
        },
      },
      required: true, unique: true, _id: false
    },
    mobile: {
      type: String,
      required: [true, "Celular é obrigatório"],
      unique: true,
    },
    address: {
      type: {
        street: { type: String, required: [true, "Rua é obrigatório"] },
        neighborhood: {
          type: String,
          required: [true, "Bairro é obrigatório"],
        },
        city: { type: String, required: [true, "Cidade é obrigatório"] },
        state: { type: String, required: [true, "Estado é obrigatório"] },
        number: { type: String },
        zipCode: { type: Number, required: [true, "CEP é obrigatório"] },
      },
      required: [true, "Endereço é obrigatório"], _id: false
    },
    terms: { type: Boolean, required: [true, "Termos é obrigatório"] },
    status: { type: Boolean, default: true },
    password: {
      type: {
        salt: { type: String },
        hash: { type: String },
      },
      default: {},
      required: [true, "Senha é obrigatório"], _id: false,
    },
    recoveryPassword: {
      type: {
        passwordResetToken: String,
        passwordResetExpires: Date,
        passwordChangedAt: Date,
      },
      default: {},
      _id: false
    },
  },
  { timestamps: true }
);

CustomerSchema.methods.setPassword = async function (password) {
  this.password.salt = crypto.randomBytes(16).toString('hex');
  this.password.hash = crypto.pbkdf2Sync(password, this.password.salt, 10000, 512, 'sha512').toString('hex');
};
CustomerSchema.methods.validatePassword = function (password) {
  const hash = crypto.pbkdf2Sync(password, this.password.salt, 10000, 512, 'sha512').toString('hex');
  return hash === this.password.hash;
};
CustomerSchema.methods.generateToken = function () {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 15);

  return jwt.sign(
    {
      id: this._id,
      exp: parseFloat(exp.getTime() / 1000, 10),
    },
    process.env.SERVER_JWT_SECRET
  );
};
CustomerSchema.methods.sendAuth = function () {
  return {
    user: {
      _id: this._id,
      name: this.name,
      compositeKey: this.compositeKey,
      mobile: this.mobile,
      address: this.address,
    },
    token: this.generateToken(),
  };
};
CustomerSchema.methods.generateRecoveryPassword = function () {
  const resetToken = crypto.randomBytes(16).toString("hex");

  this.recoveryPassword.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.recoveryPassword.passwordResetExpires = Date.now() + 30 * 60 * 1000; // 10 minutes
  return resetToken;
};
CustomerSchema.methods.clearRecoveryPassword = function() {
  this.recoveryPassword = {
    passwordResetToken: undefined,
    passwordResetExpires: undefined,
    passwordChangedAt: Date.now(),
  };
  return this.recoveryPassword;
}

export default mongoose.model("Customer", CustomerSchema);
