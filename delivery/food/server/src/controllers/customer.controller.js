import Customer from "../models/customer.model.js";

export const update = async (req, res) => {
  const { store, ...restBody } = req.body;
  if (req.params.id !== req.userId) throw new Error("Erro de autenticação");

  const updated = await Customer.findOneAndUpdate(
    { _id: req.userId, "compositeKey.store": store },
    { ...restBody }
  );
  return res.status(200).json(updated.sendAuth());
};

export const changePassword = async (req, res) => {
  if (req.params.id !== req.userId) throw new Error("Erro de autenticação");

  const finded = await Customer.findOne({ _id: req.userId, "compositeKey.store": req.body.store });
  if (!finded) throw new Error("Cliente não cadastrado");
  if (!finded.validatePassword(req.body.currentPassword))
    throw new Error("Senha inválida");

  finded.setPassword(req.body.newPassword);
  await finded.save();
  return res.status(200).json(finded.sendAuth());
};
