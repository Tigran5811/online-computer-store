import { ServiceError } from '../../utils/error-handling.js';
import { User } from './models/user.model.js';

export const getAllService = async () => User.find();

export const getOneService = async (id) => {
    const users = await User.findOne({ _id: id });
    if (!users) {
        throw new ServiceError('User not found', 404);
    }
    return users;
};
const checkIsUserExistsByUserName = async (userName) => {
    const userIsExists = await User.findOne({ userName });

    if (userIsExists) {
        throw new ServiceError('username is exists', 409);
    }
};
const checkIsUserExistsByEmail = async (email) => {
    const emailIsExists = await User.findOne({ email });

    if (emailIsExists) {
        throw new ServiceError('email is exists', 409);
    }
};

export const createService = async (body) => {
    await checkIsUserExistsByUserName(body.userName);
    await checkIsUserExistsByEmail(body.email);
    const user = new User(body);
    await user.save();
    return user;
};

export const deleteService = async (id) => {
    await getOneService(id);
    await User.deleteOne({ _id: id });
};

export const updateService = async (id, body) => {
    if (body.userName) {
        await checkIsUserExistsByUserName(body.userName);
    }
    if (body.email) {
        await checkIsUserExistsByEmail(body.email);
    }
    await getOneService(id);
    await User.updateOne({ _id: id }, body);
};
