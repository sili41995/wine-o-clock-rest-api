import express from 'express';
import { authenticate, isValidId, validateBody } from '../../middlewares';
import { getAll, add, updateAmount, deleteById } from '../../controllers/cart';
import { Endpoints } from '../../constants';
import { cartSchemas } from '../../schemas';

const router = express.Router();

router.use(authenticate);

router.get(Endpoints.root, getAll);
router.post(Endpoints.root, validateBody(cartSchemas.add), add);
router.patch(`${Endpoints.amount}/:${Endpoints.dynamicId}`, isValidId, validateBody(cartSchemas.updateAmount), updateAmount);
router.delete(`${Endpoints.root}:${Endpoints.dynamicId}`, isValidId, deleteById);

export default router;
