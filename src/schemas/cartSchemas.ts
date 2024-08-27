import { Messages } from '../constants';
import Joi from 'joi';

const productIdSettings = Joi.string().messages({
  'any.required': Messages.productIdReqErr,
});

const amountSettings = Joi.number().messages({
  'any.required': Messages.amountReqErr,
  'number.base': Messages.amountNumberErr,
});

const add = Joi.object({
  productId: productIdSettings.required(),
}).messages({
  'object.unknown': Messages.unexpectedProperty,
});

const updateAmount = Joi.object({
  amount: amountSettings.required(),
}).messages({
  'object.unknown': Messages.unexpectedProperty,
});

const schemas = {
  add,
  updateAmount,
};

export default schemas;
