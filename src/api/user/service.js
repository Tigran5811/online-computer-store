import path from 'path';
import { readFile, writeFile, exists } from '../../utils/fs-utils.js';
import { ServiceError } from '../../utils/error-handling.js';

const filePath = path.resolve('user.json');

const checkFileExists = async () => {
    if (!exists(filePath)) {
        await writeFile(filePath, []);
    }
};

export const getUsersService = async () => readFile(filePath);

export const getUserService = async (index) => {
    const users = await getUsersService();
    if (!users[index]) {
        throw new ServiceError('User not found', 404);
    }
    return users[index];
};

export const createUserService = async (body) => {
    await checkFileExists();
    const users = await readFile(filePath);
    const userIsExists = users.find((item) => item.userName === body.userName);
    if (userIsExists) {
        throw new ServiceError('username is exists', 409);
    }
    users.push(body);
    return writeFile(filePath, users);
};

export const nameDelService = async (body) => {
    const user = await readFile(filePath);
    for (let i = 0; i < user.length; i++) {
        if (user[i].userName === body) {
            user.splice(i, 1);
        }
    }
    return writeFile(filePath, user);
};

export const delIndexService = async (content) => {
    const user = await readFile(filePath);
    for (let i = 0; i < user.length; i++) {
        if (i === content) {
            user.splice(i, 1);
        }
    }
    return writeFile(filePath, user);
};

export const updateUserService = async (index, body) => {
    await checkFileExists();
    const user = await getUserService(index);
    const users = await readFile(filePath);
    users[index] = { ...user, ...body };
    return writeFile(filePath, users);
};
