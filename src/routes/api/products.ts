import express from 'express';
import { getAll } from '../../controllers/products';
// import { validateBody, authenticate, upload } from '../../middlewares';
// import {
//   signUpSchema,
//   signInSchema,
//   updateProfileSchema,
// } from '../../models/user';
// import { validBodySchema } from '../../schemas';
import { Endpoints, ProfileSettings } from '../../constants';

const router = express.Router();

router.get(Endpoints.root, getAll);
// router.post(
//   Endpoints.signin,
//   validateBody(validBodySchema),
//   validateBody(signInSchema),
//   signIn
// );
// router.post(Endpoints.signout, authenticate, signOut);
// router.get(Endpoints.current, authenticate, current);
// router.put(
//   Endpoints.profile,
//   authenticate,
//   validateBody(updateProfileSchema),
//   updateProfile
// );
// router.patch(
//   Endpoints.avatars,
//   authenticate,
//   upload.single(ProfileSettings.imgField),
//   updateAvatar
// );

export default router;
