import {
  updateService, getOneService,
  getAllService, deleteService, changePasswordService,
} from './service.js';

export const getAllController = async (req, res, next) => {
  try {
    const users = await getAllService();
    res.send(users);
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

export const deleteController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await deleteService(id);
    res.send(deleted);
  } catch (err) {
    next(err);
  }
};

export const updateController = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { body } = req;
    const updated = await updateService(id, body);
    res.send(updated);
  } catch (error) {
    next(error);
  }
};

export const changePasswordController = async (req, res, next) => {
  try {
    const { body } = req;
    await changePasswordService(req.user.id, body);
    res.send({ message: 'success' });
  } catch (error) {
    next(error);
  }
};
