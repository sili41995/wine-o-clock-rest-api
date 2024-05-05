import express from 'express';
import {
  signUp,
  signIn,
  signOut,
  current,
  restorePassword,
} from '../../controllers/auth';
import { validateBody, authenticate } from '../../middlewares';
import {
  signUpSchema,
  signInSchema,
  restorePasswordSchema,
} from '../../models/user';
import { validBodySchema } from '../../schemas';
import { Endpoints, ProfileSettings } from '../../constants';

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
// router.patch(
//   '/restore-password/:restorePasswordToken',
//   validateBody(updatePasswordSchema),
//   updatePassword
// );

export default router;
