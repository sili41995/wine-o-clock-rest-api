import { Response, NextFunction } from 'express';
import { IRequest } from '../../types/types';
import { ctrlWrapper, httpError } from '../../utils';

const getAll = async (req: IRequest, res: Response, next: NextFunction): Promise<void> => {
  if (!req.user) {
    throw httpError({ status: 401 });
  }

  res.status(200).json(req.user.favorites);
};

export default ctrlWrapper<IRequest>(getAll);
