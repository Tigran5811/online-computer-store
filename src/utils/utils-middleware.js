import { validationResult } from 'express-validator';
import { getOneService as getOneUserService } from '../api/user/service.js';
import { notAuth } from '../constants/error-massages.js';
import { UtilsError } from './error-handling.js';
import { decodeToken } from './jwt-utils.js';

export const expressValidationResult = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    return next();
};

export const adminAuthorization = async (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decoded = decodeToken(token);
      const user = await getOneUserService(decoded.id);
      if (user.role === 'user') {
        throw new UtilsError(notAuth, 401);
      }
      req.user = {
        id: decoded.id,
        role: user.role,
      };
      return next();
    } catch (err) {
      return next(new UtilsError(notAuth, 401));
    }
  };

  export const userAuthorization = async (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];

      const decoded = decodeToken(token);
      const user = await getOneUserService(decoded.id);

      req.user = {
        id: decoded.id,
        role: user.role,
      };

      return next();
    } catch (err) {
      return next(new UtilsError(notAuth, 401));
    }
  };
