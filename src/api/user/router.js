import { Router } from 'express';

import {
  getAllController, getOneController,
  deleteController, updateController,
} from './controller.js';
import { expressValidationResult } from '../../utils/utils-middleware.js';
import {
  updateValidation, getOneValidation, deleteValidation,
} from './validation.js';

const router = Router();

router.get('/', getAllController);

router.get('/:id', ...getOneValidation(), expressValidationResult, getOneController);

router.delete('/:id', ...deleteValidation(), expressValidationResult, deleteController);

router.put('/:id', ...updateValidation(), expressValidationResult, updateController);

export default router;
