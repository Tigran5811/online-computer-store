import { body } from 'express-validator';
import * as errorMessage from '../../constants/error-massages.js';

export const signUpValidation = () => [
    body('username')
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
    body('email').isEmail().withMessage(errorMessage.invalidEmail),

];

export const signInValidation = () => [

    body('email').isEmail().withMessage(errorMessage.invalidEmail),
    body('password').isLength({ min: 8, max: 20 }).withMessage(errorMessage.fromToString(8, 20)),

];

export const verifyEmailValidation = () => [
    body('token').isJWT().withMessage(errorMessage.invalidToken),
];

export const forgetPasswordValidation = () => [
    body('email').isEmail().withMessage(errorMessage.invalidEmail),
];
export const recoverPasswordValidation = () => [
    body('token').isJWT().withMessage(errorMessage.invalidToken),
    body('password').isLength({ min: 8, max: 20 }).withMessage(errorMessage.fromToString(8, 20)),

];
