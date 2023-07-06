import slugify from "slugify";

import Product from "../models/product.model.js";
import Category from "../models/category.model.js";
import Customer from "../models/customer.model.js";

export const save = async (req, res) => {
  const { store, name, ...restBody } = req.body;
  if (store !== req.userId) throw new Error("Erro de autenticação");

  const created = await Product.create({
    compositeKey: {
      store: store,
      name: name,
      slug: slugify(name).toLowerCase(),
    },
    ...restBody,
  });
  await Category.findOneAndUpdate(
    { _id: req.body.category, store },
    { $push: { products: created._id } }
  );
  return res.status(201).json(created);
};

export const update = async (req, res) => {
  const { store, name, ...restBody } = req.body;
  if (store !== req.userId) throw new Error("Erro de autenticação");

  const updated = await Product.findOneAndUpdate(
    { _id: req.params.id, "compositeKey.store": req.userId },
    {
      compositeKey: {
        store: store,
        name: name,
        slug: slugify(name).toLowerCase(),
      },
      ...restBody,
    },
    { new: true }
  );
  return res.status(200).json(updated);
};

export const updateImage = async (req, res) => {
  if (req.body.store !== req.userId) throw new Error("Erro de autenticação");

  const query = { _id: req.params.id, "compositeKey.store": req.userId };
  const finded = await Product.findOne(query).select("image");
  // remove old image

  const updated = await Product.findOneAndUpdate(
    query,
    { image: req.body.image },
    { new: true }
  );
  return res.status(200).json(updated);
};

export const remove = async (req, res) => {
  if (req.body.store !== req.userId) throw new Error("Erro de autenticação");

  const query = { _id: req.params.id, "compositeKey.store": req.userId };
  const finded = await Product.findOne(query).select("_id image category");
  // remove old image
  const findedCategory = await Category.findOne({
    _id: finded.category,
    "compositeKey.store": req.userId,
  });
  findedCategory.products = findedCategory.products.filter(
    (item) => item.toString() !== finded._id.toString()
  );
  await findedCategory.save();

  await Product.findOneAndDelete(query);
  return res.sendStatus(204);
};

export const findOne = async (req, res) => {
  const finded = await Product.findById(req.params.id).populate({
    path: "category",
    select: "_id compositeKey.name",
  });
  finded.reviews = await Promise.all(
    finded?.reviews.map(async (item) => {
      item.postedBy = await Customer.findById(item.postedBy).select("name");
      return item;
    })
  );
  return res.status(200).json(finded);
};

export const search = async (req, res) => {
  const query = req.query;
  const filter = {
    "compositeKey.store": query.store,
    ...(query.category && {
      category: query.category,
    }),
    ...((query.min || query.max) && {
      $or: [
        {
          price: {
            ...(query.min && { $gt: query.min }),
            ...(query.max && { $lt: query.max }),
          },
        },
        {
          promotion: {
            ...(query.min && { $gt: query.min }),
            ...(query.max && { $lt: query.max }),
          },
        },
      ],
    }),
    ...(query.search && {
      $or: [
        { "compositeKey.name": { $regex: query.search, $options: "i" } },
        { description: { $regex: query.search, $options: "i" } },
      ],
    }),
  };

  const allFinded = await Product.find(filter).sort({ [query.sort]: -1 });
  return res.status(200).json(allFinded);
};
