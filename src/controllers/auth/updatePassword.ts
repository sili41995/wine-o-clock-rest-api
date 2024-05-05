import { NextFunction, Response } from 'express';
import bcrypt from 'bcryptjs';
import { IAuthRequest } from '../../types/types';
import { User } from '../../models/user';
import { httpError, ctrlWrapper } from '../../utils';
import { Endpoints, Messages } from '../../constants';

const updatePassword = async (
  req: IAuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const restorePasswordToken = req.params[Endpoints.dynamicRestorePassToken];
  const { password } = req.body;

  const hashPassword = await bcrypt.hash(password as string, 10);
  const result = await User.findOneAndUpdate(
    { restorePasswordToken },
    { password: hashPassword, restorePasswordToken: null }
  );

  if (!result) {
    throw httpError({ status: 404 });
  }

  res.status(200).json({ message: Messages.passwordUpdated });
};

export default ctrlWrapper<IAuthRequest>(updatePassword);
