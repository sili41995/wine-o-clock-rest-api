import express from 'express';
import {
  signUp,
  signIn,
  signOut,
  current,
  restorePassword,
  updatePassword,
} from '../../controllers/auth';
import { validateBody, authenticate } from '../../middlewares';
import {
  signUpSchema,
  signInSchema,
  restorePasswordSchema,
  updatePasswordSchema,
} from '../../models/user';
import { validBodySchema } from '../../schemas';
import { Endpoints } from '../../constants';

const router = express.Router();

router.post(
  Endpoints.signup,
  validateBody(validBodySchema),
  validateBody(signUpSchema),
  signUp
);
router.post(
  Endpoints.signin,
  validateBody(validBodySchema),
  validateBody(signInSchema),
  signIn
);
router.post(Endpoints.signout, authenticate, signOut);
router.get(Endpoints.current, authenticate, current);
router.post(
  Endpoints.restorePass,
  validateBody(restorePasswordSchema),
  restorePassword
);
router.patch(
  Endpoints.updatePass,
  validateBody(updatePasswordSchema),
  updatePassword
);

export default router;
