import { Response, NextFunction } from 'express';
import { IFavoritesRequest } from '../../types/types';
import { ctrlWrapper, httpError } from '../../utils';
import { User } from '../../models/user';
import { Messages } from '../../constants';

const add = async (req: IFavoritesRequest, res: Response, next: NextFunction): Promise<void> => {
  if (!req.user) {
    throw httpError({ status: 401 });
  }

  const { _id } = req.user;
  const { productId } = req.body;

  const user = await User.findOne({ _id });

  if (!user) {
    throw httpError({ status: 404, message: Messages.userNotFoundErr });
  }

  const isAlreadyFavoriteProduct = user.favorites.includes(productId);

  if (isAlreadyFavoriteProduct) {
    throw httpError({ status: 400, message: Messages.isAlreadyFavoriteProductErr });
  }

  const result = await User.findByIdAndUpdate({ _id }, { favorites: [...user.favorites, productId] });

  res.status(201).json(result?.favorites);
};

export default ctrlWrapper<IFavoritesRequest>(add);
