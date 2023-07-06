import { Joi } from "express-validation";

export const save = {
  body: Joi.object({
    store: Joi.string().alphanum().length(24).required(),
    name: Joi.string().required(),
    status: Joi.bool().required(),
  }),
};

export const update = {
  params: Joi.object({
    id: Joi.string().alphanum().length(24).required(),
  }),
  body: Joi.object({
    store: Joi.string().alphanum().length(24).required(),
    name: Joi.string().required(),
    status: Joi.bool().required(),
  }),
};

export const remove = {
  params: Joi.object({
    id: Joi.string().alphanum().length(24).required(),
  }),
};
