import { ServiceError } from '../../utils/error-handling.js';
import {
    getOneRepository,
    createRepository,
    getAllRepository,
    deleteRepository,
} from './repository.js';

export const getAllService = async () => getAllRepository();

export const getOneService = async (id) => {
    const gotten = await getOneRepository(id);
    if (!gotten) {
        throw new ServiceError('Image not found', 404);
    }
    return gotten;
};

export const createService = async (body) => createRepository(body);

export const deleteService = async (id) => {
    await getOneService(id);
    return deleteRepository(id);
};
