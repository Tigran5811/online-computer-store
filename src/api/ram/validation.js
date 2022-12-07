import { body, param } from 'express-validator';
import * as errorMessage from '../../constants/error-massages.js';
import { colors, ram } from '../../constants/features.js';

export const getOneValidation = () => [
    param('id').isMongoId().withMessage(errorMessage.isMongoId),
];

export const deleteValidation = () => [
    param('id').isMongoId().withMessage(errorMessage.isMongoId),
];

export const createValidation = () => [
    body('brand')
        .isAlpha()
        .withMessage(errorMessage.onlyLetters)
        .isLength({ min: 4, max: 255 })
        .withMessage(errorMessage.fromToString(4, 255)),
    body('name')
        .isString()
        .withMessage(errorMessage.isString)
        .isLength({ min: 4, max: 255 })
        .withMessage(errorMessage.fromToString(4, 255)),
    body('memorySpeed')
        .isInt({ min: 1, max: 10000 })
        .withMessage(errorMessage.fromToInteger(1, 10000)),
    body('memorySize')
        .isInt({ min: 1, max: 10000 })
        .withMessage(errorMessage.fromToInteger(1, 10000)),
    body('generation')
        .isString()
        .withMessage(errorMessage.isString)
        .isIn(ram)
        .withMessage(errorMessage.wrongGeneration),
    body('color')
        .isString()
        .withMessage(errorMessage.isString)
        .isIn(colors)
        .withMessage(errorMessage.wrongColor),
    body('price')
        .isInt({ min: 0, max: 100000 })
        .withMessage(errorMessage.fromToInteger(0, 100000)),
];

export const updateValidation = () => [
    param('id').isMongoId().withMessage(errorMessage.isMongoId),
    body('brand').optional()
        .isAlpha()
        .withMessage(errorMessage.onlyLetters)
        .isLength({ min: 4, max: 255 })
        .withMessage(errorMessage.fromToString(4, 255)),
    body('name').optional()
        .isString()
        .withMessage(errorMessage.isString)
        .isLength({ min: 4, max: 255 })
        .withMessage(errorMessage.fromToString(4, 255)),
    body('memorySpeed').optional()
        .isInt({ min: 1, max: 10000 })
        .withMessage(errorMessage.fromToInteger(1, 10000)),
    body('memorySize').optional()
        .isInt({ min: 1, max: 10000 })
        .withMessage(errorMessage.fromToInteger(1, 10000)),
    body('generation').optional()
        .isString()
        .withMessage(errorMessage.isString)
        .isIn(ram)
        .withMessage(errorMessage.wrongGeneration),
    body('color').optional()
        .isString()
        .withMessage(errorMessage.isString)
        .isIn(colors)
        .withMessage(errorMessage.wrongColor),
    body('price').optional()
        .isInt({ min: 0, max: 100000 })
        .withMessage(errorMessage.fromToInteger(0, 100000)),
];
