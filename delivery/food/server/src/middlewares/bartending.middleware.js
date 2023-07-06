import { Joi } from "express-validation";

export const save = {
  body: Joi.object({
    store: Joi.string().alphanum().length(24).required(),
    name: Joi.string().required(),
    payload: Joi.string().optional(),
  }),
};

export const updateCart = {
  params: Joi.object({
    id: Joi.string().alphanum().length(24).required(),
  }),
  body: Joi.object({
    store: Joi.string().alphanum().length(24).required(),
    cart: Joi.array().items(Joi.object({
      product: Joi.string().alphanum().length(24).required(),
      quantity: Joi.number().required(),
    })).required(),
  }),
}

export const updatePayment = {
  params: Joi.object({
    id: Joi.string().alphanum().length(24).required(),
  }),
  body: Joi.object({
    store: Joi.string().alphanum().length(24).required(),
    payment: Joi.string().required(),
  }),
}