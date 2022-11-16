import { ServiceError } from '../../utils/error-handling.js';
import {
    getOneRepository,
    createRepository,
    getAllRepository,
    deleteRepository,
    updateRepository,
} from './repository.js';
import { getOneService as getOneServiceImage } from '../image/service.js'

export const getAllService = async () => getAllRepository(
    ['Manufacturer', 'Price', 'laptopImage'], ['laptopImage']);

export const getOneService = async (id) => {
    const gotten = await getOneRepository(
        id,
        ['Manufacturer', 'Price', 'laptopImage'],
        ['laptopImage']
    );
    if (!gotten) {
        throw new ServiceError('User not found', 404);
    }
    return gotten;
};


// export const createService = async (body) => createRepository(body);
export const createService = async (body) => {
    const {
        Manufacturer, SSD, Resolution, Diagonal, Price, laptopImage
    } = body;
    const getOneImage = await getOneServiceImage(laptopImage);
    return await createRepository({
        Manufacturer,
        SSD,
        Resolution,
        Diagonal,
        Price,
        laptopImage: getOneImage.id,
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
