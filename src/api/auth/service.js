import { comparePassword } from '../../utils/bcrypt-utils.js';
import { ServiceError } from '../../utils/error-handling.js';
import { sendEmail } from '../../utils/email-utils.js';
import {
    createService as userCreateService,
    getOneByEmailService,
} from '../user/service.js';
import { getToken } from '../../utils/jwt-utils.js';

export const signUpService = async (body) => {
    const user = await userCreateService(body);
    await sendEmail(user.email, 'Registration', 'You successfully registered');
    return user;
};

export const signInService = async (body) => {
    const { email, password } = body;
    try {
        const user = await getOneByEmailService(email);
        await comparePassword(password, user.password);
        const token = getToken({ id: user.id }, '360d');
        return token;
    } catch (err) {
        throw new ServiceError('invalid credentials', 401);
    }
};
