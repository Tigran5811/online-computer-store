import { Router } from 'express';

import {
  getAllController, getOneController,
  deleteController, updateController,
  changePasswordController,
} from './controller.js';
import { expressValidationResult } from '../../utils/utils-middleware.js';
import {
  updateValidation, getOneValidation, deleteValidation, changePasswordValidation,
} from './validation.js';

const router = Router();

router.get('/', getAllController);

router.get('/:id', ...getOneValidation(), expressValidationResult, getOneController);

router.delete('/:id', ...deleteValidation(), expressValidationResult, deleteController);

router.put('/:id', ...updateValidation(), expressValidationResult, updateController);

router.post('/change-password', ...changePasswordValidation(), expressValidationResult, changePasswordController);

export default router;
