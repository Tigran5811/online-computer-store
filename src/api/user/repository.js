import { RepositoryError } from '../../utils/error-handling.js';
import { User } from './models/user.model.js';

export const getAllRepository = async (projections) => {
    try {
        return await User.find().select(projections);
    } catch (err) {
        throw new RepositoryError(err.message, 500);
    }
};

export const getOneRepository = async (id, projections) => {
    try {
        return await User.findOne({ _id: id }, projections);
    } catch (err) {
        throw new RepositoryError(err.message, 500);
    }
};

export const getOneByUsernameRepository = async (userName) => {
    try {
        return await User.findOne({ userName });
    } catch (err) {
        throw new RepositoryError(err.message, 500);
    }
};
export const getOneByEmailRepository = async (email) => {
    try {
        return await User.findOne({ email });
    } catch (err) {
        throw new RepositoryError(err.message, 500);
    }
};

export const createRepository = async (body) => {
    try {
        const user = new User(body);
        await user.save();
        return user;
    } catch (err) {
        throw new RepositoryError(err.message, 500);
    }
};

export const deleteRepository = async (id) => {
    try {
        await User.deleteOne({ _id: id });
    } catch (err) {
        throw new RepositoryError(err.message, 500);
    }
};

export const updateRepository = async (id, body) => {
    try {
        await User.updateOne({ _id: id }, body);
    } catch (err) {
        throw new RepositoryError(err.message, 500);
    }
};
