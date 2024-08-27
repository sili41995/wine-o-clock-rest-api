import { NextFunction, Response } from 'express';
import { ICartRequest } from '../../types/types';
import { ctrlWrapper, httpError } from '../../utils';
import { Cart } from '../../models/cart';

const add = async (req: ICartRequest, res: Response, next: NextFunction): Promise<void> => {
  if (!req.user) {
    throw httpError({ status: 401 });
  }

  const { _id: owner } = req.user;

  const result = await Cart.create({ ...req.body, owner });
  result.owner = undefined;

  res.status(201).json(result);
};

export default ctrlWrapper<ICartRequest>(add);
