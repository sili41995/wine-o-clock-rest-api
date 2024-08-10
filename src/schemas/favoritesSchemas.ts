import { Messages } from '../constants';
import Joi from 'joi';

const productIdSettings = Joi.string().length(24).messages({
  'any.required': Messages.productIdReqErr,
  'string.length': Messages.productIdLengthErr,
});

const add = Joi.object({
  productId: productIdSettings.required(),
});

const schemas = {
  add,
};

export default schemas;
