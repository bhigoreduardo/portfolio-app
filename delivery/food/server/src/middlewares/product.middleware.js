import { Joi } from "express-validation";

export const save = {
  body: Joi.object({
    store: Joi.string().alphanum().length(24).required(),
    category: Joi.string().alphanum().length(24).required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    promotion: Joi.number().optional(),
    image: Joi.string().required(),
    status: Joi.bool().required(),
  }),
};

export const update = {
  params: Joi.object({
    id: Joi.string().alphanum().length(24).required(),
  }),
  body: Joi.object({
    store: Joi.string().alphanum().length(24).required(),
    category: Joi.string().alphanum().length(24).required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    promotion: Joi.number().optional(),
    status: Joi.bool().required(),
  }),
};

export const updateImage = {
  params: Joi.object({
    id: Joi.string().alphanum().length(24).required(),
  }),
  body: Joi.object({
    store: Joi.string().alphanum().length(24).required(),
    image: Joi.string().required(),
  }),
};

export const remove = {
  params: Joi.object({
    id: Joi.string().alphanum().length(24).required(),
  }),
};

