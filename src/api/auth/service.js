import { comparePassword } from '../../utils/bcrypt-utils.js';
import { ServiceError } from '../../utils/error-handling.js';
import {
 createService as userCreateService,
 getOneByEmailService,
} from '../user/service.js';

export const signUpService = async (body) => userCreateService(body);

export const signInService = async (body) => {
    const { email, password } = body;
    try {
        const user = await getOneByEmailService(email);
         await comparePassword(password, user.password);
    } catch (err) {
        throw new ServiceError('invalid credentials', 401);
    }
};
