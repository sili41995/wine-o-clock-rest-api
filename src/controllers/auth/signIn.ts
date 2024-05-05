import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User } from '../../models/user';
import { ctrlWrapper, httpError } from '../../utils';
import { IAuthRequest } from '../../types/types';
import { Messages, ProfileSettings } from '../../constants';

const { SECRET_KEY } = process.env;

const signIn = async (
  req: IAuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const isValidPassword = await bcrypt.compare(
    password as string,
    user?.password ?? ''
  );

  if (!user || !isValidPassword) {
    throw httpError({
      status: 401,
      message: Messages.incorrectCredentialsErr,
    });
  }

  const payload = { id: user._id };
  const token = jwt.sign(payload, SECRET_KEY as string, {
    expiresIn: ProfileSettings.tokenExpiresIn,
  });
  const result = await User.findByIdAndUpdate(user._id, { token });

  if (!result) {
    throw httpError({ status: 404 });
  }

  res.status(200).json({
    token: result.token,
  });
};

export default ctrlWrapper<IAuthRequest>(signIn);
