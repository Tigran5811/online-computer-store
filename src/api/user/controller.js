import {
  updateUserService, createUserService, getUserService,
  getUsersService, delIndexService,
} from './service.js';

export const getUsersController = async (req, res, next) => {
  try {
    const users = await getUsersService();
    res.send(users);
  } catch (err) {
    next(err);
  }
};

export const getUserController = async (req, res, next) => {
  try {
    const { index } = req.params;
    const users = await getUserService(index);
    res.send(users);
  } catch (err) {
    next(err);
  }
};

export const createUserController = async (req, res, next) => {
  try {
    const { body } = req;
    await createUserService(body);
    res.send('success');
  } catch (error) {
    next(error);
  }
};

export const delIndexController = async (req, res, next) => {
  try {
    const { index } = req.params;
    await delIndexService(Number(index));
    res.send('success');
  } catch (error) {
    next(error);
  }
};

export const updateUserController = async (req, res, next) => {
  try {
    const { index } = req.params;
    const { body } = req;
    await updateUserService(Number(index), body);
    res.send('success');
  } catch (error) {
    next(error);
  }
};
