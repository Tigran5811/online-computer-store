import { body } from 'express-validator';
import * as errorMessage from '../../constants/error-massages.js';

export const getOneValidation = () => [

];

export const deleteValidation = () => [

];

export const createValidation = () => [
    body('Manufacturer').isLength({ min: 1, max: 20 }).withMessage(errorMessage.fromToString(1, 20)),
    body('SSD')
        .isLength({ min: 1, max: 20 })
        .withMessage(errorMessage.fromToString(1, 20)),
    body('Resolution')
        .isLength({ min: 3, max: 20 })
        .withMessage(errorMessage.fromToString(3, 20)),
    body('Diagonal').isInt({ min: 10, max: 30 }).withMessage(errorMessage.fromToInteger(10, 30)),
    body('Price').isInt({ min: 50, max: 10000 }).withMessage(errorMessage.fromToInteger(50, 10000)),
];

export const updateValidation = () => [
    body('Manufacturer').isLength({ min: 1, max: 20 }).withMessage(errorMessage.fromToString(1, 20)),
    body('SSD')
        .isLength({ min: 1, max: 20 })
        .withMessage(errorMessage.fromToString(1, 20)),
    body('Resolution')
        .isLength({ min: 3, max: 20 })
        .withMessage(errorMessage.fromToString(3, 20)),
    body('Diagonal').isInt({ min: 10, max: 30 }).withMessage(errorMessage.fromToInteger(10, 30)),
    body('Price').isInt({ min: 50, max: 10000 }).withMessage(errorMessage.fromToInteger(50, 10000)),
];
