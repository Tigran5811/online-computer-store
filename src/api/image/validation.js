import { body, param } from 'express-validator';
import * as errorMessage from '../../constants/error-massages.js';

export const getOneValidation = () => [
    param('id').isMongoId().withMessage(errorMessage.isMongoId),
];

export const deleteValidation = () => [
    param('id').isMongoId().withMessage(errorMessage.isMongoId),
];

// export const createValidation = () => [
//     body('path').isLength({ min: 5, max: 100 }).withMessage(errorMessage.fromToString(5, 100)),
// ];
