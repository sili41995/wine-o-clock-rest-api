import { NextFunction, Response } from 'express';
import { IRequest } from '../../types/types';
import { FindFilters } from '../../constants';
import { Product } from '../../models/product';
import { ctrlWrapper, getFindFilter } from '../../utils';

const getAll = async (
  req: IRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { skip, limit, findFilter } = getFindFilter(req.query);
  const result = await Product.find(findFilter, FindFilters.eventFilter, {
    skip,
    limit,
  });
  const count = await Product.find().countDocuments();

  res.status(200).json({
    products: result,
    count,
  });
};

export default ctrlWrapper<IRequest>(getAll);
