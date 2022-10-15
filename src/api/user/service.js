import path from 'path';
import { readFile, writeFile, exists } from '../../utils/fs-utils.js';
import { nameValid, userNameValid, ageValid } from './validation.js';

const filePath = path.resolve('user.json');

export const addData = async (content) => {
    if (!(await nameValid(content.firstName))) {
        throw new Error();
    }
    if (!(await nameValid(content.lastName))) {
        throw new Error();
    }
    if (!(await ageValid(content.age))) {
        throw new Error();
    }
    if (!exists(filePath)) {
        await writeFile(filePath, [content]);
    }
    const user = await readFile(filePath);

    if (!(await userNameValid(user, content.userName))) {
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

export const ubdateUser = async (index, content) => {
    const user = await readFile(filePath);
    const {
        firstName, password, userName, lastName, age,
    } = content;

    if (firstName && (await nameValid(content.firstName))) {
        user[index].firstName = firstName;
    }
    if (password) {
        user[index].password = password;
    }
    if (userName && (await nameValid(content.userNameValid))) {
        user[index].userName = userName;
    }
    if (lastName && (await nameValid(content.lastName))) {
        user[index].lastName = lastName;
    }
    if (age && (await nameValid(content.ageValid))) {
        user[index].age = age;
    }
    await writeFile(filePath, user);
};
