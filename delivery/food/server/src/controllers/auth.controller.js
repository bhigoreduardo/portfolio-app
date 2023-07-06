import crypto from "crypto";

import Customer from "../models/customer.model.js";
import Store from "../models/store.model.js";

export const customerSingUp = async (req, res) => {
  const { store, email } = req.body;
  const finded = await Customer.findOne({ compositeKey: { store, email } });
  if (finded) throw new Error("Cliente já cadastrado");

  const { password, ...restBody } = req.body;
  const created = new Customer({
    ...restBody,
    compositeKey: { store, email },
  });
  created.setPassword(password);
  await created.save();
  return res.status(201).json({ message: "Cadastrado realizado com sucesso" });
};

export const customerSingIn = async (req, res) => {
  const { store, email, password } = req.body;
  const finded = await Customer.findOne({ compositeKey: { store, email } });
  if (!finded) throw new Error("Cliente não cadastrado");

  if (!finded.validatePassword(password)) { throw new Error("Senha inválida"); }

  return res.status(200).json(finded.sendAuth());
};

export const customerForgotPassword = async (req, res) => {
  const { store, email } = req.body;
  const finded = await Customer.findOne({ compositeKey: { store, email } });
  if (!finded) throw new Error("Cliente não cadastrado");

  const passwordResetToken = finded.generateRecoveryPassword();
  await finded.save();
  console.log(passwordResetToken); // sendEmail
  return res.status(200).json({ message: "Email de recuperação enviado" });
};

export const customerResetPassword = async (req, res) => {
  const hashedToken = crypto
      .createHash("sha256")
      .update(req.body.token)
      .digest("hex");
  const finded = await Customer.findOne({
    "compositeKey.store": req.body.store,
    "recoveryPassword.passwordResetToken": hashedToken,
    "recoveryPassword.passwordResetExpires": { $gt: Date.now() },
   });
   if (!finded) throw new Error("Cliente não cadastrado");

   finded.setPassword(req.body.password);
   finded.clearRecoveryPassword();
   await finded.save();
   return res.status(200).json({ message: "Senha resetada com sucesso" });
};

export const storeSignUp = async (req, res) => {
  const { store, email, password } = req.body;
  const finded = await Store.findOne({ _id: store, email });
  if (!finded) throw new Error("Administrador não cadastrado");
  if (finded.status) throw new Error("Loja já cadastrada");

  finded.name = req.body.name;
  finded.cnpj = req.body.cnpj;
  finded.mobile = req.body.mobile;
  finded.address = req.body.address;
  finded.settings = req.body.settings;
  finded.terms = req.body.terms;
  finded.status = true;
  finded.setPassword(password);
  await finded.save();
  return res.status(201).json({ message: "Cadastro realizado com sucesso" });
};

export const storeSignIn = async (req, res) => {
  const { store, email, password } = req.body;
  const finded = await Store.findOne({ _id: store, email });
  if (!finded) throw new Error("Administrador não cadastrado");

  if (!finded.validatePassword(password)) throw new Error("Senha inválida");

  return res.status(200).json(finded.sendAuth());
};

export const storeForgotPassword = async (req, res) => {
  const { store, email } = req.body;
  const finded = await Store.findOne({ _id: store, email });
  if (!finded) throw new Error("Administrador não cadastrado");

  const passwordResetToken = finded.generateRecoveryPassword();
  await finded.save();
  console.log(passwordResetToken); // sendEmail
  return res.status(200).json({ message: "Email de recuperação enviado" });
};

export const storeResetPassword = async (req, res) => {
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.body.token)
    .digest("hex");
  const finded = await Store.findOne({
    _id: req.body.store,
    "recoveryPassword.passwordResetToken": hashedToken,
    "recoveryPassword.passwordResetExpires": { $gt: Date.now() },
  });
  if (!finded) throw new Error("Administrador não cadastrado");

  finded.setPassword(req.body.password);
  finded.clearRecoveryPassword();
  await finded.save();
  return res.status(200).json({ message: "Senha resetada com sucesso" });
}