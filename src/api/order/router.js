import { Router } from 'express';

import {
  createController,
  getAllController,
  getOneController,
  deleteController,
} from './controller.js';
// import { expressValidationResult } from '../../utils/utils-middleware.js';
// import {
//   updateValidation, getOneValidation, createValidation, deleteValidation,
// } from './validation.js';

const router = Router();

router.get('/', getAllController);

router.get('/:id', getOneController);

router.delete('/:id', deleteController);

// router.put('/:id', ...updateValidation(), expressValidationResult, updateController);

router.post('/', createController);

export default router;
