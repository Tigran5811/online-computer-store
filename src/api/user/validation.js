import { body, param } from 'express-validator';
import * as errorMessage from '../../constants/error-massages.js';

export const getOneValidation = () => [
    param('id').isMongoId().withMessage(errorMessage.isMongoId),
];

export const deleteValidation = () => [
    param('id').isMongoId().withMessage(errorMessage.isMongoId),
];

export const updateValidation = () => [
    param('id').isMongoId().withMessage(errorMessage.isMongoId),
    body('username').optional()
        .exists().withMessage(errorMessage.require),
    body('password').optional().isLength({ min: 8, max: 20 }).withMessage(errorMessage.fromToString(8, 20)),
    body('firstName').optional()
        .isLength({ min: 3, max: 20 })
        .withMessage(errorMessage.fromToString(3, 20))
        .isAlpha()
        .withMessage(errorMessage.onlyLetters)
        .matches('[A-Z]')
        .withMessage(errorMessage.uppercase),
    body('lastName').optional()
        .isLength({ min: 3, max: 20 })
        .withMessage(errorMessage.fromToString(3, 20))
        .isAlpha()
        .withMessage(errorMessage.onlyLetters)
        .matches('[A-Z]')
        .withMessage(errorMessage.uppercase),
    body('age').optional().isInt({ min: 5, max: 120 }).withMessage(errorMessage.fromToInteger(5, 120)),
    body('email').optional().isEmail().withMessage(errorMessage.email),
];

export const changePasswordValidation = () => [
    body('password').optional().isLength({ min: 8, max: 20 }).withMessage(errorMessage.fromToString(8, 20)),
    body('newPassword').optional().isLength({ min: 8, max: 20 }).withMessage(errorMessage.fromToString(8, 20)),
    body('campersPassword').optional().isLength({ min: 8, max: 20 }).withMessage(errorMessage.fromToString(8, 20)),
];
