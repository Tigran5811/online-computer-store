import { Router } from 'express';

import {
  getAllController, getOneController, createController,
  deleteController, updateController,
} from './controller.js';
import { expressValidationResult } from '../../utils/utils-middleware.js';
import {
  updateValidation, getOneValidation, createValidation, deleteValidation,
} from './validation.js';

const router = Router();

router.get('/', getAllController);

router.get('/:index', ...getOneValidation(), expressValidationResult, getOneController);

router.delete('/:index', ...deleteValidation(), expressValidationResult, deleteController);

router.put('/:index', ...updateValidation(), expressValidationResult, updateController);

router.post('/', ...createValidation(), expressValidationResult, createController);

export default router;
