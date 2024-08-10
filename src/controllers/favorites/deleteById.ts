import { Response, NextFunction } from 'express';
import { IRequest } from '../../types/types';
import { Endpoints, Messages } from '../../constants';
import { User } from '../../models/user';
import { ctrlWrapper, httpError } from '../../utils';

const deleteById = async (req: IRequest, res: Response, next: NextFunction): Promise<void> => {
  if (!req.user) {
    throw httpError({ status: 401 });
  }

  const { _id } = req.user;
  const productId = req.params[Endpoints.dynamicId];

  const user = await User.findOne({ _id });

  if (!user) {
    throw httpError({ status: 404, message: Messages.userNotFoundErr });
  }

  const isFavoriteProduct = user.favorites.includes(productId);

  if (!isFavoriteProduct) {
    throw httpError({ status: 404, message: Messages.productNotFoundErr });
  }

  const updatedFavoritesProducts = [...user.favorites].filter((id) => id !== productId);

  const result = await User.findOneAndUpdate({ _id }, { favorites: updatedFavoritesProducts });

  if (!result) {
    throw httpError({ status: 404 });
  }

  res.status(200).json(result.favorites);
};

export default ctrlWrapper<IRequest>(deleteById);
