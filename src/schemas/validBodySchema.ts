import Joi from 'joi';
import { Messages } from '../constants';

const validBodySchema = Joi.object().min(1).messages({
  'object.min': Messages.missingFieldsErr,
});

export default validBodySchema;
