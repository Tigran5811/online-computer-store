import { comparePassword } from '../../utils/bcrypt-utils.js';
import { ServiceError } from '../../utils/error-handling.js';
import { sendEmail } from '../../utils/email-utils.js';
import {
    createService as userCreateService,
    updateService as userUpdateService,
    getOneByEmailService,
} from '../user/service.js';
import { decodeToken, getToken } from '../../utils/jwt-utils.js';

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
        throw new ServiceError('Invalid credentials', 401);
    }

    if (!user?.isEmailVerified) {
        const token = getToken({ id: user.id }, '15m');
        await sendEmail(user.email, 'Verification token', `Your verification token ${token}`);
        throw new ServiceError('Email is not verified, verification code is sent to your email ', 401);
    }
    const token = getToken({ id: user.id }, '360d');
    return token;
};

export const verifyEmailService = async (body) => {
    const { token } = body;
    try {
        const decoded = decodeToken(token);
        await userUpdateService(decoded.id, { isEmailVerified: true });
    } catch (err) {
        throw new ServiceError('Token expired', 401);
    }
};
