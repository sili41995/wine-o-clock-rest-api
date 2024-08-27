import { Response, NextFunction } from 'express';
import { IRequest } from '../../types/types';
import { ctrlWrapper, httpError } from '../../utils';
import { Endpoints, FindFilters } from '../../constants';
import { Cart } from 'models/cart';

const deleteById = async (req: IRequest, res: Response, next: NextFunction): Promise<void> => {
  if (!req.user) {
    throw httpError({ status: 401 });
  }

  const { _id: owner } = req.user;
  const _id = req.params[Endpoints.dynamicId];

  const result = await Cart.findOneAndDelete({ _id, owner }).select(FindFilters.generalFilter);

  if (!result) {
    throw httpError({ status: 404 });
  }

  res.status(200).json(result);
};

export default ctrlWrapper<IRequest>(deleteById);
