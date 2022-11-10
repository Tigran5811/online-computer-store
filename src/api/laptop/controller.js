import {
  updateService, createService, getOneService,
  getAllService, deleteService,
} from './service.js';

export const getAllController = async (req, res, next) => {
  try {
    const laptops = await getAllService();
    res.send(laptops);
  } catch (err) {
    next(err);
  }
};

export const getOneController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const laptops = await getOneService(id);
    res.send(laptops);
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

export const updateController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const updated = await updateService(id, body);
    res.send(updated);
  } catch (error) {
    next(error);
  }
};
