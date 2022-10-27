import { Router } from 'express';
import { body } from 'express-validator';
import {
  getUsersController, getUserController, createUserController,
  delIndexController, updateUserController,
} from './controller.js';
import { expressValidationResult } from '../../utils/utils-middleware.js';
import * as errorMessage from '../../constants/error-massages.js';
// import { validateCreateUser, validateUpdateUser } from './validation.js';

const router = Router();

router.get('/', getUsersController);

router.get('/:index', getUserController);

router.delete('/:index', delIndexController);

router.put(
  '/:index',
  body('userName')
    .exists().withMessage(errorMessage.require),
  body('password').isLength({ min: 8, max: 20 }).withMessage(errorMessage.fromToString(8, 20)),
  body('firstName')
    .isLength({ min: 3, max: 20 })
    .withMessage(errorMessage.fromToString(3, 20))
    .isAlpha()
    .withMessage(errorMessage.onlyLetters)
    .matches('[A-Z]')
    .withMessage(errorMessage.uppercase),
  body('lastName')
    .isLength({ min: 3, max: 20 })
    .withMessage(errorMessage.fromToString(3, 20))
    .isAlpha()
    .withMessage(errorMessage.onlyLetters)
    .matches('[A-Z]')
    .withMessage(errorMessage.uppercase),
  body('age').isInt({ min: 5, max: 120 }).withMessage(errorMessage.fromToInteger(5, 120)),
  body('email').isEmail().withMessage(errorMessage.email),
  expressValidationResult,
  updateUserController,
);

router.post(
'/',
body('userName')
.exists().withMessage(errorMessage.require),
body('password').isLength({ min: 8, max: 20 }).withMessage(errorMessage.fromToString(8, 20)),
body('firstName')
.isLength({ min: 3, max: 20 })
.withMessage(errorMessage.fromToString(3, 20))
.isAlpha()
.withMessage(errorMessage.onlyLetters)
.matches('[A-Z]')
.withMessage(errorMessage.uppercase),
body('lastName')
.isLength({ min: 3, max: 20 })
.withMessage(errorMessage.fromToString(3, 20))
.isAlpha()
.withMessage(errorMessage.onlyLetters)
.matches('[A-Z]')
.withMessage(errorMessage.uppercase),
body('age').isInt({ min: 5, max: 120 }).withMessage(errorMessage.fromToInteger(5, 120)),
body('email').isEmail().withMessage(errorMessage.email),
expressValidationResult,
createUserController,
);

export default router;
