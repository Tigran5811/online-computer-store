import { ServiceError } from '../../utils/error-handling.js';
import {
    getOneRepository,
    createRepository,
    getAllRepository,
    deleteRepository,
} from './repository.js';

export const getAllService = async () => getAllRepository([], {}, ['user', 'laptop', 'display', 'keyboard', 'mouse', 'processor', 'ram']);

export const getOneService = async (id) => {
    const gotten = await getOneRepository(id, ['user', 'laptop', 'display', 'keyboard', 'mouse', 'processor', 'ram']);
    if (!gotten) {
        throw new ServiceError('Order not found', 404);
    }
    return gotten;
};

export const createService = async (body) => createRepository(body);

export const deleteService = async (id) => {
    await getOneService(id);
    await deleteRepository(id);
};

export const getAllOrdersByUserService = async (userId) => {
    const users = await getAllRepository(['laptop'], { user: userId }, ['user', 'laptop']);

    return users;
};
