import { signUpService, signInService } from './service.js';

export const signUpController = async (req, res, next) => {
  try {
    const { body } = req;

    const created = await signUpService(body);
    res.send(created);
  } catch (err) {
    next(err);
  }
};

export const signInController = async (req, res, next) => {
  try {
    const { body } = req;

    const created = await signInService(body);
    res.send(created);
  } catch (err) {
    next(err);
  }
};
