import path from 'path';
import { readFile, writeFile, exists } from '../../utils/fs-utils.js';
import { userNameValid, validateCreateUser, validateUpdateUser } from './validation.js';

const filePath = path.resolve('user.json');
const checkFileExists = async () => {
    if (!exists(filePath)) {
        await writeFile(filePath, []);
    }
};
export const addData = async (content) => {
    await checkFileExists();
    await validateCreateUser(content);
    const user = await readFile(filePath);
    await userNameValid(user, content.userName);
    if (await userNameValid(user, content.userName)) {
        user.push(content);
        await writeFile(filePath, user);
    }
};
export const nameDel = async (content) => {
    const user = await readFile(filePath);
    for (let i = 0; i < user.length; i++) {
        if (user[i].userName === content) {
            user.splice(i, 1);
        }
    }
    await writeFile(filePath, user);
};
export const getUsers = async () => {
    const users = await readFile(filePath);
    return users;
};

export const getUser = async (index) => {
    const users = await getUsers();
    if (!users[index]) {
        throw new Error('User not found');
    }
    return users[index];
};

export const delIndex = async (content) => {
    const user = await readFile(filePath);
    for (let i = 0; i < user.length; i++) {
        if (i === content) {
            user.splice(i, 1);
        }
    }
    await writeFile(filePath, user);
};

export const ubdateUser = async (index, body) => {
    await checkFileExists();
    const user = await getUser(index);
    const users = await readFile(filePath);
    if (body.userName) {
        await userNameValid(users, body.userName);
    }
    await validateUpdateUser(body);
    users[index] = { ...user, ...body };
    await writeFile(filePath, users);
};
