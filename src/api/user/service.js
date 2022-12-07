import { ServiceError } from '../../utils/error-handling.js';
import {
    createRepository,
    softDeleteRepository,
    getAllRepository,
    getOneByEmailRepository,
    getOneByUsernameRepository,
    getOneRepository, updateRepository,
} from './repository.js';
import {
    createService as createAdditionalService,
} from '../user-additional/service.js';
import {
    emailExist, usernameExist, notFound, invalidCred,
} from '../../constants/error-massages.js';
import { hashPassword } from '../../utils/bcrypt-utils.js';

const existsByUsername = async (username) => {
    const userExists = await getOneByUsernameRepository(username);
    if (userExists) {
        throw new ServiceError(usernameExist, 409);
    }
};

const existsByEmail = async (email) => {
    const userIsExists = await getOneByEmailRepository(email);
    if (userIsExists) {
        throw new ServiceError(emailExist, 409);
    }
};

export const getOneByEmailService = async (email) => {
    const gotten = await getOneByEmailRepository(email, ['password'], 'email', 'isEmailVerified');
    if (!gotten) {
        throw new ServiceError(...notFound('User'));
    }
    return gotten;
};

export const getAllService = async () => getAllRepository(['email', 'username', 'deletedAt', 'userAdditional', 'isEmailVerified'], ['userAdditional']);

export const getOneService = async (id) => {
    const gotten = await getOneRepository(id, ['email', 'username', 'password', 'userAdditional', 'isEmailVerified'], ['userAdditional']);
    if (!gotten) {
        throw new ServiceError(notFound('User'), 404);
    }
    return gotten;
};

export const createService = async (body) => {
    const {
        username, password, firstName, lastName, age, email, ...additionalData
    } = body;
    await existsByUsername(username);
    await existsByEmail(email);
    const createdAdditionalData = await createAdditionalService(additionalData);

    const hash = await hashPassword(password);

    return createRepository({
        username,
        password: hash,
        firstName,
        lastName,
        age,
        email,
        userAdditional: createdAdditionalData.id,
    });
};

export const updateService = async (id, body) => {
    if (body.username) {
        await existsByUsername(body.username);
    }
    if (body.email) {
        await existsByEmail(body.email);
    }
    await getOneService(id);
    return updateRepository(id, body);
};

export const changePasswordService = async (body, userId) => {
    const {
        oldPassword, newPassword, confirmPassword,
    } = body;
    const user = await getOneService(userId);
    if (oldPassword !== user.password) {
        throw new ServiceError(invalidCred, 401);
    }
    if (newPassword !== confirmPassword) {
        throw new ServiceError(invalidCred, 401);
    }
    const hash = await hashPassword(newPassword);
    await updateService(user.id, { password: hash });
};

export const deleteService = async (id) => {
    await getOneService(id);
    return softDeleteRepository(id);
};
