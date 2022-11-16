import { Router } from 'express';

import {
  createController,
  getAllController,
  getOneController,
  deleteController,
  getAllOrdersByUserController,
} from './controller.js';
import { expressValidationResult } from '../../utils/utils-middleware.js';
import {
   getOneValidation, createValidation, deleteValidation, getAllOrdersByUserValidation,
} from './validation.js';

const router = Router();

router.get('/', getAllController);

router.get('/:id', ...getOneValidation(), expressValidationResult, getOneController);

router.delete('/:id', ...deleteValidation(), expressValidationResult, deleteController);

router.put('/:id', ...getAllOrdersByUserValidation(), expressValidationResult, getAllOrdersByUserController);

router.post('/', ...createValidation(), expressValidationResult, createController);

export default router;