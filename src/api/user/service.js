import { ServiceError } from '../../utils/error-handling.js';
import {
    getOneRepository,
    getOneByUsernameRepository,
    createRepository,
    getAllRepository,
    deleteRepository,
    updateRepository,
    getOneByEmailRepository,
} from './repository.js';

export const getAllService = async () => getAllRepository(['email', 'userName']);

export const getOneService = async (id) => {
    const users = await getOneRepository(id, ['email', 'userName']);
    if (!users) {
        throw new ServiceError('User not found', 404);
    }
    return users;
};
const checkIsUserExistsByUserName = async (userName) => {
    const userIsExists = await getOneByUsernameRepository(userName);
    if (userIsExists) {
        throw new ServiceError('username is exists', 409);
    }
};
const checkIsUserExistsByEmail = async (email) => {
    const userIsExists = await getOneByEmailRepository(email);
    if (userIsExists) {
        throw new ServiceError('username is exists', 409);
    }
};

export const createService = async (body) => {
    await checkIsUserExistsByUserName(body.userName);
    await checkIsUserExistsByEmail(body.email);
    await createRepository(body);
};

export const deleteService = async (id) => {
    await getOneService(id);
    await deleteRepository(id);
};

export const updateService = async (id, body) => {
    if (body.userName) {
        await checkIsUserExistsByUserName(body.userName);
    }
    if (body.email) {
        await checkIsUserExistsByEmail(body.email);
    }
    await getOneService(id);
    await updateRepository(id, body);
};
