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
  restorePasswordToken: string | null | undefined;
  favorites: string[];
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

export interface ISendEmailProps {
  userEmail: string;
  token: string;
}

export interface IComment {
  owner: ObjectId;
  comment: string;
}

export type Comments = IComment[];

export interface IProduct {
  title: string;
  price: number;
  adminDiscountPercentage: number;
  description: string;
  quantity: number;
  bottleCapacity: number;
  alcohol: number;
  isNewCollection: boolean;
  isBestSeller: boolean;
  isSale: boolean;
  isWineTimePromotion: boolean;
  wineColor: string;
  sugarConsistency: string;
  country: string;
  region: string;
  evaluation: number;
  comments: Comments;
  bottlesSoldCounter: number;
  imageUrl: string;
}

export interface IGetFindFilterProps {
  page?: string;
  limit?: string;
  title?: string;
}

export interface IFindFilter {
  skip: number;
  limit: number;
  findFilter: {
    title: {
      $regex: string;
      $options: string;
    };
  };
}

export interface IProductId {
  productId: string;
}

export interface IFavoritesRequest extends IRequest {
  body: IProductId;
}
