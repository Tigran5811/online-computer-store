import { RepositoryError } from '../../utils/error-handling.js';
import { User } from './models/user.model.js';

export const getAllRepository = async (projections, populateProps) => {
    try {
        return await User.find()
        .where({ deletedAt: undefined })
        .select(projections)
        .populate(populateProps);
    } catch (err) {
        throw new RepositoryError(err.message, 500);
    }
};

export const getOneRepository = async (id, projections, populateProps) => {
    try {
        return await User.findOne({ _id: id }, projections).populate(populateProps);
    } catch (err) {
        throw new RepositoryError(err.message, 500);
    }
};

export const getOneByUsernameRepository = async (username) => {
    try {
        return await User.findOne({ username });
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
        const created = new User(body);
        await created.save();
        return created;
    } catch (err) {
        throw new RepositoryError(err.message, 500);
    }
};

export const updateRepository = async (id, body) => {
    try {
        return await User.updateOne({ _id: id }, body);
    } catch (err) {
        throw new RepositoryError(err.message, 500);
    }
};

export const deleteRepository = async (id) => {
    try {
        await User.deleteOne({ _id: id });
        return { id };
    } catch (err) {
        throw new RepositoryError(err.message, 500);
    }
};

export const softDeleteRepository = async (id) => {
    try {
        await User.updateOne({ _id: id }, { deletedAt: new Date() });
        return { id };
    } catch (err) {
        throw new RepositoryError(err.message, 500);
    }
};
