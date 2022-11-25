import { ServiceError } from '../../utils/error-handling.js';
import {
    getOneRepository,
    createRepository,
    getAllRepository,
    deleteRepository,
    updateRepository,
} from './repository.js';
import { getOneService as getOneServiceImage } from '../image/service.js';

export const getAllService = async () => getAllRepository(['name', 'price', 'image'], ['image']);

export const getOneService = async (id) => {
    const gotten = await getOneRepository(
        id,
        ['name', 'price', 'image'],
        ['image'],
    );
    if (!gotten) {
        throw new ServiceError('Mouse not found', 404);
    }
    return gotten;
};

export const createService = async (body) => {
    const {
        name, brand, isWireless, color, price, image,
    } = body;
    const getOneImage = await getOneServiceImage(image);
    return createRepository({
        name,
        brand,
        isWireless,
        color,
        price,
        image: getOneImage.id,
    });
};

export const deleteService = async (id) => {
    await getOneService(id);
    return deleteRepository(id);
};

export const updateService = async (id, body) => {
    await getOneService(id);
    return updateRepository(id, body);
};
