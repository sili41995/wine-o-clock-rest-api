import { NextFunction, Response } from 'express';
import { ICartRequest } from '../../types/types';
import { ctrlWrapper, httpError } from '../../utils';
import { Endpoints, FindFilters } from '../../constants';
import { Cart } from '../../models/cart';

const updateAmount = async (req: ICartRequest, res: Response, next: NextFunction): Promise<void> => {
  if (!req.user) {
    throw httpError({ status: 401 });
  }

  const { _id: owner } = req.user;
  const productId = req.params[Endpoints.dynamicId];

  const result = await Cart.findOneAndUpdate({ productId, owner }, req.body).select(FindFilters.generalFilter);

  if (!result) {
    throw httpError({ status: 404 });
  }

  res.status(200).json(result);
};

export default ctrlWrapper<ICartRequest>(updateAmount);
