import { body, param } from 'express-validator';
import * as errorMessage from '../../constants/error-massages.js';

export const getOneValidation = () => [
    param('id').isMongoId().withMessage(errorMessage.isMongoId),
];

export const deleteValidation = () => [
    param('id').isMongoId().withMessage(errorMessage.isMongoId),
];

export const createValidation = () => [
    body('name').isLength({ min: 4, max: 255 }).withMessage(errorMessage.fromToString(4, 255)),
    body('brand').isLength({ min: 4, max: 255 }).withMessage(errorMessage.fromToString(4, 255)),
    body('totalCores').isInt({ min: 1, max: 10000 }).withMessage(errorMessage.fromToInteger(1, 10000)),
    body('totalThreads').isInt({ min: 1, max: 10000 }).withMessage(errorMessage.fromToInteger(1, 10000)),
    body('generation').isLength({ min: 4, max: 255 }).withMessage(errorMessage.fromToString(4, 255)),
    body('price').isInt({ min: 1, max: 100000 }).withMessage(errorMessage.fromToInteger(1, 100000)),
    body('image').isMongoId().withMessage(errorMessage.isMongoId),
];

export const updateValidation = () => [
    param('id').isMongoId().withMessage(errorMessage.isMongoId),
    body('name').isLength({ min: 4, max: 255 }).withMessage(errorMessage.fromToString(4, 255)).optional(),
    body('brand').isLength({ min: 4, max: 255 }).withMessage(errorMessage.fromToString(4, 255)).optional(),
    body('totalCores').isInt({ min: 1, max: 10000 }).withMessage(errorMessage.fromToInteger(1, 10000)).optional(),
    body('totalThreads').isInt({ min: 1, max: 10000 }).withMessage(errorMessage.fromToInteger(1, 10000)).optional(),
    body('generation').isLength({ min: 4, max: 255 }).withMessage(errorMessage.fromToString(4, 255)).optional(),
    body('price').isInt({ min: 1, max: 100000 }).withMessage(errorMessage.fromToInteger(1, 100000)).optional(),
    body('image').isMongoId().withMessage(errorMessage.isMongoId).optional(),
];
