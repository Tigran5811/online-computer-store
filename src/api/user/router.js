import { Router } from 'express';
import {
  getAllController, getOneController, deleteController,
  updateController, changePasswordController,
} from './controller.js';
import {
  updateValidation, getOneValidation, deleteValidation, changePasswordValidation,
} from './validation.js';
import { expressValidationResult, adminAuthorization, userAuthorization } from '../../utils/utils-middleware.js';

const router = Router();

router.get('/', adminAuthorization, getAllController);

router.get('/:id', adminAuthorization, ...getOneValidation(), expressValidationResult, getOneController);

router.put('/:id', userAuthorization, ...updateValidation(), expressValidationResult, updateController);

router.delete('/:id', userAuthorization, ...deleteValidation(), expressValidationResult, deleteController);

router.post('/change-password', userAuthorization, ...changePasswordValidation(), expressValidationResult, changePasswordController);

export default router;
