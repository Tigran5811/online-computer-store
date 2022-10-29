import {
  updateService, createService, getOneService,
  getAllService, deleteService,
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

export const createController = async (req, res, next) => {
  try {
    const { body } = req;
    await createService(body);
    res.send('success');
  } catch (err) {
    next(err);
  }
};

export const deleteController = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteService(id);
    res.send('success');
  } catch (err) {
    next(err);
  }
};

export const updateController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await updateService(id, body);
    res.send('success');
  } catch (error) {
    next(error);
  }
};
