// import { userNameExist, userEmailExist } from '../../constants/error-massages.js';
import { ServiceError } from '../../utils/error-handling.js';
import {
    getOneRepository,
    // getOneByUsernameRepository,
    createRepository,
    getAllRepository,
    deleteRepository,
    updateRepository,
    // getOneByEmailRepository,
} from './repository.js';

export const getAllService = async () => getAllRepository(
    ['Manufacturer', 'Price'],
);

export const getOneService = async (id) => {
    const gotten = await getOneRepository(
        id,
        ['Manufacturer', 'Price'],
    );
    if (!gotten) {
        throw new ServiceError('User not found', 404);
    }
    return gotten;
};

export const createService = async (body) => createRepository(body);

export const deleteService = async (id) => {
    await getOneService(id);
    return deleteRepository(id);
};

export const updateService = async (id, body) => {
    await getOneService(id);
    return updateRepository(id, body);
};
