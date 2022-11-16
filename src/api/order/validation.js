import { body, param } from 'express-validator';
import * as errorMessage from '../../constants/error-massages.js';

export const getOneValidation = () => [
    param('id').isMongoId().withMessage(errorMessage.isMongoId),
];

export const deleteValidation = () => [
    param('id').isMongoId().withMessage(errorMessage.isMongoId),
];

export const createValidation = () => [
    body('user').isMongoId().withMessage(errorMessage.isMongoId),
    body('laptop').isMongoId().withMessage(errorMessage.isMongoId),

];

export const getAllOrdersByUserValidation = () => [
    param('id').isMongoId().withMessage(errorMessage.isMongoId),
];
