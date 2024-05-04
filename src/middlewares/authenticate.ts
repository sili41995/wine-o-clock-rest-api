import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/user';
import { httpError, ctrlWrapper } from '../utils';
import { IDecodedToken, IRequest } from '../types/types';

const { SECRET_KEY } = process.env;

const authenticate = async (
  req: IRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ');

  if (bearer !== 'Bearer') {
    throw httpError({ status: 401 });
  }

  try {
    const { id } = jwt.verify(token, SECRET_KEY as string) as IDecodedToken;
    const user = await User.findById(id).select('-createdAt -updatedAt');

    if (!user || user.token !== token) {
      throw httpError({ status: 401 });
    }

    req.user = user;
    next();
  } catch (error) {
    if (error instanceof Error) {
      throw httpError({ status: 401, message: error.message });
    }
  }
};

export default ctrlWrapper(authenticate);