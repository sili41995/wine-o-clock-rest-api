import { Endpoints } from '../../constants';
import express from 'express';
import { authenticate, isValidId, validateBody } from '../../middlewares';
import { favoritesSchemas } from '../../schemas';
import { add, deleteById, getAll } from '../../controllers/favorites';

const router = express.Router();

router.use(authenticate);

router.get(Endpoints.root, getAll);
router.post(Endpoints.root, validateBody(favoritesSchemas.add), add);
router.delete(`${Endpoints.root}:${Endpoints.dynamicId}`, isValidId, deleteById);

export default router;
