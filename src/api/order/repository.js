import { RepositoryError } from '../../utils/error-handling.js';
import { Order } from './models/order.model.js';

export const getAllRepository = async (projections) => {
    try {
        return await Order.find().select(projections).populate(projections);
    } catch (err) {
        throw new RepositoryError(err.message, 500);
    }
};

// export const getOneRepository = async (id, projections, populateProps) => {
//     try {
//         return await Order.findOne(
//             { _id: id },
//             projections,
//         ).populate(populateProps);
//     } catch (err) {
//         throw new RepositoryError(err.message, 500);
//     }
// };

// export const getOneByUsernameRepository = async (userName) => {
//     try {
//         return await User.findOne({ userName });
//     } catch (err) {
//         throw new RepositoryError(err.message, 500);
//     }
// };

// export const getOneByEmailRepository = async (email) => {
//     try {
//         return await User.findOne({ email });
//     } catch (err) {
//         throw new RepositoryError(err.message, 500);
//     }
// };

export const createRepository = async (body) => {
    try {
        const created = new Order(body);
        await created.save();
        return created;
    } catch (err) {
        throw new RepositoryError(err.message, 500);
    }
};

// export const deleteRepository = async (id) => {
//     try {
//         await User.deleteOne({ _id: id });
//         return { id };
//     } catch (err) {
//         throw new RepositoryError(err.message, 500);
//     }
// };

// export const updateRepository = async (id, body) => {
//     try {
//         return await User.updateOne({ _id: id }, body);
//     } catch (err) {
//         throw new RepositoryError(err.message, 500);
//     }
// };
