// import { RepositoryError } from '../../utils/error-handling.js';
// import { UserAdditional } from './models/user-additional.model.js.js';

// export const getAllRepository = async (projections) => {
//     try {
//         return await UserAdditional.find().select(projections);
//     } catch (err) {
//         throw new RepositoryError(err.message, 500);
//     }
// };

// export const getOneRepository = async (id, projections) => {
//     try {
//         return await UserAdditional.findOne({ _id: id }, projections);
//     } catch (err) {
//         throw new RepositoryError(err.message, 500);
//     }
// };

// export const createRepository = async (body) => {
//     try {
//         const created = new UserAdditional(body);
//         await created.save();
//         return created;
//     } catch (err) {
//         throw new RepositoryError(err.message, 500);
//     }
// };

// export const deleteRepository = async (id) => {
//     try {
//          await UserAdditional.deleteOne({ _id: id });
//          return { id };
//     } catch (err) {
//         throw new RepositoryError(err.message, 500);
//     }
// };

// export const updateRepository = async (id, body) => {
//     try {
//         return await UserAdditional.updateOne({ _id: id }, body);
//     } catch (err) {
//         throw new RepositoryError(err.message, 500);
//     }
// };
