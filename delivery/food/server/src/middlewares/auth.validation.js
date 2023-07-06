import jwt from 'jsonwebtoken';

import Store from "../models/store.model.js";

export const userAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) throw new Error("Erro de autenticação");

  const parts = authHeader.split(" ");
  if (!parts.length === 2) throw new Error("Erro de autenticação");

  const [scheme, token] = parts;
  if (!/^DeliveryServer$/i.test(scheme)) throw new Error("Erro de autenticação");

  jwt.verify(token, process.env.SERVER_JWT_SECRET, (err, decoded) => {
    if (err) throw new Error("Erro de autenticação");

    req.userId = decoded.id;
    return next();
  });
}

export const storeAuth = async (req, res, next) => {
  if (!req.userId) throw new Error("Erro de autenticação");
  const store = await Store.findById(req.userId);
  if (!store) throw new Error("Erro de autenticação");

  next();
}