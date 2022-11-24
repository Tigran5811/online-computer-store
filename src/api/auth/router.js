import { Router } from 'express';

import {
  signUpController,
  signInController,
} from './controller.js';
import { expressValidationResult } from '../../utils/utils-middleware.js';
import { signUpValidation, signInValidation } from './validation.js';

const router = Router();

router.post('/signup', ...signUpValidation(), expressValidationResult, signUpController);
router.post('/signin', ...signInValidation(), expressValidationResult, signInController);

export default router;
