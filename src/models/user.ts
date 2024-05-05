import { Schema, model } from 'mongoose';
import Joi from 'joi';
import ModelNames from './modelNames';
import { handleMongooseError, preUpdate } from './hooks';
import { Messages, regExp, ProfileSettings } from '../constants';
import { IUser } from '../types/types';

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      match: [regExp.email, Messages.emailRegExpErr],
      required: [true, Messages.emailReqErr],
      unique: true,
    },
    password: {
      type: String,
      match: [regExp.notEmptyValue, Messages.emptyStringErr],
      minLength: [ProfileSettings.passMinLength, Messages.passwordMinLengthErr],
      required: [true, Messages.passwordReqErr],
    },
    phoneNumber: {
      type: String,
      match: [regExp.phoneNumber, Messages.phoneNumberRegExErr],
      required: [true, Messages.phoneNumberReqErr],
    },
    firstName: {
      type: String,
      required: [true, Messages.firstNameReqErr],
    },
    lastName: {
      type: String,
      required: [true, Messages.lastNameReqErr],
    },
    token: {
      type: String,
      default: null,
    },
    restorePasswordToken: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.pre('findOneAndUpdate', preUpdate);
userSchema.post('save', handleMongooseError);
userSchema.post('findOneAndUpdate', handleMongooseError);

const emailSettings = Joi.string().pattern(regExp.email).messages({
  'any.required': Messages.emailReqErr,
  'string.pattern.base': Messages.emailRegExpErr,
});

const passwordSettings = Joi.string()
  .pattern(regExp.notEmptyValue)
  .min(ProfileSettings.passMinLength)
  .max(ProfileSettings.passMaxLength)
  .messages({
    'any.required': Messages.passwordReqErr,
    'string.min': Messages.passwordMinLengthErr,
    'string.max': Messages.passwordMaxLengthErr,
    'string.pattern.base': Messages.emptyStringErr,
  });

const passwordRepeatSettings = Joi.string()
  .valid(Joi.ref('password'))
  .messages({
    'any.required': Messages.passwordRepeatReqErr,
    'any.only': Messages.passwordRepeatErr,
  });

const firstNameSettings = Joi.string().messages({
  'any.required': Messages.firstNameReqErr,
});

const lastNameSettings = Joi.string().messages({
  'any.required': Messages.lastNameReqErr,
});

const phoneNumberSettings = Joi.string().pattern(regExp.phoneNumber).messages({
  'any.required': Messages.phoneNumberReqErr,
  'string.pattern.base': Messages.phoneNumberRegExErr,
});

const signUpSchema = Joi.object({
  firstName: firstNameSettings.required(),
  lastName: lastNameSettings.required(),
  email: emailSettings.required(),
  phoneNumber: phoneNumberSettings.required(),
  password: passwordSettings.required(),
  passwordRepeat: passwordRepeatSettings.required(),
});

const signInSchema = Joi.object({
  email: emailSettings.required(),
  password: passwordSettings.required(),
});

const restorePasswordSchema = Joi.object({
  email: emailSettings.required(),
});

const updatePasswordSchema = Joi.object({
  password: passwordSettings.required(),
  passwordRepeat: passwordRepeatSettings.required(),
});

const User = model<IUser>(ModelNames.user, userSchema);

export {
  User,
  signUpSchema,
  signInSchema,
  restorePasswordSchema,
  updatePasswordSchema,
};
