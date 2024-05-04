import { Request, Response, NextFunction } from 'express';
import { isValidObjectId } from 'mongoose';
import { httpError } from '../utils';
import { Endpoints } from '../constants';

const isValidId = (req: Request, res: Response, next: NextFunction): void => {
  const id = req.params[Endpoints.dynamicId];
  if (!isValidObjectId(id)) {
    return next(httpError({ status: 404, message: `${id} is not valid id` }));
  }

  next();
};

export default isValidId;
