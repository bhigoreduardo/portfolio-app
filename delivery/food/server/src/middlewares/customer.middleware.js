import { Joi } from "express-validation";

export const update = {
  params: Joi.object({
    id: Joi.string().alphanum().length(24).required(),
  }),
  body: Joi.object({
    store: Joi.string().alphanum().length(24).required(),
    name: Joi.string().required(),
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
  }),
};

export const changePassword = {
  params: Joi.object({
    id: Joi.string().alphanum().length(24).required(),
  }),
  body: Joi.object({
    store: Joi.string().alphanum().length(24).required(),
    currentPassword: Joi.string()
      .regex(/[a-zA-Z0-9]{3,30}/)
      .required(),
    newPassword: Joi.string()
      .regex(/[a-zA-Z0-9]{3,30}/)
      .required(),
  }),
};
