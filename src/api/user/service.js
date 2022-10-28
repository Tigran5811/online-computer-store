import path from 'path';
import { readFile, writeFile, exists } from '../../utils/fs-utils.js';
import { ServiceError } from '../../utils/error-handling.js';

const filePath = path.resolve('user.json');

const checkFileExists = async () => {
    if (!exists(filePath)) {
        await writeFile(filePath, []);
    }
};

export const getAllService = async () => readFile(filePath);

export const getOneService = async (index) => {
        const users = await getAllService();
    if (!users[index]) {
        throw new ServiceError('User not found', 404);
    }
    return users[index];
};

export const createService = async (body) => {
    await checkFileExists();
    const users = await readFile(filePath);
    const userIsExists = users.find((item) => item.userName === body.userName);
    if (userIsExists) {
        throw new ServiceError('username is exists', 409);
    }
    users.push(body);
    return writeFile(filePath, users);
};

export const deleteService = async (index) => {
    await getOneService(index);
    const user = await readFile(filePath);
    for (let i = 0; i < user.length; i++) {
        if (i === index) {
            user.splice(i, 1);
        }
    }
    return writeFile(filePath, user);
};

export const updateService = async (index, body) => {
    await checkFileExists();
    const user = await getOneService(index);
    const users = await readFile(filePath);
    users[index] = { ...user, ...body };
    return writeFile(filePath, users);
};
