import { ValidationError } from '../../utils/error-handling.js';

const checkPassword = (password) => {
    if (password.length < 8) {
        throw new ValidationError('Password must bi greater then 7');
    }
};

const checkUserName = (userName) => {
    if (userName.length < 2) {
        throw new ValidationError('User name must bi greater then 2');
    }
};

export const checkName = async (value) => {
    if (value.length < 4) {
        throw new ValidationError('The name must bi greater then 4');
    }
    if (value[0] < 'A' || value[0] > 'Z') {
        throw new ValidationError('The name must start with an uppercase letter');
    }
    for (let i = 1; i < value.length; i++) {
        if (value[i + 1] < 'a' || value[i + 1] > 'z') {
            throw new ValidationError('Name must consist of letters only');
        }
    }
};

export const checkAge = async (value) => {
    if (value < 1 || value > 150) {
        throw new ValidationError('Age must be positive and less than 150');
    }
};

export const validateCreateUser = async (req, res, next) => {
    try {
        const { body } = req;
        await checkPassword(body.password);
        await checkAge(body.age);
        await checkName(body.firstName);
        await checkName(body.lastName);
        await checkUserName(body.userName);
        next();
    } catch (err) {
        next(err);
    }
};

export const validateUpdateUser = async (req, res, next) => {
    try {
        const { body } = req;
        if (body.password) {
            await checkPassword(body.password);
        }
        if (body.age) {
            await checkAge(body.age);
        }
        if (body.firstName) {
            await checkName(body.firstName);
        }
        if (body.lastName) {
            await checkName(body.lastName);
        }
        if (body.userName) {
            await checkUserName(body.userName);
        }
        next();
    } catch (err) {
        next(err);
    }
};
