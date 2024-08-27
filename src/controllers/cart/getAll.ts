import { FindFilters } from '../../constants';
import { Response, NextFunction } from 'express';
import { Cart } from '../../models/cart';
import { IRequest } from '../../types/types';
import { ctrlWrapper, httpError } from '../../utils';

const getAll = async (req: IRequest, res: Response, next: NextFunction): Promise<void> => {
  if (!req.user) {
    throw httpError({ status: 401 });
  }

  const { _id: owner } = req.user;

  const result = await Cart.find({ owner }, FindFilters.generalFilter);

  res.status(200).json(result);
};

export default ctrlWrapper<IRequest>(getAll);
