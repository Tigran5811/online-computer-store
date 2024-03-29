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
    body('color').isLength({ min: 2, max: 10 }).withMessage(errorMessage.fromToString(1, 10)),
    body('inch').isInt({ min: 9, max: 1000 }).withMessage(errorMessage.fromToInteger(9, 1000)).isDecimal()
.withMessage(errorMessage.isDecimal),
    body('price').isInt({ min: 1, max: 100000 }).withMessage(errorMessage.fromToInteger(1, 100000)),
    body('image').isMongoId().withMessage(errorMessage.isMongoId),
];

export const updateValidation = () => [
    param('id').isMongoId().withMessage(errorMessage.isMongoId),
    body('name').isLength({ min: 4, max: 255 }).withMessage(errorMessage.fromToString(4, 255)).optional(),
    body('brand').isLength({ min: 4, max: 255 }).withMessage(errorMessage.fromToString(4, 255)).optional(),
    body('color').isLength({ min: 2, max: 10 }).withMessage(errorMessage.fromToString(1, 10)).optional(),
    body('inch').isInt({ min: 9, max: 1000 }).withMessage(errorMessage.fromToInteger(9, 1000)).isDecimal()
.withMessage(errorMessage.isDecimal)
.optional(),
    body('price').isInt({ min: 1, max: 100000 }).withMessage(errorMessage.fromToInteger(1, 100000)).optional(),
    body('image').isMongoId().withMessage(errorMessage.isMongoId).optional(),
];
