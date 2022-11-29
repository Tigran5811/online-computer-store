import { Router } from 'express';

import {
  signUpController,
  signInController,
  verifyEmailController,
} from './controller.js';
import { expressValidationResult } from '../../utils/utils-middleware.js';
import {
  signUpValidation,
  signInValidation,
  verifyEmailValidation,
} from './validation.js';

const router = Router();

router.post('/signup', ...signUpValidation(), expressValidationResult, signUpController);
router.post('/signin', ...signInValidation(), expressValidationResult, signInController);
router.post('/verify-email', ...verifyEmailValidation(), expressValidationResult, verifyEmailController);

export default router;
