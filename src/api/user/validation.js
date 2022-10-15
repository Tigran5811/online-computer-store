export const nameValid = async (value) => {
    if (value.length < 4) {
        return false;
    }
    if (value[0] < 'A' || value[0] > 'Z') {
        return false;
    }
    for (let i = 1; i < value.length; i++) {
        if (value[i + 1] < 'a' || value[i + 1] > 'z') {
            return false;
        }
    }
    return value;
};

export const userNameValid = async (value, value1) => {
    if ((value.find((e) => e.userName === value1))) {
        return true;
    }
    return false;
};

export const ageValid = async (value) => {
    if (value < 1 || value > 150) {
        return false;
    }
    return true;
};
