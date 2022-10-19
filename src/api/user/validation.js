export const nameValid = async (value) => {
    if (value.length < 4) {
        throw new Error();
    }
    if (value[0] < 'A' || value[0] > 'Z') {
        throw new Error();
    }
    for (let i = 1; i < value.length; i++) {
        if (value[i + 1] < 'a' || value[i + 1] > 'z') {
            throw new Error();
        }
    }
    return value;
};

export const userNameValid = async (body, value) => {
    if ((body.find((e) => e.userName === value))) {
        throw new Error();
    }
    return true;
};

export const ageValid = async (value) => {
    if (value < 1 || value > 150) {
        throw new Error();
    }
    return true;
};

export const checkPassword = (password) => {
    if (password.length < 8) {
        throw new Error('Password must bi greater then 7');
    }
};

export const validateCreateUser = async (body) => {
    await checkPassword(body.password);
    await ageValid(body.age);
    await nameValid(body.firstName);
    await nameValid(body.lastName);
    //    await userNameValid(body.userName);
};

export const validateUpdateUser = async (body) => {
    if (body.password) {
        await checkPassword(body.password);
    }
    if (body.age) {
        await ageValid(body.age);
    }
    if (body.firstName) {
        await nameValid(body.firstName);
    }
    if (body.lastName) {
        await nameValid(body.lastName);
    }
    // if (body.userName) {
    //     await userNameValid(body.userName);
    // }
};
