import { RepositoryError } from '../../utils/error-handling.js';
import { Laptop } from './models/laptop.model.js';

export const getAllRepository = async (projections,populateProps) => {
    try {
        return await Laptop.find().select(projections).populate(populateProps);
    } catch (err) {
        throw new RepositoryError(err.message, 500);
    }
};

export const getOneRepository = async (id, projections,populateProps) => {
    try {
        return await Laptop.findOne(
            { _id: id },
            projections,
        ).populate(populateProps)
    } catch (err) {
        throw new RepositoryError(err.message, 500);
    }
};


export const createRepository = async (body) => {
    try {
        console.log(body);
        const created = new Laptop(body);
        await created.save();
        return created;
    } catch (err) {
        throw new RepositoryError(err.message, 500);
    }
};

export const deleteRepository = async (id) => {
    try {
        await Laptop.deleteOne({ _id: id });
        return { id };
    } catch (err) {
        throw new RepositoryError(err.message, 500);
    }
};

export const updateRepository = async (id, body) => {
    try {
        return await Laptop.updateOne({ _id: id }, body);
    } catch (err) {
        throw new RepositoryError(err.message, 500);
    }
};
