import { Router } from 'express';

import {
  createController,
  getAllController, getOneController,
  deleteController,
} from './controller.js';
import { expressValidationResult, adminAuthorization } from '../../utils/utils-middleware.js';
import {
  getOneValidation, deleteValidation,
} from './validation.js';

import { upload } from '../../utils/multer.js';

const router = Router();

router.get('/', getAllController);

router.get('/:id', ...getOneValidation(), expressValidationResult, getOneController);

router.delete('/:id', adminAuthorization, ...deleteValidation(), expressValidationResult, deleteController);

router.post('/', adminAuthorization, upload.single('image'), createController);

export default router;
