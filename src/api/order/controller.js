import {
  createService,
  getAllService,
  getOneService,
   deleteService,

} from './service.js';

export const getAllController = async (req, res, next) => {
  try {
    const orders = await getAllService();
    res.send(orders);
  } catch (err) {
    next(err);
  }
};

export const getOneController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const users = await getOneService(id);
    res.send(users);
  } catch (err) {
    next(err);
  }
};

export const createController = async (req, res, next) => {
  try {
    const { body } = req;
    const created = await createService(body);
    res.send(created);
  } catch (err) {
    next(err);
  }
};

export const deleteController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await deleteService(id);
    res.send(deleted);
  } catch (err) {
    next(err);
  }
};
