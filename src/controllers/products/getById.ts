import { Response, NextFunction } from 'express';
import { IRequest,  } from '../../types/types';
import { Endpoints, FindFilters } from '../../constants';
import { Product } from '../../models/product';
import { ctrlWrapper, httpError } from '../../utils';

const getById = async (
  req: IRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const _id = req.params[Endpoints.dynamicId];

  const result = await Product.findOne({ _id }).select(
    FindFilters.eventFilter
  );

  if (!result) {
    throw httpError({ status: 404 });
  }

  res.status(200).json(result);
};

export default ctrlWrapper<IRequest>(getById);