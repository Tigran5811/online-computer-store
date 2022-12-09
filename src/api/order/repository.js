import { RepositoryError } from '../../utils/error-handling.js';
import { Order } from './models/order.model.js';

export const getAllRepository = async (projections, populateProps, userId) => {
    try {
        return await Order.find()
        .select(projections)
        .populate(populateProps)
        .where({ user: userId });
    } catch (err) {
        throw new RepositoryError(err.message, 500);
    }
};

export const getOneRepository = async (id, userId, populateProps) => {
    try {
        return await Order.findOne({ _id: id })
        .populate(populateProps)
        .where({ user: userId });
    } catch (err) {
        throw new RepositoryError(err.message, 500);
    }
};

export const createRepository = async (body) => {
    try {
        const created = new Order(body);
        await created.save();
        return created;
    } catch (err) {
        throw new RepositoryError(err.message, 500);
    }
};

export const deleteRepository = async (id) => {
    try {
        await Order.deleteOne({ _id: id });
        return { id };
    } catch (err) {
        throw new RepositoryError(err.message, 500);
    }
};
