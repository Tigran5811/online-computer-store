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
    body('laptop').isMongoId().withMessage(errorMessage.isMongoId).optional(),
    body('display').isMongoId().withMessage(errorMessage.isMongoId).optional(),
    body('keyboard').isMongoId().withMessage(errorMessage.isMongoId).optional(),
    body('mouse').isMongoId().withMessage(errorMessage.isMongoId).optional(),
    body('processor').isMongoId().withMessage(errorMessage.isMongoId).optional(),
    body('ram').isMongoId().withMessage(errorMessage.isMongoId).optional(),
];

export const getAllOrdersByUserValidation = () => [
    param('id').isMongoId().withMessage(errorMessage.isMongoId),
];
