import { Joi } from "express-validation";

export const update = {
  params: Joi.object({
    id: Joi.string().alphanum().length(24).required(),
  }),
  body: Joi.object({
    name: Joi.string().required(),
    cnpj: Joi.string().required(),
    mobile: Joi.string().required(),
    address: Joi.object({
      street: Joi.string().required(),
      neighborhood: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      number: Joi.string().required(),
      zipCode: Joi.string().required(),
      complement: Joi.string().optional(),
    }).required(),
    settings: Joi.object({
      payment: Joi.array().items(Joi.string()).required(),
      shipping: Joi.array().items(Joi.object({
        type: Joi.string().required(),
        neighborhood: Joi.string().optional(),
        price: Joi.number().optional(),
        deadlineAt: Joi.number().optional(),
      })).required(),
    }).required(),
  }),
};

export const changePassword = {
  params: Joi.object({
    id: Joi.string().alphanum().length(24).required(),
  }),
  body: Joi.object({
    currentPassword: Joi.string()
      .regex(/[a-zA-Z0-9]{3,30}/)
      .required(),
    newPassword: Joi.string()
      .regex(/[a-zA-Z0-9]{3,30}/)
      .required(),
  }),
};
