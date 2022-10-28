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
    const { index } = req.params;
    const users = await getOneService(index);
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
    const { index } = req.params;
    await deleteService(index);
    res.send('success');
  } catch (err) {
    next(err);
  }
};

export const updateController = async (req, res, next) => {
  try {
    const { index } = req.params;
    const { body } = req;
    await updateService(index, body);
    res.send('success');
  } catch (error) {
    next(error);
  }
};
