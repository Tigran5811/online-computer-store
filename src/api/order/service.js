// import { userNameExist, userEmailExist } from '../../constants/error-massages.js';
// import { ServiceError } from '../../utils/error-handling.js';
import {
    // getOneRepository,
    // getOneByUsernameRepository,
    createRepository,
    getAllRepository,
    // deleteRepository,
    // updateRepository,
    // getOneByEmailRepository,
} from './repository.js';
import { getAllService as userId } from '../user/service.js';

// import { createService as createAdditionalService } from '../user-additional/service.js';

export const getAllService = async () => getAllRepository(['user', 'laptop'], ['user', 'laptop']);

// export const getOneService = async (id) => {
//     const gotten = await getOneRepository(
//         id,
//         ['email', 'userName', 'userAdditional'],
//         ['userAdditional'],
//     );
//     if (!gotten) {
//         throw new ServiceError('User not found', 404);
//     }
//     return gotten;
// };

// const checkIsUserExistsByUserName = async (userName) => {
//     const userIsExists = await getOneByUsernameRepository(userName);
//     if (userIsExists) {
//         throw new ServiceError(userNameExist, 409);
//     }
// };

// const checkIsUserExistsByEmail = async (email) => {
//     const userIsExists = await getOneByEmailRepository(email);
//     if (userIsExists) {
//         throw new ServiceError(userEmailExist, 409);
//     }
// };

export const createService = async () => {
    const user = await userId('636a9eb58ab0ee5f3957f58e');
    // const laptop = await userId();
    createRepository({ user: user.id });
};

// export const deleteService = async (id) => {
//     await getOneService(id);
//     await deleteRepository(id);
// };

// export const updateService = async (id, body) => {
//     if (body.userName) {
//         await checkIsUserExistsByUserName(body.userName);
//     }
//     if (body.email) {
//         await checkIsUserExistsByEmail(body.email);
//     }
//     await getOneService(id);
//     await updateRepository(id, body);
// };
