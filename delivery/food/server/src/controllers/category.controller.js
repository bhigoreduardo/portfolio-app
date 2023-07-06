import slugify from "slugify";

import Category from "../models/category.model.js";
import Product from "../models/product.model.js";

export const save = async (req, res) => {
  if (req.body.store !== req.userId) throw new Error("Erro de autenticação");

  const created = await Category.create({
    compositeKey: {
      store: req.userId,
      name: req.body.name,
      slug: slugify(req.body.name).toLowerCase(),
    },
    status: req.body.status,
  });
  return res.status(201).json(created);
};

export const update = async (req, res) => {
  if (req.body.store !== req.userId) throw new Error("Erro de autenticação");

  const updated = await Category.findOneAndUpdate(
    { _id: req.params.id, "compositeKey.store": req.userId },
    {
      compositeKey: {
        slug: req.body.name,
        slug: slugify(req.body.name).toLowerCase(),
      },
      status: req.body.status,
    },
    { new: true }
  );
  return res.status(200).json(updated);
};

export const remove = async (req, res) => {
  if (req.body.store !== req.userId) throw new Error("Erro de autenticação");

  const query = { _id: req.params.id, "compositeKey.store": req.userId };
  const findedAllProducts = await Product.find({
    "compositeKey.store": req.userId,
    category: req.params.id,
  }).select("_id image");
  await Promise.all(
    findedAllProducts.map(async (item) => {
      // remove old image
      await Product.findOneAndRemove({
        _id: item._id,
        "compositeKey.store": req.userId,
      });
    })
  );

  await Category.findOneAndRemove(query);
  res.sendStatus(204);
};

export const findOne = async (req, res) => {
  const finded = await Category.findById(req.params.id).populate({
    path: "products",
    select: "_id compositeKey description price promotion image reviewsAvg",
  });
  return res.status(200).json(finded);
};

export const findAll = async (req, res) => {
  const allFinded = await Category.find({}).populate({
    path: "products",
    select: "_id compositeKey description price promotion image reviewsAvg",
  });
  return res.status(200).json(allFinded);
};
