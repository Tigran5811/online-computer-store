import { userNameExist, userEmailExist } from '../../constants/error-massages.js';
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
import { createService as createAdditionalService } from '../user-additional/service.js';
import { hashPassword } from '../../utils/bcrypt-utils.js';

export const getAllService = async () => getAllRepository(
    ['email', 'userName', 'userAdditional', 'password'],
    ['userAdditional'],
);

export const getOneService = async (id) => {
    const gotten = await getOneRepository(
        id,
        ['email', 'userName', 'userAdditional'],
        ['userAdditional'],
    );
    if (!gotten) {
        throw new ServiceError('User not found', 404);
    }
    return gotten;
};

export const getOneByEmailService = async (email) => {
    const gotten = await getOneByEmailRepository(email, ['password']);
    if (!gotten) {
        throw new ServiceError('User not found', 404);
    }
    return gotten;
};

const checkIsUserExistsByUserName = async (userName) => {
    const userIsExists = await getOneByUsernameRepository(userName);
    if (userIsExists) {
        throw new ServiceError(userNameExist, 409);
    }
};

const checkIsUserExistsByEmail = async (email) => {
    const userIsExists = await getOneByEmailRepository(email, ['id']);
    if (userIsExists) {
        throw new ServiceError(userEmailExist, 409);
    }
};

export const createService = async (body) => {
    const {
        userName, password, firstName, lastName, age, email, ...additionalData
    } = body;
    await checkIsUserExistsByUserName(userName);
    await checkIsUserExistsByEmail(email);
    const createdAdditionalData = await createAdditionalService(additionalData);

    const hash = await hashPassword(password);

    return createRepository({
        userName,
        password: hash,
        firstName,
        lastName,
        age,
        email,
        userAdditional: createdAdditionalData.id,
    });
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
