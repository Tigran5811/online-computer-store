import { expiredToken, invalidCred, notVerifiedEmail } from '../../constants/error-massages.js';
import { comparePassword, hashPassword } from '../../utils/bcrypt-utils.js';
import { ServiceError } from '../../utils/error-handling.js';
import {
    createService as userCreateService,
    updateService as userUpdateService,
    getOneByEmailService,
} from '../user/service.js';
import { decodeToken, getToken } from '../../utils/jwt-utils.js';
import { sendEmail } from '../../utils/email-utils.js';

export const signUpService = async (body) => {
    const user = await userCreateService({ ...body, isEmailVerified: false });
    const token = getToken({ id: user.id }, '15m');
    await sendEmail(user.email, 'Verification token', `Your verification token ${token}`);
    return user;
};

export const signInService = async (body) => {
    const { email, password } = body;
    let user;
    try {
        user = await getOneByEmailService(email);
        await comparePassword(password, user.password);
    } catch (err) {
        throw new ServiceError(invalidCred, 401);
    }
    if (!user?.isEmailVerified) {
        const token = getToken({ id: user.id }, '15m');
        await sendEmail(user.email, 'Verification token', `Your verification token ${token}`);
        throw new ServiceError(notVerifiedEmail, 401);
    }
    return getToken({ id: user.id }, '360d');
};

export const verifyEmailService = async (body) => {
    const { token } = body;
    try {
        const decoded = decodeToken(token);
        await userUpdateService(decoded.id, { isEmailVerified: true });
    } catch (error) {
        throw new ServiceError(expiredToken, 401);
    }
};

export const forgetPasswordService = async (body) => {
    const { email } = body;

    try {
        const user = await getOneByEmailService(email);
        const token = getToken({ id: user.id }, '15m');
        await sendEmail(user.email, 'Recovering token', `Your password recovering token ${token}`);
    } catch (err) {
        throw new ServiceError(invalidCred, 401);
    }
};

export const recoverPasswordService = async (body) => {
    const { token, newPassword, confirmPassword } = body;
    let decoded;
    try {
        decoded = decodeToken(token);
    } catch (error) {
        throw new ServiceError(expiredToken, 401);
    }
    if (newPassword !== confirmPassword) {
        throw new ServiceError(invalidCred, 401);
    }
    const hash = await hashPassword(newPassword);
    await userUpdateService(decoded.id, { password: hash });
};
