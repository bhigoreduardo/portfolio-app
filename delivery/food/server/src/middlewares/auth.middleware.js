import { Joi } from "express-validation";

export const customerSinUp = {
  body: Joi.object({
    store: Joi.string().alphanum().length(24).required(),
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    mobile: Joi.string().required(),
    address: Joi.object({
      street: Joi.string().required(),
      neighborhood: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      number: Joi.string().optional(),
      zipCode: Joi.string().required(),
      complement: Joi.string().optional(),
    }).required(),
    password: Joi.string()
      .regex(/[a-zA-Z0-9]{3,30}/)
      .required(),
    terms: Joi.bool().required(),
  }),
};

export const customerSignIn = {
  body: Joi.object({
    store: Joi.string().alphanum().length(24).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .regex(/[a-zA-Z0-9]{3,30}/)
      .required(),
  }),
};

export const customerForgotPassword = {
  body: Joi.object({
    store: Joi.string().alphanum().length(24).required(),
    email: Joi.string().email().required(),
  }),
};

export const customerResetPassword = {
  body: Joi.object({
    store: Joi.string().alphanum().length(24).required(),
    token: Joi.string().required(),
    password: Joi.string()
      .regex(/[a-zA-Z0-9]{3,30}/)
      .required(),
  }),
};

export const storeSinUp = {
  body: Joi.object({
    store: Joi.string().alphanum().length(24).required(),
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    cnpj: Joi.string().required(),
    mobile: Joi.string().required(),
    address: Joi.object({
      street: Joi.string().required(),
      neighborhood: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      number: Joi.string().optional(),
      zipCode: Joi.string().required(),
      complement: Joi.string().optional(),
    }).required(),
    settings: Joi.object({
      payment: Joi.array().items(Joi.string()).required(),
      shipping: Joi.array().items(Joi.object({
        method: Joi.string().required(),
        neighborhood: Joi.string().optional(),
        price: Joi.number().optional(),
        deadlineAt: Joi.number().optional(),
      })).required(),
    }).required(),
    password: Joi.string()
      .regex(/[a-zA-Z0-9]{3,30}/)
      .required(),
    terms: Joi.bool().required(),
  }),
};

export const storeSignIn = {
  body: Joi.object({
    store: Joi.string().alphanum().length(24).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .regex(/[a-zA-Z0-9]{3,30}/)
      .required(),
  }),
};

export const storeForgotPassword = {
  body: Joi.object({
    store: Joi.string().alphanum().length(24).required(),
    email: Joi.string().email().required(),
  }),
};

export const storeResetPassword = {
  body: Joi.object({
    store: Joi.string().alphanum().length(24).required(),
    token: Joi.string().required(),
    password: Joi.string()
      .regex(/[a-zA-Z0-9]{3,30}/)
      .required(),
  }),
};