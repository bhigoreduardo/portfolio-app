import { Joi } from "express-validation";

export const save = {
  body: Joi.object({
    store: Joi.string().alphanum().length(24).required(),
    customer: Joi.string().alphanum().length(24).required(),
    cart: Joi.array().items(Joi.object({
      product: Joi.string().alphanum().length(24).required(),
      quantity: Joi.number().required(),
    })).required(),
    shipping: Joi.object({
      method: Joi.string().required(),
      neighborhood: Joi.string().required(),
    }).required(),
    payment: Joi.object({
      method: Joi.string().required(),
      moneyChange: Joi.number().optional(),
    }).required(),
    payload: Joi.string().optional(),
  }),
};

export const updateStatus = {
  params: Joi.object({
    id: Joi.string().alphanum().length(24).required(),
  }),
  body: Joi.object({
    store: Joi.string().alphanum().length(24).required(),
    status: Joi.string().required(),
  }),
}

export const updatePayment = {
  params: Joi.object({
    id: Joi.string().alphanum().length(24).required(),
  }),
  body: Joi.object({
    store: Joi.string().alphanum().length(24).required(),
  }),
}

export const remove = {
  params: Joi.object({
    id: Joi.string().alphanum().length(24).required(),
  }),
  body: Joi.object({
    store: Joi.string().alphanum().length(24).required(),
  }),
}