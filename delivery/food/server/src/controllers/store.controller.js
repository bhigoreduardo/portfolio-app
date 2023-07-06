import Store from "../models/store.model.js";

export const update = async (req, res) => {
  if (req.params.id !== req.userId) throw new Error("Erro de autenticação");

  const updated = await Store.findByIdAndUpdate(req.userId, { ...req.body });
  return res.status(200).json(updated.sendAuth());
};

export const changePassword = async (req, res) => {
  if (req.params.id !== req.userId) throw new Error("Erro de autenticação");

  const finded = await Store.findById(req.userId);
  if (!finded) throw new Error("Administrador não cadastrado");
  if (!finded.validatePassword(req.body.currentPassword)) throw new Error("Senha inválida");

  finded.setPassword(req.body.newPassword);
  await finded.save();
  return res.status(200).json(finded.sendAuth());
}