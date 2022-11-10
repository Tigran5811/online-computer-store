import { RepositoryError } from '../../utils/error-handling.js';
import { Order } from './models/order.model.js';

export const getAllRepository = async (populateProps, populateProps1) => {
    try {
        return await Order.find().populate([populateProps, populateProps1]);
    } catch (err) {
        throw new RepositoryError(err.message, 500);
    }
};

export const getOneRepository = async (id, populateProps, populateProps1) => {
    try {
        return await Order.findOne({ _id: id }).populate([populateProps, populateProps1]);
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

export const getAllOrdersByUserRepository = async (id, populateProps, populateProps1) => {
    try {
        return Order.findById({ id }).populate([populateProps, populateProps1]);
    } catch (err) {
        throw new RepositoryError(err.message, 500);
    }
};
