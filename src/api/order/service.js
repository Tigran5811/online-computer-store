// import { userNameExist, userEmailExist } from '../../constants/error-massages.js';
import { ServiceError } from '../../utils/error-handling.js';
import {
    getOneRepository,
    createRepository,
    getAllRepository,
    deleteRepository,
    // getAllOrdersByUserRepository,
    // updateRepository,
} from './repository.js';

export const getAllService = async () => getAllRepository(['user'], ['laptop']);

export const getOneService = async (id) => {
    const gotten = await getOneRepository(id, ['user'], ['laptop']);
    if (!gotten) {
        throw new ServiceError('User not found', 404);
    }
    return gotten;
};

export const createService = async (body) => createRepository(body);

export const deleteService = async (id) => {
    await getOneService(id);
    await deleteRepository(id);
};

export const getAllOrdersByUserService = async (id) => {
    const user = await getAllRepository(['user'], ['laptop']);
    const k = user.find((item) => {
        if (item.user.id === id) {
            return item.laptop;
        }
    });
    return k.laptop;
};
