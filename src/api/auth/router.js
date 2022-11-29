import { Router } from 'express';

import {
  signUpController,
  signInController,
  verifyEmailController,
  forgetPasswordController,
  recoverPasswordController,
} from './controller.js';
import { expressValidationResult } from '../../utils/utils-middleware.js';
import {
  signUpValidation,
  signInValidation,
  verifyEmailValidation,
  forgetPasswordValidation,
  recoverPasswordValidation,
} from './validation.js';

const router = Router();

router.post('/signup', ...signUpValidation(), expressValidationResult, signUpController);
router.post('/signin', ...signInValidation(), expressValidationResult, signInController);
router.post('/verify-email', ...verifyEmailValidation(), expressValidationResult, verifyEmailController);
router.post('/forget-password', ...forgetPasswordValidation(), expressValidationResult, forgetPasswordController);
router.post('/recover-password', ...recoverPasswordValidation(), expressValidationResult, recoverPasswordController);

export default router;
