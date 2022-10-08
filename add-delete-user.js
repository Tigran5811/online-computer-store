import path from 'path';
import { readFile, writeFile, isExists } from './fs-utilities.js';

const usersPath = path.resolve('users.json');

export const addUser = async (login, pass) => {
    if (!isExists(usersPath)) {
        return writeFile(usersPath, [{ login, pass }]);
    }
    const users = await readFile(usersPath);
    const userIsExists = users.find((item) => item.login === login);
    if (userIsExists) {
        return 0;
    }
    users.push({ login, pass });
    return writeFile(usersPath, users);
};

export const deleteUserName = async (login) => {
    const users = await readFile(usersPath);
    const userIndex = users.findIndex((item) => item.login === login);
    users.splice(userIndex, 1);
    return writeFile(usersPath, users);
};

export const getUSers = async () => {
    const users = await readFile(usersPath);
    return users;
};

export const deleteUserIndex = async (index) => {
    const users = await readFile(usersPath);
    users.splice(index, 1);
    return writeFile(usersPath, users);
};

const getRequestData = async (req) => new Promise((res) => {
    req.on('data', (userData) => {
        res(JSON.parse(userData));
    });
});

export const userMethods = async (method, req) => {
    switch (method) {
        case 'GET':
            return getUSers();

        case 'POST':
                const { username, password } = await getRequestData(req);
                await addUser(username, password);
                return { message: 'User created' };

        default:
            return { message: 'Method not found' };
    }
};
