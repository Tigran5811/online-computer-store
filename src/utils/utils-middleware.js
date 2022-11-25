import { validationResult } from 'express-validator';
import { UtilsError } from './error-handling.js';
import { decodeToken } from './jwt-utils.js';

export const expressValidationResult = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    return next();
};
export const authorization = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = decodeToken(token);
        req.user = {
            id: decoded.id,
        };
        return next();
    } catch (err) {
        return next(new UtilsError('unauthorized', 401));
    }
};
