import { Router } from 'express';

import {
  createController,
  // getAllController,
  getOneController,
  deleteController,
  getAllOrdersByUserController,
} from './controller.js';
import { expressValidationResult, userAuthorization } from '../../utils/utils-middleware.js';
import {
   getOneValidation, createValidation, deleteValidation, getAllOrdersByUserValidation,
} from './validation.js';

const router = Router();

// router.get('/', userAuthorization, getAllController);

router.get('/:id', userAuthorization, ...getOneValidation(), expressValidationResult, getOneController);

router.delete('/:id', userAuthorization, ...deleteValidation(), expressValidationResult, deleteController);

router.put('/:id', userAuthorization, ...getAllOrdersByUserValidation(), expressValidationResult, getAllOrdersByUserController);

router.post('/', userAuthorization, ...createValidation(), expressValidationResult, createController);

export default router;
