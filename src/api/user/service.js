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
    emailExist, usernameExist, notFound, invalidCred,
} from '../../constants/error-massages.js';
import { hashPassword, comparePassword } from '../../utils/bcrypt-utils.js';

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

export const getAllService = async () => getAllRepository(['email', 'username', 'deletedAt', 'isEmailVerified']);

export const getOneService = async (id) => {
    const gotten = await getOneRepository(id, ['email', 'username', 'password', 'isEmailVerified', 'role']);
    if (!gotten) {
        throw new ServiceError(notFound('User'), 404);
    }
    return gotten;
};

export const createService = async (body) => {
    await existsByUsername(body.username);
    await existsByEmail(body.email);
    const hash = await hashPassword(body.password);
    return createRepository({
        ...body,
        password: hash,
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

export const changePasswordService = async (userId, body) => {
    const {
        password, newPassword, confirmPassword,
    } = body;

    const user = await getOneService(userId);
    const chekaPassword = await comparePassword(password, user.password);
    if (!chekaPassword) {
        throw new ServiceError(invalidCred, 401);
    }

    if (newPassword !== confirmPassword) {
        throw new ServiceError(invalidCred, 401);
    }

    const hash = await hashPassword(newPassword);
    await updateService(user.id, { password: hash });
};

export const deleteService = async (id) => {
    const user = await getOneService(id);
    if (user.role === 'SuperAdmin') {
        throw new ServiceError('admin cannot be deleted', 401);
    }

    return softDeleteRepository(id);
};
