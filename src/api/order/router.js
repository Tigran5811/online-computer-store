import { Router } from 'express';

import {
  createController,
  getAllController,
  // getOneController,
  // deleteController, updateController,
} from './controller.js';
// import { expressValidationResult } from '../../utils/utils-middleware.js';
// import {
//   updateValidation, getOneValidation, createValidation, deleteValidation,
// } from './validation.js';

const router = Router();

router.get('/', getAllController);

// router.get('/:id', ...getOneValidation(), expressValidationResult, getOneController);

// router.delete('/:id', ...deleteValidation(), expressValidationResult, deleteController);

// router.put('/:id', ...updateValidation(), expressValidationResult, updateController);

router.post('/', createController);

export default router;
