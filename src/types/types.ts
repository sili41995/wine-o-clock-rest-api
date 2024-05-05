import { ObjectId } from 'mongoose';
import { Request } from 'express';

export interface IHttpError {
  status: number;
  message?: string;
}

export interface IUser {
  _id: ObjectId;
  email: string;
  password: string | undefined;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  token: string | null | undefined;
}

export interface IRegExp {
  phoneNumber: RegExp;
  email: RegExp;
  notEmptyValue: RegExp;
}

export interface IRequest extends Request {
  user?: IUser;
}

export interface IAuthRequest extends IRequest {
  body: IUser;
}

export interface IDecodedToken {
  id: string;
}
